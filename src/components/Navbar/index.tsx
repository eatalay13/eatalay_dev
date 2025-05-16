"use client";

import { Code, GitBranchPlus, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocaleSwitcher from "./locale-switcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Hesapla scroll yüzdesini
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 container rounded-lg ${
          scrollY > 10
            ? "py-4 top-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
            : "py-5 top-0"
        }`}
      >
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-500 text-white mr-3 transition-transform duration-300 group-hover:rotate-12">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xl font-medium text-gray-900 dark:text-white transition-colors">
                Emrah <span className="font-bold text-teal-500">Atalay</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-1 mr-6">
                <NavLink href="/">Ana Sayfa</NavLink>
                <NavLink href="/#about">Hakkımda</NavLink>
                <NavLink href="/projects">Projeler</NavLink>
                <NavLink href="/contact">İletişim</NavLink>
              </div>

              <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-6">
                <SocialLink
                  href="https://github.com/eatalay13"
                  icon={<GitBranchPlus className="w-5 h-5" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/emrahatalay"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                />
                <LocaleSwitcher />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                Ana Sayfa
              </MobileNavLink>
              <MobileNavLink href="/#about" onClick={toggleMenu}>
                Hakkımda
              </MobileNavLink>
              <MobileNavLink href="/projects" onClick={toggleMenu}>
                Projeler
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMenu}>
                İletişim
              </MobileNavLink>{" "}
              <div className="flex items-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-800 mt-2">
                <SocialLink
                  href="https://github.com/eatalay13"
                  icon={<GitBranchPlus className="w-5 h-5" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/emrahatalay"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                />
                <div className="pl-3 ml-auto">
                  <LocaleSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent px-0.5 overflow-hidden rounded-lg">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-300 ease-out rounded-lg"
            style={{
              width: `${scrollProgress}%`,
              opacity: scrollY > 10 ? 1 : 0,
            }}
          />
        </div>
      </header>
    </>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
  >
    {children}
  </Link>
);

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

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Navbar;
