/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      },
      {
        hostname: 'storyset.com'
      },
      {
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  devIndicators: false
};

export default nextConfig;
