import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/books",
        permanent: true,
      },
    ];
  },
  images: {
    // Note:
    // For the purposes of this assignment, all HTTPS image domains are allowed.
    // In a real production environment, image sources should be restricted
    // to trusted domains or served from a controlled backend.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
