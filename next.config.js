/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.steffencentrodeeventos.com.br',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

}

module.exports = nextConfig
