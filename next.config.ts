import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  images: {
    remotePatterns: [new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL + "/**" || "")],
    // unoptimized: true,
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
