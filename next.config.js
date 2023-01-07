/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true,
    optimizeImages: true,
    optimizeFonts: true,
    modern: true,
    polyfillsOptimization: true,
    reactMode: 'concurrent',
    reactStrictMode: true,
    scrollRestoration: true,
    workerThreads: true, 
  }
}

module.exports = nextConfig
