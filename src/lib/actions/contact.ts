"use server";

import prisma from "@/lib/prisma";
import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import { z } from "zod";
import { contactSchema } from "../schemas/contactSchema";

// Bot koruma için token oluşturma
export async function generateFormToken() {
  const token = randomBytes(32).toString("hex");
  const cookieStore = await cookies();

  // 10 dakika geçerli olacak token oluştur
  cookieStore.set("form_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10, // 10 dakika
    path: "/",
  });

  return token;
}

// Form gönderimi sonucu dönüş tipi
type ActionResult = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

// useFormState için gerekli olan state formatta fonksiyon
export async function sendContactMessage(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  try {
    // Form token'ı doğrula (CSRF koruması)
    const cookieStore = await cookies();
    const storedToken = cookieStore.get("form_token")?.value;
    const formToken = formData.get("formToken") as string;

    if (!storedToken || !formToken || storedToken !== formToken) {
      return {
        success: false,
        error:
          "Geçersiz form oturumu. Lütfen sayfayı yenileyip tekrar deneyin.",
      };
    }

    // Form verilerini al
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      title: formData.get("subject") as string, // form'da subject olarak geçiyor
      message: formData.get("message") as string,
      honeyPot: formData.get("website") as string, // bot tuzağı alan
      formToken,
    };

    // Zod ile doğrulama
    const validatedData = contactSchema.parse(data);

    // Honeypot kontrolü (botu yakalamak için)
    if (validatedData.honeyPot && validatedData.honeyPot.length > 0) {
      // Sessizce başarılı döndür ama kaydetme (bot yanıltma)
      return { success: true };
    }

    // Veritabanına kaydet
    await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        title: validatedData.title,
        message: validatedData.message,
      },
    });

    // Form tokenini temizle (tekrar kullanımı önle)
    cookieStore.delete("form_token");

    return { success: true };
  } catch (error) {
    console.error("İletişim formu hatası:", error);

    if (error instanceof z.ZodError) {
      // Doğrulama hatası
      const fieldErrors = error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {} as Record<string, string>);

      return { success: false, fieldErrors };
    }

    return {
      success: false,
      error:
        "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    };
  }
}
