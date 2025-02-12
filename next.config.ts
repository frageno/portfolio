import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  assetPrefix: '/', // Add leading slash for font loading
  basePath: '', 
};

export default nextConfig;
