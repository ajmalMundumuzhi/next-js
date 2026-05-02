import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { 
        hostname: "upload.wikimedia.org",
      }
    ]
  } // in this way we can permit image link in url otherswise it will get error
};

export default nextConfig;
