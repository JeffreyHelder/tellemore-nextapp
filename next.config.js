/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
