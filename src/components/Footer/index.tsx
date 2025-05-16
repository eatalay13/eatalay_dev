"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const t = useTranslations("Navigation");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Emrah Atalay
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Full-Stack Developer, passionate about creating efficient and
              elegant solutions for web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/eatalay13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emrahatalay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@emrahatalay.com"
                className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                İstanbul, Turkey
              </li>
              <li>
                <a
                  href="mailto:info@emrahatalay.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  info@emrahatalay.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Emrah Atalay. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
            Built with Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
