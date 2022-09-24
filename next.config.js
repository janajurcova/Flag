/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
    removeConsole: process.env.NODE_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(cfg) {
    cfg.module.rules.push({
      test: /\.svg$i/,
      use: ["@svgr/webpack"],
    });

    return cfg;
  },
};

module.exports = nextConfig;
