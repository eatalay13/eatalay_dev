import { useTranslations } from "next-intl";
import { IoIosBulb } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { TbCode } from "react-icons/tb";

function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="py-16 md:py-24 relative">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -top-20 -left-40 w-80 h-80 bg-blue-300/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-6">
          {t("title")}
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="mb-16">
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto text-center mb-8">
            {t("introduction")}
          </p>

          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto text-center">
            {t("tech_stack")}
          </p>

          <div className="flex flex-wrap justify-center mt-6 gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              ".NET Core",
              "Node.js",
              "SQL",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-14 h-14 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <TbCode className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("web_development_title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t("web_development_description")}
            </p>
          </div>

          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-14 h-14 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <MdDesignServices className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("architecture_title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t("architecture_description")}
            </p>
          </div>

          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/20 dark:border-slate-700/20">
            <div className="w-14 h-14 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 shadow-md">
              <IoIosBulb className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {t("problem_solving_title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {t("problem_solving_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
