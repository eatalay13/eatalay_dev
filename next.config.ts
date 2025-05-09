import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        hostname: "play-lh.googleusercontent.com",
        pathname: "/**",
      },
      {
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/iletisim",
        destination: "/contact",
      },
      {
        source: "/hakkimda",
        destination: "/about",
      },
      {
        source: "/proje",
        destination: "/projects",
      },
      {
        source: "/proje/:slug*",
        destination: "/projects/:slug*",
      },
      {
        source: "/blog/:slug*",
        destination: "/blog/:slug*",
      },
    ];
  },
};

export default nextConfig;
