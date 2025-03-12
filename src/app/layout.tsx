import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/lib/Providers";
import { geistMono, geistSans, inter } from "@/lib/fonts";
import siteMetadata from "@/lib/siteMetadata";
import type { Metadata } from "next";
import "../styles/globals.css";
export const metadata: Metadata = siteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
