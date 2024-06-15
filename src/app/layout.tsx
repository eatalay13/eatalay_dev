import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  siteMetadata,
  siteViewport
} from "@/data/siteMetadata";

import { firaCode } from "@/lib/fonts";
import "@/styles/globals.css";
import cn from "classnames";
import { ThemeProvider } from "next-themes";

export const metadata = siteMetadata;

export const viewport = siteViewport

interface HomeProps extends Readonly<{
  children: React.ReactNode;
}> { };

function RootLayout({ children }: HomeProps) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={cn(firaCode.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;