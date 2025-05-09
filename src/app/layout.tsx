import siteMetadata from "@/lib/siteMetadata";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = siteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
        <div>
          <Toaster position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
