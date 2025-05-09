import siteMetadata from "@/lib/siteMetadata";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

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
