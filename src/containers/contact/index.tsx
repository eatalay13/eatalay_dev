"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import Decorations from "./decorations";

function ContactContainer() {
  const t = useTranslations("Contact");

  return (
    <div className="relative min-h-screen">
      {/* Dekoratif arka plan elementleri */}
      <Decorations />

      {/* İçerik */}
      <div className="container mx-auto max-w-6xl px-4 pt-24 lg:pt-32 relative z-10">
        {/* Süsleyici eleman - üst */}
        <motion.div
          className="absolute top-16 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 opacity-70"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full border-4 border-dashed border-blue-400/30 dark:border-blue-500/30"></div>
        </motion.div>
        <div className="text-center mb-12 relative">
          {/* Üst paylaşılan çizgi */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <motion.p
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100/80 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 backdrop-blur-sm shadow-sm mb-3 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("subtitle")}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-blue-600 dark:text-blue-400">
              {t("title").split(" ")[0]}
            </span>{" "}
            {t("title").split(" ").slice(1).join(" ")}
          </motion.h1>

          {/* Alt paylaşılan çizgi */}
          <motion.div
            className="mx-auto w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>{" "}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Süsleyici köşe deseni */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 dark:border-blue-400/30 rounded-tl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500/30 dark:border-blue-400/30 rounded-br-xl"></div>

          {/* İletişim formu (2/3 genişlik) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Süsleyici eleman - form üstü */}
            <div className="absolute -top-6 left-1/3 w-8 h-8 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-sm"></div>
            <div className="absolute top-1/4 -left-4 w-2 h-2 bg-indigo-500/40 dark:bg-indigo-400/40 rounded-full"></div>

            <ContactForm />
          </motion.div>

          {/* İletişim bilgileri (1/3 genişlik) */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactContainer;
