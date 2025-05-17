import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  // i18n önekini kaldırmak için yoldan locale kısmını çıkarıyoruz
  const normalizedPath = pathname.split("/").slice(2).join("/");
  const normalizedHref = href === "/" ? "/" : href.replace(/^\//, "");

  // Anasayfa için özel durum kontrolü
  const isHome =
    href === "/" && (pathname === "/" || pathname.split("/").length === 2);

  const isActive =
    isHome ||
    pathname === href ||
    (normalizedHref !== "/" &&
      (normalizedPath === normalizedHref ||
        normalizedPath.startsWith(normalizedHref + "/")));

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium group overflow-hidden transition-all duration-300",
        isActive
          ? "text-blue-900 dark:text-white"
          : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-500 group-hover:opacity-100 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      ></span>
    </Link>
  );
}

export default NavLink;
