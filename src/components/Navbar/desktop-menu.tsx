import { GitBranchPlus, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import NavLink from "./nav-link";
import SocialLink from "./social-link";

function DesktopMenu() {
  const t = useTranslations("Navigation");
  return (
    <nav className="hidden md:flex items-center">
      <div className="flex space-x-1 mr-6">
        <NavLink href="/">{t("home")}</NavLink>
        <NavLink href="/#about">{t("about")}</NavLink>
        <NavLink href="/projects">{t("projects")}</NavLink>
        <NavLink href="/contact">{t("contact")}</NavLink>
      </div>

      <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-6">
        <SocialLink
          href="https://github.com/eatalay13"
          icon={<GitBranchPlus className="w-5 h-5" />}
          label={t("gitHub")}
        />
        <SocialLink
          href="https://www.linkedin.com/in/emrahatalay"
          icon={<Linkedin className="w-5 h-5" />}
          label={t("linkedIn")}
        />
        <LocaleSwitcher />
      </div>
    </nav>
  );
}

export default DesktopMenu;
