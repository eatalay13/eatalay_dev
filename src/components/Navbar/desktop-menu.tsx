import { useTranslations } from "next-intl";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import LocaleSwitcher from "./locale-switcher";
import NavLink from "./nav-link";
import SocialLink from "./social-link";

function DesktopMenu() {
  const t = useTranslations("Navigation");
  return (
    <nav className="hidden md:flex items-center">
      <div className="flex space-x-2 mr-8">
        <NavLink href="/">{t("home")}</NavLink>
        <NavLink href="/#about">{t("about")}</NavLink>
        <NavLink href="/projects">{t("projects")}</NavLink>
        <NavLink href="/contact">{t("contact")}</NavLink>
      </div>
      <div className="flex items-center space-x-4 border-l border-slate-200/50 dark:border-slate-700/50 pl-8">
        <SocialLink
          href="https://github.com/emrahatalay"
          icon={<FiGithub className="w-5 h-5" />}
          label={t("gitHub")}
        />
        <SocialLink
          href="https://www.linkedin.com/in/emrahatalay"
          icon={<FiLinkedin className="w-5 h-5" />}
          label={t("linkedIn")}
        />
        <SocialLink
          href="https://youtube.com/@emrahatalay"
          icon={<FiYoutube className="w-5 h-5" />}
          label={t("youtube")}
        />
        <LocaleSwitcher />
      </div>
    </nav>
  );
}

export default DesktopMenu;
