import Footer from "@/components/footer";
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
    <html lang="tr" suppressHydrationWarning>
      <body className={cn(firaCode.className)}>
        <Header />
        <main>
          <div className="flex items-center justify-center h-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;