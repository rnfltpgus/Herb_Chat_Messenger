/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.stickpng.com'],
  },
  experimental: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
