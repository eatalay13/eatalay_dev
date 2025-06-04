import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CiLaptop } from "react-icons/ci";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TbCode } from "react-icons/tb";
import AboutSection from "./about-section";
import ContactCTA from "./contact-cta";

function HomeContainer() {
  const t = useTranslations("Home");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24 lg:py-32">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        {/* Blur efekti ve dekoratif unsurlar */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400/20 dark:bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-50 right-70 w-60 h-60 bg-amber-400/20 dark:bg-amber-500/20 rounded-full filter blur-3xl"></div>
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100/80 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 backdrop-blur-sm shadow-sm animate-fade-in-up">
            <span>{t("availability")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white animate-fade-in-up animate-delay-100">
            {t("hello")} <br />
            <span className="text-blue-700">{t("iAm")}</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl animate-fade-in-up animate-delay-200">
            {t("introduction")}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              {t("viewProjects")}
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 font-medium text-slate-700 dark:text-white bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg"
            >
              {t("contactMe")}
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/eatalaydev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/emrahatalay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@eatalay.dev"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/90 dark:border-slate-800/90 shadow-2xl backdrop-blur-sm">
            {/* Dekoratif halkalar */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-blue-400/30 blur-lg rounded-full"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/30 via-transparent to-blue-700/30 dark:from-blue-400/20 dark:to-blue-700/20"></div>
            <Image
              src="/images/profile.jpg"
              alt="Emrah Atalay"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section className="mb-24 relative">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-300/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="mb-12 text-center relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t("skills")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("skillsDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-12 h-12 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <TbCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("frontend")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {t("frontendDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-full shadow-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-12 h-12 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <CiLaptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("backend")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {t("backendDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {[".NET Core", "Node.js", "SQL", "NoSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-full shadow-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-12 h-12 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <CiLaptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("devops")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {t("devopsDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Docker", "CI/CD", "Azure", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-full shadow-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

export default HomeContainer;
