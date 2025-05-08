const { PrismaClient } = require("@/generated/prisma-client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  try {
    // Admin kullanıcısı oluştur
    const adminExists = await prisma.user.findUnique({
      where: {
        email: "admin@eatalay.dev",
      },
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("Admin123!", 10);

      const admin = await prisma.user.create({
        data: {
          name: "Admin Kullanıcı",
          username: "admin",
          email: "admin@eatalay.dev",
          password: hashedPassword,
          role: "ADMIN",
          bio: "Site yöneticisi",
          isActive: true,
        },
      });

      console.log("Admin kullanıcısı oluşturuldu:", admin.email);
    } else {
      console.log("Admin kullanıcısı zaten mevcut:", adminExists.email);
    }

    // Diğer seed işlemleri buraya eklenebilir

    console.log("Seed işlemi başarıyla tamamlandı.");
  } catch (error) {
    console.error("Seed işlemi sırasında hata oluştu:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
