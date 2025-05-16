import { GitBranchPlus, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import SocialLink from "./social-link";

type MobileMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

function MobileMenu({ isMenuOpen, toggleMenu }: MobileMenuProps) {
  const t = useTranslations("Navigation");
  return (
    <div
      className={`md:hidden absolute w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? "max-h-72 border-b border-gray-200 dark:border-gray-800"
          : "max-h-0 overflow-hidden"
      }`}
    >
      <div className="container px-4 py-4 mx-auto max-w-6xl">
        <nav className="flex flex-col space-y-3">
          <MobileNavLink href="/" onClick={toggleMenu}>
            {t("home")}
          </MobileNavLink>
          <MobileNavLink href="/#about" onClick={toggleMenu}>
            {t("about")}
          </MobileNavLink>
          <MobileNavLink href="/projects" onClick={toggleMenu}>
            {t("projects")}
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={toggleMenu}>
            {t("contact")}
          </MobileNavLink>
          <div className="flex items-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-800 mt-2">
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
            <div className="pl-3 ml-auto">
              <LocaleSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="px-2 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
  >
    {children}
  </Link>
);

export default MobileMenu;
