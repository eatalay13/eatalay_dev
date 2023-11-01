import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import siteMetadata from '@/data/siteMetadata'
import '@styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  robots: 'noindex, nofollow',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'Emrah Atalay, Emrah, Atalay, Software Developer, Bitlis, Turkey',
  creator: 'Emrah Atalay',
  publisher: 'Emrah Atalay',
  themeColor: '#ffffff',
  openGraph: {
    type: 'website',
    title: 'Emrah Atalay',
    description: 'Emrah Atalay is a software developer based in Bitlis, Turkey.',
    url: 'https://emrahatalay.com',
    images: ["https://emrahatalay.com/user-photo.jpeg"],
    locale: 'tr_TR',
  },
  verification: {
    google: 'JG6V9Zq7EYJZ9k4m5rW6a6Lg1sZ5YQ',
    yandex: '3a5a6c2a0b1e0a7a',
  },
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}