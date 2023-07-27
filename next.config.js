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

}

module.exports = nextConfig




