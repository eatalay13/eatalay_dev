import pkg from "next-pwa";

const withPWA = pkg({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: false,
  output: "standalone",
});

export default nextConfig;
