/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/messages/next-image-unconfigured-host
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
