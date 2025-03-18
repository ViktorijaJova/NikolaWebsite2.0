import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home", // Change this to the actual homepage path
      permanent: true, // This makes it a 301 redirect
    },
  ],
};

export default nextConfig;
