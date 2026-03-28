const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['secureclaw.com', 'www.secureclaw.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secureclaw.com',
        pathname: '/api/**'
      }
    ]
  },
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || 'rzp_test_demo_key',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
  logging: {
    fetches: {
      fullUrl: true,
      timing: { budgets: [10000, 12000, 15000] },
      memory: [10000, 128000, 51200],
      maxSize: 10 * 1024 * 1024
    }
  }
}

export default nextConfig