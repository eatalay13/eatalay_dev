import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export default NavLink;
