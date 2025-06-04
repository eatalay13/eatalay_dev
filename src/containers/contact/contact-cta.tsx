"use client";

import { useTranslations } from "next-intl";
import { FiMail, FiMessageCircle, FiSend } from "react-icons/fi";

export default function ContactCta() {
  const t = useTranslations("Contact");

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-1">
      {/* Gradient border effect */}
      <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-8 lg:p-12">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full translate-y-12 -translate-x-12" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Icon group */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
              <FiMail className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white animate-pulse delay-150">
              <FiMessageCircle className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white animate-pulse delay-300">
              <FiSend className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@eatalay.dev"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiMail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t("cta.button")}
              <FiSend className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="text-sm text-slate-500 dark:text-slate-400">
              veya sosyal medya hesaplarımdan ulaşın
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
