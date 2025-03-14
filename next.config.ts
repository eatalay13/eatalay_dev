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
    ],
  },
};

export default nextConfig;
