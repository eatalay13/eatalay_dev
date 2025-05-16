import { Corinthia, JetBrains_Mono } from "next/font/google";

const corinthia = Corinthia({
  variable: "--font-corinthia",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export { corinthia, jetBrainsMono };
