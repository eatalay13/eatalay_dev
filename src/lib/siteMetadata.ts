import { Metadata, Viewport } from "next";

const siteMetadata: Metadata = {
  metadataBase: new URL("https://eatalay.dev"),
  title: {
    default: "Emrah Atalay Kişisel Web Sitesi | Full Stack Developer",
    template: "%s | Emrah Atalay",
  },
  description:
    "Full Stack Developer olarak, modern web teknolojilerini kullanarak kullanıcı dostu, ölçeklenebilir ve performans odaklı yenilikçi çözümler geliştiriyorum. Frontend ve backend alanlarında edindiğim deneyimle projelerin tüm aşamalarında etkin bir şekilde katkı sağlıyorum.",
  keywords: [
    "Emrah Atalay",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    ".Net",
    "C#",
    "Java",
    "Spring",
    "Python",
    "Asp.Net",
    "Asp.Net Core",
    "Unity",
    "Oyun Geliştirme",
    "Oyun Programlama",
    "Oyun Motoru",
    "Oyun Geliştirici",
    "Oyun Tasarımı",
    "Oyun Tasarımcısı",
    "Oyun Geliştiricisi",
    "Web Geliştirme",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Emrah Atalay", url: "https://eatalay.dev" }],
  creator: "Emrah Atalay",
  publisher: "Emrah Atalay",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://eatalay.dev",
    title: "Emrah Atalay Kişisel Web Sitesi | Full Stack Developer",
    description:
      "Full Stack Developer olarak, modern web teknolojilerini kullanarak kullanıcı dostu, ölçeklenebilir ve performans odaklı yenilikçi çözümler geliştiriyorum. Frontend ve backend alanlarında edindiğim deneyimle projelerin tüm aşamalarında etkin bir şekilde katkı sağlıyorum.",
    siteName: "Emrah Atalay",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Emrah Atalay Kişisel Web Sitesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emrah Atalay Kişisel Web Sitesi | Full Stack Developer",
    description:
      "Full Stack Developer olarak, modern web teknolojilerini kullanarak kullanıcı dostu, ölçeklenebilir ve performans odaklı yenilikçi çözümler geliştiriyorum. Frontend ve backend alanlarında edindiğim deneyimle projelerin tüm aşamalarında etkin bir şekilde katkı sağlıyorum.",
    creator: "@emrhatalay",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const siteViewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
  height: "device-height",
  colorScheme: "dark light",
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export { siteMetadata, siteViewport };
