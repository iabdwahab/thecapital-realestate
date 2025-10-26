import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL + "/**" || "")],
  },
};

export default nextConfig;
