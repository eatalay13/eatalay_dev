"use client";

import { corinthia } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const f = useTranslations("Footer");

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-12 overflow-hidden backdrop-blur-xl">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-blue-600/10 dark:from-blue-700/15 dark:via-blue-800/10 dark:to-blue-900/20 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 dark:bg-blue-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-400/5 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-12">
            <h3
              className={`${corinthia.className} text-3xl text-slate-900 dark:text-white mb-2 text-shadow-sm`}
            >
              Emrah Atalay
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              {f("fullStackDeveloper")}
            </p>
            <div className="flex space-x-5 mt-4">
              <a
                href="https://github.com/eatalay13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emrahatalay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:emrahatalay92@gmail.com"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200/30 dark:border-slate-700/30 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            &copy; {currentYear} Emrah Atalay. {f("copyright")}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 md:mt-0">
            {f("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
