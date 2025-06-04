"use client";

import { useTranslations } from "next-intl";
import { FiMail, FiMessageCircle, FiSend } from "react-icons/fi";

export default function ContactHeader() {
  const t = useTranslations("Contact");

  return (
    <div className="text-center mb-16">
      {/* Floating icons */}
      <div className="relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-4 animate-bounce">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <FiMail className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-150">
              <FiMessageCircle className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-300">
              <FiSend className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          {t("title")}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
          {t("subtitle")}
        </p>
      </div>
    </div>
  );
}
