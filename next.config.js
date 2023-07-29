/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    stripe_secret: process.env.STRIPE_SECRET
  },
  // Headers
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },

}


module.exports = nextConfig







