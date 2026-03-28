'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-8">
              ⚡ Deploy AI Agents in 60 Seconds
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Deploy Secure AI Agents<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                in 60 Seconds
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              OpenClaw + NemoClaw security layer protects your AI agents. Pay once. Deploy instantly. Zero server setup needed. 100% privacy guaranteed.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Start Now - $49/month
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                See How It Works →
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 500+ Agents Deployed
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 100% Privacy Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Global Payments via Razorpay
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 99.9% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SecureClaw?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, secure, and private AI agent deployment - without the complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Deploy in 60 Seconds',
                desc: 'Choose your AI model, paste your API key, and your agent is live. No server setup, no DevOps needed.',
                stats: '60s average deployment time'
              },
              {
                icon: '🛡️',
                title: 'NemoClaw Security Layer',
                desc: 'NVIDIA NemoClaw governance layer runs between your agent and the internet. Full data isolation and control.',
                stats: '100% data privacy'
              },
              {
                icon: '🔒',
                title: 'Zero Data Leaks',
                desc: 'Privacy router controls data flow. Local models available for 100% on-premise inference.',
                stats: '0 data breaches'
              },
              {
                icon: '📊',
                title: 'Live Monitoring Dashboard',
                desc: 'Real-time analytics, logs, and metrics. Monitor agent performance and usage from one clean interface.',
                stats: '24/7 monitoring'
              },
              {
                icon: '🌍',
                title: 'Global Payments Accepted',
                desc: 'Pay in USD via Razorpay - accepts cards, netbanking, and UPI. Payment processing in 190+ countries.',
                stats: '190+ countries supported'
              },
              {
                icon: '🔄',
                title: 'Auto-Scaling Infrastructure',
                desc: 'Your agent automatically scales with your traffic. No manual intervention required. Pay only for what you use.',
                stats: 'Unlimited scaling'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.desc}
                </p>
                <div className="text-sm font-semibold text-blue-600">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg opacity-90 mb-8">
            No hidden fees. Cancel anytime.
          </p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$49/month</span>
            <p className="text-sm opacity-75">Starter plan - unlimited agents</p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            View All Plans →
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted by Parents & AI Enthusiasts Worldwide
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            {[
              'AI Researchers', 'Content Creators', 'Startup Founders',
              'Parenting Bloggers', 'SaaS Developers', 'Digital Marketers',
              'Small Business Owners', 'Freelancers'
            ].map((user, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {user}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Deploy Your AI Agent?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 500+ users who've deployed their AI agents in 60 seconds with SecureClaw
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">SecureClaw</h3>
              <p className="text-sm text-gray-600">
                Deploy secure AI agents in 60 seconds powered by OpenClaw + NemoClaw.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-blue-600">Features</Link></li>
                <li><Link href="/deploy" className="hover:text-blue-600">Deploy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-blue-600">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                <li><Link href="/status" className="hover:text-blue-600">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 SecureClaw. All rights reserved. Built with OpenClaw + NemoClaw.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}