import { PrismaClient } from "@prisma/client";

// Prisma istemcisi için global tip tanımı
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Prisma istemcisini oluştur veya mevcut olanı kullan
const prisma = global.prisma || new PrismaClient();

// Development modunda global nesneye kaydet
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
