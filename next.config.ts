import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servizi",
        destination: "/come-lavoriamo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
