import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    // unoptimized: true,
  },
  /* config options here */
  // disable image optimization
  // images: {
  //   unoptimized: true,
  // },
  // removeCaching: true,
  // // disable prefetching
  // prefetch: false,
  // // disable prerendering
  // prerender: false,
  // // disable server-side rendering
  // server: false,
  // // disable client-side rendering
  // client: false,
};

export default nextConfig;
