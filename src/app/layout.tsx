import Footer from "@/components/Footer";
import { geistMono, geistSans } from "@/lib/fonts";
import siteMetadata from "@/lib/siteMetadata";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = siteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
