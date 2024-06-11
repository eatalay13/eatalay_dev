import {
  siteMetadata,
  siteViewport
} from "@/data/siteMetadata";

import { firaCode } from "@/lib/fonts";
import "@/styles/globals.css";
import cn from "classnames";

export const metadata = siteMetadata;

export const viewport = siteViewport

interface HomeProps extends Readonly<{
  children: React.ReactNode;
}> { };

function RootLayout({ children }: HomeProps) {
  return (
    <html lang="tr">
      <body className={cn(firaCode.className, "bg-black text-white font-serif font-light text-[2rem] sm:text-base tracking-[-0.4px] leading-[150.5%] animate-fade animate-once animate-ease-in w-screen")}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;