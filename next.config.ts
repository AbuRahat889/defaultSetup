import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["*"],
    domains: ["nyc3.digitaloceanspaces.com"], // Add the specific domain
  },
};

export default nextConfig;
