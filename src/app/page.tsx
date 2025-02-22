import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Terminal from "@/components/layout/Terminal";

export default function Home() {
  return (
    <main className="min-h-screen font-mono">
      <Terminal>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Terminal>
    </main>
  );
}
