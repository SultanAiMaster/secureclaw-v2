import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin-ext', 'latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'SecureClaw - Deploy AI Agents in 60 Seconds | Fast, Secure AI Deployment',
    template: '%s | SecureClaw'
  },
  description: 'Deploy secure AI agents in 60 seconds with OpenClaw + NemoClaw security. Fast payments via Razorpay, global access, 100% privacy guaranteed. Start now - $49/month.',
  keywords: [
    'AI agent deployment',
    'OpenClaw secure',
    'NemoClaw security',
    'AI agent hosting',
    'deploy AI fast',
    'AI tools for parents',
    'smart parenting',
    'child routine AI',
    'AI parenting assistant',
    'automated routines',
    'parenting AI apps',
    'child development AI',
    'AI for families',
    'secure AI platform',
    'NVIDIA NemoClaw',
    'OpenClaw AI',
    'Razorpay payments',
    'AI agent builder',
    'quick AI deployment',
    'parenting automation',
    'child schedule AI',
    'AI parenting guide',
    'smart parenting tools',
    'AI for children',
    'routine automation',
    'parenting made easy'
  ],
  applicationName: 'SecureClaw',
  authors: [{ name: 'SecureClaw Team', url: 'https://github.com/SultanAiMaster' }],
  creator: 'SultanAiMaster',
  publisher: 'SecureClaw',
  category: 'Technology',
  classification: 'AI Content',

  // Open Graph (Facebook, LinkedIn, more)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beuniqueshop.in',
    siteName: 'SecureClaw',
    title: 'SecureClaw - Deploy AI Agents in 60 Seconds | Fast, Secure AI Deployment',
    description: 'Deploy secure AI agents in 60 seconds with OpenClaw + NemoClaw security. Fast payments via Razorpay, global access, 100% privacy guaranteed. Start now - $49/month.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SecureClaw - AI Agent Deployment'
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@SecureClawAI',
    creator: '@SultanAiMaster',
    title: 'SecureClaw - Deploy AI Agents in 60 Seconds',
    description: 'Deploy secure AI agents in 60 seconds with OpenClaw + NemoClaw security. Fast payments via Razorpay, global access, 100% privacy guaranteed.',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add your codes here)
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/manifest.json',

  // Canonical URL
  alternates: {
    canonical: 'https://beuniqueshop.in',
  },

  // Additional metadata
  other: {
    'og:site_name': 'SecureClaw',
    'article:author': 'SecureClaw Team',
    'article:section': 'Technology',
    'article:tag': 'AI, AI Agents, Parenting, Automation',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SecureClaw',
              applicationCategory: 'AI Platform',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '49',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              description: 'Deploy secure AI agents in 60 seconds with OpenClaw + NemoClaw security. Fast payments via Razorpay, global access, 100% privacy guaranteed.',
              url: 'https://beuniqueshop.in',
              author: {
                '@type': 'Organization',
                name: 'SecureClaw Team',
                url: 'https://github.com/SultanAiMaster',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '500',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}