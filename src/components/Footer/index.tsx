"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const t = useTranslations("Navigation");
  const f = useTranslations("Footer");

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-12 overflow-hidden backdrop-blur-md">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-purple-500/10 to-blue-600/20 dark:from-indigo-700/20 dark:via-purple-800/10 dark:to-blue-900/20 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-700/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              Emrah Atalay
            </h3>{" "}
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 max-w-md text-sm">
              {f("fullStackDeveloper")}
            </p>
            <div className="flex space-x-5 mt-4">
              <a
                href="https://github.com/eatalay13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emrahatalay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@emrahatalay.com"
                className="text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:ml-auto">
            {" "}
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-3">
              {f("links")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            {" "}
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-3">
              {f("contactHeading")}
            </h4>
            <ul className="space-y-2 text-sm">
              {" "}
              <li className="text-zinc-600 dark:text-zinc-300">
                {f("location")}
              </li>
              <li>
                <a
                  href="mailto:info@emrahatalay.com"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  info@emrahatalay.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200/30 dark:border-zinc-700/30 flex flex-col md:flex-row justify-between items-center">
          {" "}
          <p className="text-zinc-500 dark:text-zinc-400 text-xs">
            &copy; {currentYear} Emrah Atalay. {f("copyright")}
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-2 md:mt-0">
            {f("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
