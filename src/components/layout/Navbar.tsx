"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbBrandGithub, TbBrandLinkedin, TbCode } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrollY > 10
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm"
          : "py-5"
      }`}
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-teal-500 text-white mr-3 transition-transform duration-300 group-hover:rotate-12">
              <TbCode className="w-5 h-5" />
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
                icon={<TbBrandGithub className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/emrahatalay"
                icon={<TbBrandLinkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
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
            </MobileNavLink>

            <div className="flex items-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-800 mt-2">
              <SocialLink
                href="https://github.com/eatalay13"
                icon={<TbBrandGithub className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/emrahatalay"
                icon={<TbBrandLinkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
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
