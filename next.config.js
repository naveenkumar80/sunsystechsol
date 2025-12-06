/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // warning fix for cross-origin requests in dev mode
  allowedDevOrigins: ["http://192.168.80.1:3000"],

  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
