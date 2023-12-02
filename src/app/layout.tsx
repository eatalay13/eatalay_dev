import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import siteMetadata from '@/data/siteMetadata'
import '@/styles/globals.css'

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
    <html lang={siteMetadata.language}>
      <head>
        <meta name="p:domain_verify" content="41a41b27ccfc852bd17685f940c46315" />
      </head>
      <body className={inter.className}>
        {children}
      </body >
    </html >
  )
}
