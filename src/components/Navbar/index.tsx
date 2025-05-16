"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbCode } from "react-icons/tb";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

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
        className={`fixed left-1/2 -translate-x-1/2 z-50 max-w-6xl transition-all duration-500 container rounded-lg ${
          scrollY > 10
            ? "py-4 top-8 bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-lg"
            : "py-5 top-0"
        }`}
      >
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-700 text-white mr-3 transition-transform duration-300 group-hover:rotate-12">
                <TbCode className="w-5 h-5" />
              </div>
              <span className="text-xl font-medium text-slate-900 dark:text-white transition-colors">
                Emrah <span className="font-bold text-blue-700">Atalay</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <DesktopMenu />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 text-slate-700 dark:text-slate-300 focus:outline-none"
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
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent px-1 overflow-hidden rounded-lg">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-300 ease-out rounded-lg shadow-lg"
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
export default Navbar;
