import { Metadata, Viewport } from "next";

const siteMetadata: Metadata = {
    keywords: ["Emrah Atalay", "eatalay.dev", "Emrah Atalay'ın kişisel web sitesi", "Emrah Atalay'ın blogu", "Emrah Atalay'ın portfolyosu", "Emrah Atalay'ın projeleri", "Emrah Atalay'ın hakkında", "Emrah Atalay'ın iletişim bilgileri"],
    authors: [{
        name: "Emrah Atalay",
        url: "eatalay.dev",
    }],
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        }
    },
    title: {
        template: "%s | Kişisel Web Sitesi",
        absolute: "Emrah Atalay Kişisel Web Sitesi",
        default: "Emrah Atalay Kişisel Web Sitesi",
    },
    description: "Emrah Atalay'ın kişisel web sitesi",
};

const siteViewport: Viewport = {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    userScalable: false,
    minimumScale: 1,
    themeColor: [
        { color: "#000000", media: "(prefers-color-scheme: dark)" },
        { color: "#ffffff", media: "(prefers-color-scheme: light)" }
    ],
    viewportFit: "cover",
    colorScheme: "dark light",
};

export {
    siteMetadata, siteViewport
};
