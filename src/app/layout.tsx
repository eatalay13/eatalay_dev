import {
  siteMetadata,
  siteViewport
} from "@/data/siteMetadata";

import { inter } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata = siteMetadata;

export const viewport = siteViewport

interface HomeProps extends Readonly<{
  children: React.ReactNode;
}> { };

function RootLayout({ children }: HomeProps) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;