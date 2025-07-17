/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  },
  devIndicators: false
};

export default nextConfig;
