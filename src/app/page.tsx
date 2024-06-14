import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

async function Home() {
  let user = await prisma.user.findFirst({
    where: {
      name: "Emrah Atalay"
    }
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: "Emrah Atalay",
        email: "emrahatalay92@gmail.com",
        password: "123456",
      },
    });
  }

  return (
    <div className="text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div>
        <h1 className="text-xl md:text-7xl font-bold flex items-center">
          <Image
            src="/images/pp-bw.jpeg"
            alt="Logo"
            width={50}
            height={50}
          />
          Next.js + Prisma
        </h1>
        <p className="text-center mt-4">Welcome, {user.name}!</p>
      </div>
    </div>
  );
}

export default Home;