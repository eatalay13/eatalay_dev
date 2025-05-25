"use client";

import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("Contact");

  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
    </div>
  );
}
