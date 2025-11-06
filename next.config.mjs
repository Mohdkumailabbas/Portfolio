// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // for static export
   images: {
    unoptimized: true, // disables Next.js image optimization
  },
};

export default nextConfig;
