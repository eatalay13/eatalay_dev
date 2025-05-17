"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiMail, FiMessageCircle } from "react-icons/fi";

function ContactCTA() {
  const t = useTranslations("Home");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative rounded-xl overflow-hidden mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Arka plan ve süsleyici öğeler */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-800"></div>

      {/* Dekoratif şekiller */}
      <svg
        className="absolute top-0 right-0 h-20 w-20 md:h-32 md:w-32 text-indigo-500/20"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle cx="75" cy="25" r="20" />
        <circle cx="25" cy="75" r="15" />
        <circle cx="85" cy="85" r="25" />
      </svg>

      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 blur-2xl"></div>

      <div className="absolute h-full w-1/4 right-0 top-0 bg-white/5 skew-x-12"></div>

      {/* İçerik katmanı */}
      <div className="relative grid md:grid-cols-5 gap-4 p-6 sm:p-8 md:p-12">
        {/* Sol taraftaki içerik (3 sütun) */}
        <div className="md:col-span-3 text-white">
          <motion.span
            className="inline-block py-1 px-3 mb-4 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-blue-50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("letsWork")}
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              {t("letsWork")}
            </span>
          </motion.h2>

          <motion.p
            className="text-blue-100/80 text-lg mb-6 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("ctaDescription")}
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-50 hover:translate-y-[-2px] hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-indigo-600"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FiMessageCircle className="mr-2" />
              {t("getInTouch")}
              <FiArrowRight
                className={`ml-2 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </Link>
          </motion.div>
        </div>

        {/* Sağ taraftaki içerik (2 sütun) */}
        <div className="md:col-span-2 flex items-center justify-center md:justify-end">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-white w-full max-w-xs"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              {" "}
              <div className="h-10 w-10 rounded-full bg-indigo-500/30 flex items-center justify-center mr-3">
                <FiMail className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">{t("directContact")}</h3>
            </div>

            <ul className="space-y-3 text-sm text-blue-100/80">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                <span>{t("fastResponse")}</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                <span>{t("professionalService")}</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                <span>{t("customSolutions")}</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="text-sm font-medium text-white flex items-center hover:text-blue-200 transition-colors"
              >
                {t("contactInfo")}
                <FiArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactCTA;
