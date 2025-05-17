"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbCode } from "react-icons/tb";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import ScrollProgressBar from "./scroll-progresbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed left-1/2 -translate-x-1/2 z-50 max-w-6xl transition-all duration-500 container rounded-lg py-4 top-0 md:top-5 bg-gray-100/50 dark:bg-slate-900/50 backdrop-blur-xl">
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
        <ScrollProgressBar />
      </header>
    </>
  );
};
export default Navbar;
