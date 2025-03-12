import { Metadata } from "next";

const siteMetadata: Metadata = {
  title: {
    default: "Emrah Atalay",
    template: "%s | Emrah Atalay",
  },
  description: "Emrah Atalay is a software engineer",
  openGraph: {
    title: "Emrah Atalay",
    description: "Emrah Atalay is a software engineer",
    url: "https://eatalay.dev",
    siteName: "Emrah Atalay",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
};

export default siteMetadata;
