"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiGlobe } from "react-icons/fi";

const locales = [
  { code: "en", name: "English", flag: "/flags/us.svg" },
  { code: "tr", name: "Türkçe", flag: "/flags/tr.svg" },
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function handleLocaleChange(newLocale: string) {
    // Pathnames in Next.js locale system are formatted as /{locale}/{path}
    // We need to determine the rest of the path after the locale
    const segments = pathname.split("/");

    // Remove the first empty segment and the locale segment
    segments.splice(0, 2);

    // Create a new pathname with the new locale
    const restOfPath = segments.join("/");
    const newPathname = `/${newLocale}${restOfPath ? `/${restOfPath}` : ""}`;

    router.push(newPathname);
    setIsOpen(false);
  }

  if (!mounted) {
    return (
      <div>
        <button
          className="flex items-center space-x-1 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20 transition-colors"
          disabled
        >
          <Image
            src={currentLocale.flag}
            alt={currentLocale.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="hidden sm:inline ml-2">{currentLocale.name}</span>
          <FiGlobe className="h-4 w-4 ml-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Image
          src={currentLocale.flag}
          alt={currentLocale.name}
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="hidden sm:inline ml-2">{currentLocale.name}</span>
        <FiGlobe className="h-4 w-4 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLocaleChange(l.code)}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  l.code === locale
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={l.flag}
                  alt={l.name}
                  width={20}
                  height={20}
                  className="rounded-full mr-2"
                />
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
