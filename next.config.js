/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com',
      'lh3.googleusercontent.com',
      'https://www.screentechnicals.com/api/ecommerce/products',
      'https://console.firebase.google.com)'


    ],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    stripe_secret: process.env.STRIPE_SECRET
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/app/api/products.js",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://vercel.com/ahmed-zaid638/amazon-nextjs" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }

}


module.exports = nextConfig







