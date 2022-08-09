/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["md-maruf-admin.herokuapp.com"],
  },
};

module.exports = nextConfig;
