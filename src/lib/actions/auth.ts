"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { LoginRequest, loginSchema } from "../schemas/authSchema";
import { createSession, decrypt, deleteSession } from "../session";
import { FormState } from "../types";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/admin/login");
  }

  return { isAuth: true, ...session };
});

export type LoginState = FormState<LoginRequest>;

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const validatedFields = await loginSchema.safeParseAsync({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Bilgilerinizi kontrol ediniz",
    };
  }

  const { username, password } = validatedFields.data;

  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
      },
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { message: "Kullanıcı adı veya şifre yanlış" };
  }

  await createSession({
    userId: user.id,
    email: user.email,
    username: user.username,
  });

  redirect("/admin");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}
