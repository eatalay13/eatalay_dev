import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { CiLaptop } from "react-icons/ci";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TbCode } from "react-icons/tb";

function HomeContainer() {
  const t = useTranslations("Home");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24 lg:py-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div className="flex-1 space-y-6">
          {" "}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <span>{t("availability")}</span>
          </div>{" "}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("hello")} <br />
            <span className="text-blue-700">{t("iAm")}</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {t("introduction")}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t("viewProjects")}
              <FiArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 font-medium text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {t("contactMe")}
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-4">
            {" "}
            <a
              href="https://github.com/eatalay13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/emrahatalay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>{" "}
            <a
              href="mailto:info@emrahatalay.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Emrah Atalay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-24">
        <div className="mb-12 text-center">
          {" "}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t("skills")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("skillsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6">
              <TbCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {t("frontend")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              {t("frontendDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6">
              <CiLaptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {t("backend")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              {t("backendDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {[".NET Core", "Node.js", "SQL", "NoSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6">
              <CiLaptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {t("devops")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              {t("devopsDescription")}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Docker", "CI/CD", "Azure", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            {t("featuredProjects")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((project) => (
            <div
              key={project}
              className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={`/images/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {t(`project${project}Title`)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {t(`project${project}Description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "TailwindCSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`/projects/${project}`}
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    {t("viewDetails")} →
                  </Link>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 font-medium hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
          >
            {t("viewAllProjects")}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-10 md:p-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{t("letsWork")}</h2>
        <p className="text-lg text-indigo-50 max-w-2xl mx-auto mb-8">
          {t("ctaDescription")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 font-medium text-indigo-700 bg-white rounded-lg hover:bg-indigo-50 transition-colors"
        >
          {t("getInTouch")}
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

export default HomeContainer;
