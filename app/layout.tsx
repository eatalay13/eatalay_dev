import { Inter } from '@next/font/google'

import "@sty/normalize.scss";
import "@sty/globals.scss";

import Header from "@comp/header";
import Footer from "@comp/footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      <head />
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
