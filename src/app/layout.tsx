import { Inter } from 'next/font/google';

import "@sty/globals.css";

import Footer from "@comp/footer";
import Header from "@comp/header";
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface Props extends PropsWithChildren {
  children: React.ReactNode;
}

function RootLayout(props: Props): JSX.Element {
  return (
    <html lang="tr" className={inter.className}>
      <head />
      <body className='flex flex-col h-screen justify-between'>
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;