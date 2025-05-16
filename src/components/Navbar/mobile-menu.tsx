import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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
      className={`md:hidden absolute w-full backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-72 border-b shadow-lg" : "max-h-0 overflow-hidden"
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
          <div className="flex items-center space-x-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50 mt-2">
            <SocialLink
              href="https://github.com/eatalay13"
              icon={<FiGithub className="w-5 h-5" />}
              label={t("gitHub")}
            />
            <SocialLink
              href="https://www.linkedin.com/in/emrahatalay"
              icon={<FiLinkedin className="w-5 h-5" />}
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
    className="px-2 py-3 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

export default MobileMenu;
