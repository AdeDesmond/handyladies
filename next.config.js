/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ullgduhhqetrldukekth.supabase.co",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
