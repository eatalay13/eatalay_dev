import { Inter } from '@next/font/google';

import "@sty/1_normalize.css";
import "@sty/globals.css";

import Footer from "@comp/footer";
import Header from "@comp/header";

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props): JSX.Element {
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

export default RootLayout;