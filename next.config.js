/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/b/b1/VAN_CAT.png/640px-VAN_CAT.png',
      },
    ],
  }
}

module.exports = nextConfig
