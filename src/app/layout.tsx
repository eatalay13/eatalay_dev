import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { ThemeProvider } from '@/components/theme/themeProvider';
import MainFont from "@/constants/fontStyle";
import siteMetadata from '@/data/siteMetadata';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  robots: 'noindex, nofollow',
  keywords: 'Emrah Atalay, Emrah, Atalay, Software Developer, Bitlis, Turkey',
  creator: 'Emrah Atalay',
  publisher: 'Emrah Atalay',
  verification: {
    google: 'JG6V9Zq7EYJZ9k4m5rW6a6Lg1sZ5YQ',
    yandex: '3a5a6c2a0b1e0a7a',
  }
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (

    <html lang={siteMetadata.language} suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="41a41b27ccfc852bd17685f940c46315" />
      </head>
      <body className={`${MainFont.className} bodyTheme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <div className="relative flex flex-col h-screen">
            <NavBar />
            <main className="py-6 pb-5 md:pb-10 mt-20 md:mt-24 xs:mx-6 sm:mx-12 md:mx-16 flex-grow">
              {children}
            </main>
            <ThemeSwitcher />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
