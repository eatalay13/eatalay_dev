import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fira_Code, JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emrah Atalay Developer",
  description: "Emrah Atalay Kişisel Developer Portfolyo Sitesi",
  keywords: [
    "Emrah Atalay",
    "Developer",
    "Portfolyo",
    "Yazılımcı",
    "Programcı",
    "Developer",
    "Portfolyo",
    "Yazılımcı",
    "Programcı",
  ],
  authors: [{ name: "Emrah Atalay", url: "https://eatalay.dev" }],
  creator: "Emrah Atalay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${jetbrainsMono.variable} ${firaCode.variable} bg-[#1E1E1E] text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
