import { geistMono, geistSans, inter } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/siteMetadata";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.className} ${geistMono.className} ${inter.className} antialiased`}
      >
        {children}
        <div>
          <Toaster position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
