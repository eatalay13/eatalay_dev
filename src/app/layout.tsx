import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import BlobEffect from '@/components/BlobEffect'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
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
  }
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang={siteMetadata.language}>
      <head>
        <meta name="p:domain_verify" content="41a41b27ccfc852bd17685f940c46315" />
      </head>
      <body className={inter.className}>
        <div className="-z-10 w-full min-h-screen flex justify-center bg-white dark:bg-dark-900 text-dark-200 dark:text-light-900 transition duration-300">
          <div className="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between">
            <div className="z-10 w-full flex justify-end items-center mb-6 md:mb-12">
              <Navigation />
              <button className="mt-2 ml-4 text-lg md:text-2xl" aria-label="Toggle Dark mode">
              </button>
            </div>
            {children}
            <Footer />
            <div
              className="z-0 fixed top-0 transform left-1/2 -translate-x-1/2 max-w-screen-lg w-full h-full"
            >
              <BlobEffect className="top-1/6 left-1/20 bg-yellow-200 dark:bg-yellow-500 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]"></BlobEffect>
              <BlobEffect className="top-1/2 left-1/3 bg-purple-200 dark:bg-purple-700 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-delay-1000"
              ></BlobEffect>
              <BlobEffect className="bottom-1/5 right-1/20 bg-blue-300 dark:bg-blue-700 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-delay-3000"
              ></BlobEffect>
            </div>
          </div>
        </div >
      </body >
    </html >
  )
}
