"use client";

import { useTranslations } from "next-intl";
import {
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
}

function ContactOption({ icon, title, value, href }: ContactOptionProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start space-x-4 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{value}</p>
      </div>
    </a>
  );
}

export default function ContactOptions() {
  const t = useTranslations("Contact.contactInfo");

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: t("email"),
      value: "info@eatalay.com",
      href: "mailto:info@eatalay.com",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: t("location"),
      value: "Bitlis, Türkiye",
      href: "https://maps.google.com/?q=Bitlis+Eren+University,Bitlis,Turkey",
    },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/emrahatalay",
      href: "https://linkedin.com/in/emrahatalay",
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      title: "GitHub",
      value: "github.com/eatalay13",
      href: "https://github.com/eatalay13",
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      title: "Instagram",
      value: "@emrhatalay",
      href: "https://instagram.com/emrhatalay",
    },
    {
      icon: <FiYoutube className="w-5 h-5" />,
      title: "YouTube",
      value: "youtube.com/@atalayemrah",
      href: "https://youtube.com/@atalayemrah",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          {t("directContact")}
        </h2>
        <div className="space-y-3">
          {contactMethods.map((method, index) => (
            <ContactOption key={index} {...method} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          {t("socialMedia")}
        </h2>
        <div className="space-y-3">
          {socialLinks.map((link, index) => (
            <ContactOption key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
