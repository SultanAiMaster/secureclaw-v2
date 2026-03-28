import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin-ext', 'latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'SecureClaw - AI Agent Deployment in 60 Seconds',
  description: 'Deploy secure AI agents powered by OpenClaw. Simple, fast, and secure. Start your AI journey today.',
  keywords: 'AI agent, OpenClaw, secure, pay once for 24 hours',
  applicationName: 'SecureClaw',
  authors: [{ name: 'SecureClaw Team' }],
  creator: 'SultanAiMaster',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://secureclaw.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://secureclaw.com',
    siteName: 'SecureClaw',
    title: 'SecureClaw - Deploy AI Agents in 60 Seconds',
    description: 'AI-powered agent deployment. Pay once. Deploy instantly.',
    images: [{
      url: 'https://secureclaw.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecureClaw - Deploy AI Agents in 60 Seconds',
    description: 'AI-powered agent deployment. Pay once. Deploy instantly.',
    images: ['https://secureclaw.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}