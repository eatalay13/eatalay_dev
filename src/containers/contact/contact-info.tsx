"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function ContactInfo() {
  const t = useTranslations("Contact.contactInfo");

  const contactItems = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: t("email"),
      value: "info@emrahatalay.com",
      href: "mailto:info@emrahatalay.com",
      delay: 0.1,
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: t("location"),
      value: t("locationValue"),
      href: "https://maps.google.com/?q=Bitlis,Turkey",
      delay: 0.3,
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/eatalay13",
      color: "hover:bg-gray-700 hover:text-white",
      delay: 0.1,
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/emrahatalay",
      color: "hover:bg-blue-600 hover:text-white",
      delay: 0.2,
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/emrahatalay",
      color:
        "hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white",
      delay: 0.4,
    },
  ];
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm border border-slate-100 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl"></div>

      {/* Süsleyici desenler */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="text-indigo-500 dark:text-indigo-400"
        >
          <path
            fill="currentColor"
            d="M44.9,-76.2C59.9,-69.2,74.7,-59.6,83.8,-45.8C92.8,-32,96.2,-14,95.4,3.4C94.7,20.9,89.9,37.8,80.2,51.5C70.5,65.2,56,75.7,40.6,79.3C25.3,82.9,9,79.6,-6.6,76.1C-22.2,72.6,-37,68.8,-48.5,60.7C-60,52.7,-68,40.3,-76,26.2C-84,12.1,-91.8,-3.7,-90,-18.4C-88.3,-33,-77,-46.6,-63.4,-54.8C-49.9,-63,-34.1,-65.8,-19.8,-73C-5.6,-80.2,8.1,-91.8,23.1,-89.7C38,-87.7,54.2,-72,64.5,-56.4C74.8,-40.8,29.9,-83.2,44.9,-76.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute -bottom-2 -left-2 w-12 h-12 opacity-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500 dark:text-blue-400"
        >
          <path
            fill="currentColor"
            d="M39.9,-67.1C54,-61.7,69.3,-54.5,79.7,-42.4C90.1,-30.4,95.5,-13.4,93.2,2.3C91,18.1,81.1,32.6,70.7,46.5C60.3,60.3,49.3,73.6,35.9,78.5C22.4,83.4,6.4,80,-9.3,77.5C-25,75,-40.3,73.5,-52.6,65.8C-64.8,58,-74,44.1,-79.4,29C-84.7,13.9,-86.2,-2.4,-82.8,-17.4C-79.5,-32.5,-71.3,-46.3,-59.7,-52.9C-48.2,-59.5,-33.3,-59,-19.7,-65.1C-6.2,-71.3,6.8,-84,19.8,-82.9C32.9,-81.8,45.9,-67,59.9,-53.1C73.9,-39.1,25.8,-72.6,39.9,-67.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {t("title")}
          </h3>
          <p className="text-slate-600 dark:text-slate-300">{t("subtitle")}</p>
        </motion.div>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="flex items-start rounded-lg p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-4"
        >
          <div className="flex items-center mb-4">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-200 dark:to-slate-700"></div>
            <h4 className="text-md font-medium text-slate-700 dark:text-slate-300 px-3">
              {t("socialMedia")}
            </h4>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all ${link.color} shadow-sm hover:shadow-md transform duration-300 border border-slate-200 dark:border-slate-600`}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: link.delay,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="w-full h-1 mt-6 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
