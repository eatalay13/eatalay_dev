import Header from "@/components/header";
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
      <body className={cn(firaCode.className)}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;