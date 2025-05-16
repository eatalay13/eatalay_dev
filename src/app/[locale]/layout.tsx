import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/utils/fonts";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Emrah Atalay",
  description: "Kendimi tanıtmak için oluşturduğum kişisel web sitem.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
