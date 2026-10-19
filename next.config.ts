
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-46816b9fcf1445efbe847da23ac5d27e.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
