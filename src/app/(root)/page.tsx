import TypewriterComponent from "@/components/type-writer";
import Image from "next/image";

async function Home() {
  return (
    <div>
      <h1 className="text-xl md:text-7xl font-bold flex items-center">
        <Image
          src="/images/pp-bw.jpeg"
          alt="Logo"
          width={50}
          height={50}
        />
        <TypewriterComponent strings={["FrontEnd", "BackEnd", "Mobile Developer", "Game Developer"]} />
      </h1>
      <p className="text-center mt-4">Welcome, Emrah Atalay!</p>
      <p className="text-center mt-2 text-xs">Email: emrahatalay92@gmail.com</p>
    </div>
  );
}

export default Home;