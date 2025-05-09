import { z } from "zod";

// Zod şeması ile form doğrulama
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .max(255, "İsim çok uzun"),
  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .max(255, "E-posta adresi çok uzun"),
  title: z
    .string()
    .min(3, "Konu en az 3 karakter olmalıdır")
    .max(255, "Konu çok uzun"),
  message: z
    .string()
    .min(10, "Mesaj en az 10 karakter olmalıdır")
    .max(5000, "Mesaj çok uzun"),
  honeyPot: z.string().max(0, "Bot algılandı").optional(),
  formToken: z.string(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
