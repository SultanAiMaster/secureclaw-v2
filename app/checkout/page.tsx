'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function CheckoutPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !name) {
      alert('Please enter your email and name')
      return
    }

    setLoading(true)

    // TODO: Create order via backend API
    // For now, redirect to success page
    setTimeout(() => {
      window.location.href = '/success'
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>Checkout - SecureClaw</title>
      </Head>

      <div className="min-h-screen bg-background py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Pricing
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 555 0101"
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 mt-6"
              >
                {loading ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}