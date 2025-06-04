"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiGlobe } from "react-icons/fi";

// Sabit verileri bileşen dışına çıkartıyoruz, böylece her render'da yeniden oluşturulmayacak
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

  // currentLocale'i memoize ediyoruz, böylece her render'da yeniden hesaplanmayacak
  const currentLocale = useMemo(
    () => locales.find((l) => l.code === locale) || locales[0],
    [locale]
  );

  // Toggle fonksiyonunu memoize ediyoruz
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  // Dil değiştirme fonksiyonunu memoize ediyoruz, böylece her render'da yeniden oluşturulmayacak
  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      // next-intl navigation kullanarak otomatik locale yönetimi
      router.push(pathname, { locale: newLocale });
      setIsOpen(false);
    },
    [pathname, router]
  );

  // Dropdown sınıfları için memoize edilmiş dinamik değer
  const dropdownClasses = useMemo(
    () =>
      cn(
        "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white/50 dark:bg-slate-800/50",
        "backdrop-blur-xl shadow-xl focus:outline-none z-10 transition-all duration-200 ease-out transform",
        "border border-slate-200/20 dark:border-slate-700/20",
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      ),
    [isOpen]
  );

  // Client tarafında render edilip edilmediğini kontrol ediyoruz
  useEffect(() => {
    setMounted(true);
  }, []);

  // Dropdown dışına tıklandığında kapanması için olay dinleyicisi
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

  // Escape tuşu ile dropdown'ı kapatmak için olay dinleyicisi
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  // Client tarafında render edilene kadar görünüm
  if (!mounted) {
    return (
      <div>
        <button
          className={cn(
            "flex items-center space-x-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-2",
            "text-sm font-medium text-slate-700 dark:text-slate-300",
            "hover:bg-slate-100/60 dark:hover:bg-white/20 transition-colors shadow-sm"
          )}
          disabled
        >
          <Image
            src={currentLocale.flag}
            alt={currentLocale.name}
            width={20}
            height={20}
            style={{ height: "auto" }}
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
        className={cn(
          "flex items-center space-x-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-2",
          "text-sm font-medium text-slate-700 dark:text-slate-300",
          "hover:bg-slate-100/60 dark:hover:bg-slate-700/60 transition-colors shadow-sm"
        )}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Image
          src={currentLocale.flag}
          alt={currentLocale.name}
          width={20}
          height={20}
          style={{ height: "auto" }}
          className="rounded-full"
        />
        <span className="hidden sm:inline ml-2">{currentLocale.name}</span>
        <FiGlobe className="h-4 w-4 ml-1" />
      </button>
      <div className={dropdownClasses}>
        <div className="py-1">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLocaleChange(l.code)}
              className={cn(
                "flex items-center w-full px-4 py-2 text-sm transition-colors duration-150",
                l.code === locale
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-700/60"
              )}
            >
              <Image
                src={l.flag}
                alt={l.name}
                width={20}
                height={20}
                style={{ height: "auto" }}
                className="rounded-full mr-2"
              />
              {l.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
