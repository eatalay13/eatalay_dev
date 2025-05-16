import HomeIndexContainer from "@/containers/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emrah Atalay | Full Stack Developer",
  description:
    "Emrah Atalay, modern web teknolojileri ile yenilikçi çözümler geliştiren Full Stack Developer",
  keywords:
    "Emrah Atalay, Full Stack Developer, Web Geliştirme, React, Next.js, .NET Core",
  authors: [{ name: "Emrah Atalay", url: "https://emrahatalay.dev" }],
  openGraph: {
    title: "Emrah Atalay | Full Stack Developer",
    description:
      "Modern web teknolojileri ile yenilikçi çözümler geliştiren Full Stack Developer",
    url: "https://emrahatalay.dev",
    siteName: "Emrah Atalay",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/30194127",
        width: 800,
        height: 600,
        alt: "Emrah Atalay",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emrah Atalay | Full Stack Developer",
    description:
      "Modern web teknolojileri ile yenilikçi çözümler geliştiren Full Stack Developer",
    images: ["https://avatars.githubusercontent.com/u/30194127"],
  },
};

export default function Home() {
  return <HomeIndexContainer />;
}
