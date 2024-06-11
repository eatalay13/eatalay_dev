import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[35rem] sm:w-[116rem] h-[56.6rem] mx-auto">
      <div className="sm:w-[116rem] sm:mt-[6rem] sm:mx-auto">
        <ul
          className="text-[#636363] text-base sm:flex sm:gap-[2.4rem] justify-end hidden"
        >
          <li className="hover:text-black transition">
            <a
              href="https://www.linkedin.com/in/emrah-atalay-934919184"
              target="_blank"
            >Linkedin</a>
          </li>
          <li className="hover:text-black transition">
            <a href="https://github.com/eatalay13" target="_blank"
            >Github</a>
          </li>
          <li className="hover:text-black transition">
            <a href="https://dribbble.com/eatalay13" target="_blank"
            >Dribbble</a>
          </li>
        </ul>
      </div>
      <div
        className="sm:absolute sm:left-[36.5rem] sm:top-[19rem]  h-screen flex flex-col items-start justify-center sm:flex sm:flex-col sm:justify-start"
      >
        <div
          className="sm:w-[5.6rem] sm:h-[5.6rem] mb-[2.4rem] w-[10.4rem] h-[10.4rem] justify-center items-center"
        >
          <Image
            src="/images/pp-bw.jpeg"
            height={250}
            width={250}
            className="object-cover w-[10.4rem] h-[10.4rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-full"
            alt="Avatar Photo"
          />
        </div>
        <div className="text-[#636363] mb-[2.4rem] w-[35rem]  sm:w-[59.6rem]">
          <p className="text-[3.2rem] sm:text-lg mb-[1.6rem] text-white">
            Hi, I’m Emrah.
          </p>
          <p>
            A Software Developer who develops well-architected applications.
            <br /><span
            >Passionate to develop them with engineering and design
              principles.</span>
            ⚡️
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-white text-[2rem] sm:text-base">Top Skills</p>
          <ul
            className="flex sm:flex gap-[0.6rem] sm:gap-[1.05rem] flex-wrap text-[#636363] mb-[4.8rem]"
          >
            <li>C#</li>
            <li>·</li>
            <li>TypeScript</li>
            <li>·</li>
            <li>React.js</li>
            <li>·</li>
            <li>Next.js</li>
            <li className="hidden sm:inline">·</li>
            <li>Software Design</li>
            <li>·</li>
            <li>User Experience</li>
          </ul>
        </div>
        <a
          href="mailto:emrahatalay92@gmail.com"
          className="bg-black text-white w-[35rem] sm:w-[15.3rem] h-[6.5rem] sm:h-[4rem] sm:py-[1.1rem] sm:px-[4.5rem] rounded-full
          flex justify-center items-center whitespace-nowrap text-[2.4rem] sm:text-base transition-transform transform duration-250 ease-in-out hover:scale-105 active:scale-100"
        >Say Hello</a>
      </div>
    </div>
  );
}
