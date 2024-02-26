import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { ThemeProvider } from '@/components/theme/themeProvider';
import siteMetadata from '@/data/siteMetadata';
import '@/styles/style.css';
import type { Metadata, Viewport } from 'next';
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
export const viewPort: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 5.0,
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="41a41b27ccfc852bd17685f940c46315" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <main>
            <Sidebar />
            <div className="main-content">
              <Navbar />
              {children}
            </div>
          </main>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
