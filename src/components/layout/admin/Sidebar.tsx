"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAppStore } from "react-icons/fa";
import {
  LuLayoutDashboard,
  LuMails,
  LuNotebookText,
  LuTags,
  LuUsers,
} from "react-icons/lu";
import { TbFilters } from "react-icons/tb";

type MenuItem = {
  name: string;
  href: string;
  icon: (props: { className: string }) => React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: (props) => <LuLayoutDashboard {...props} size={18} />,
  },
  {
    name: "Bloglar",
    href: "/admin/blogs",
    icon: (props) => <LuNotebookText {...props} size={18} />,
  },
  {
    name: "Projeler",
    href: "/admin/projects",
    icon: (props) => <FaAppStore {...props} size={18} />,
  },
  {
    name: "Kategoriler",
    href: "/admin/categories",
    icon: (props) => <TbFilters {...props} size={18} />,
  },
  {
    name: "Etiketler",
    href: "/admin/tags",
    icon: (props) => <LuTags {...props} size={18} />,
  },
  {
    name: "İletişim Mesajları",
    href: "/admin/contacts",
    icon: (props) => <LuMails {...props} size={18} />,
  },
  {
    name: "Kullanıcılar",
    href: "/admin/users",
    icon: (props) => <LuUsers {...props} size={18} />,
  },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleClick() {
    setIsMobileMenuOpen(false);
  }

  // Mobil menüyü kapatmak için ekran boyutu değiştiğinde kontrol et
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobil menü butonu */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Menüyü Aç</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobil menü overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 bg-zinc-900 text-white`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-5 px-2 space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname === `${item.href}/`;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white dark:from-indigo-700 dark:to-purple-700 "
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-300"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
