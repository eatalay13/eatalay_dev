"use client";

import { useTranslations } from "next-intl";
import {
  FiExternalLink,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiYoutube,
} from "react-icons/fi";

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  type: "contact" | "social";
}

function ContactOption({ icon, title, value, href, type }: ContactOptionProps) {
  const baseClasses =
    "group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105";
  const typeClasses =
    type === "contact"
      ? "bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400"
      : "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 hover:from-purple-100 hover:to-indigo-100 dark:hover:from-purple-800/30 dark:hover:to-indigo-800/30";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${typeClasses}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-start space-x-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            type === "contact"
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
              : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white"
          }`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {value}
          </p>
        </div>
        <FiExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" />
      </div>
    </a>
  );
}

export default function ContactOptions() {
  const t = useTranslations("Contact.contactInfo");

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: t("email"),
      value: "info@eatalay.dev",
      href: "mailto:info@eatalay.dev",
      type: "contact" as const,
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: t("location"),
      value: "Bitlis, Türkiye",
      href: "https://maps.google.com/?q=Bitlis+Eren+University,Bitlis,Turkey",
      type: "contact" as const,
    },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/emrahatalay",
      href: "https://linkedin.com/in/emrahatalay",
      type: "social" as const,
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/eatalaydev",
      href: "https://github.com/eatalaydev",
      type: "social" as const,
    },
    {
      icon: <FiInstagram className="w-6 h-6" />,
      title: "Instagram",
      value: "@emrhatalay",
      href: "https://instagram.com/emrhatalay",
      type: "social" as const,
    },
    {
      icon: <FiYoutube className="w-6 h-6" />,
      title: "YouTube",
      value: "youtube.com/@emrahatalay",
      href: "https://youtube.com/@emrahatalay",
      type: "social" as const,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Direct Contact Section */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <FiMail className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t("directContact")}
          </h2>
        </div>
        <div className="grid gap-4">
          {contactMethods.map((method, index) => (
            <ContactOption key={index} {...method} />
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <FiInstagram className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t("socialMedia")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link, index) => (
            <ContactOption key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
