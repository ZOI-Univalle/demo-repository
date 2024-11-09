import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  env: {
    NODE_ENV: 'production'
  }
};

export default nextConfig;
