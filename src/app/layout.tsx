import siteMetadata from "@/lib/siteMetadata";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = siteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
