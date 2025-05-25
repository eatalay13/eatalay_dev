"use client";

import { useTranslations } from "next-intl";

export default function ContactCta() {
  const t = useTranslations("Contact");

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        {t("cta.title")}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
        {t("cta.description")}
      </p>
      <a
        href="mailto:info@emrahatalay.com"
        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        {t("cta.button")}
      </a>
    </div>
  );
}
