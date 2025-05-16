import Footer from "@/components/Footer/index";
import Navbar from "@/components/Navbar/index";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { env } from "@/utils/env";
import { geistMono, geistSans } from "@/utils/fonts";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");

  const imageData = {
    images: [{ url: env.SITE_URL + "/images/sozler-kosku-hero.jpg" }],
  };
  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: t("title"),
      template: `%s • ${t("title")}`,
    },
    description: t("description"),
    openGraph: {
      ...imageData,
    },
    twitter: {
      card: "summary_large_image",
      ...imageData,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

type RootLayoutProps = {
  children: React.ReactNode;
};

async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) notFound();

  // Get messages for client-side translations
  let messages;
  try {
    messages = (await import(`../../../content/messages/${locale}.json`))
      .default;
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    notFound();
  }

  return (
    <html lang={locale} dir="ltr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
