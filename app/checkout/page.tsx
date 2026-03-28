'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function CheckoutPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)
  const [error, setError] = useState('')

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/bundle/all.js'
      script.async = true
      script.onload = () => {
        setRazorpayLoaded(true)
        console.log('✅ Razorpay SDK loaded')
      }
      script.onerror = () => {
        setError('Failed to load payment gateway. Please refresh.')
      }
      document.body.appendChild(script)
    }

    loadRazorpay()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !name) {
      setError('Please enter your email and name')
      return
    }

    if (!razorpayLoaded) {
      setError('Payment gateway loading... please wait')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Get plan details from URL
      const urlParams = new URLSearchParams(window.location.search)
      const plan = urlParams.get('plan') || 'starter'
      const amount = urlParams.get('amount') || '49'
      const currency = urlParams.get('currency') || 'USD'

      console.log('Creating Razorpay order:', { email, name, plan })

      // Create order via backend API
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          phone: phone || undefined,
          planId: plan
        })
      })

      const orderData = await orderRes.json()

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.error || 'Failed to create payment order')
      }

      console.log('✅ Order created:', orderData)

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_demo_key',
        amount: parseInt(amount) * 100, // Convert to cents/paise
        currency: currency,
        name: 'SecureClaw Subscription',
        order_id: orderData.orderId,
        description: `SecureClaw ${plan.toUpperCase()} Plan`,
        prefill: {
          name: name,
          email: email,
          contact: phone
        },
        theme: { color: '#2196F3' },
        handler: async function (response: any) {
          console.log('✅ Payment successful:', response)

          // Verify payment on backend
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              formData: { email, name, phone }
            })
          })

          const verifyData = await verifyRes.json()

          if (verifyData.success) {
            // Redirect to success page
            window.location.href = '/success'
          } else {
            setError('Payment verification failed. Please contact support.')
            setLoading(false)
          }
        },
        modal: {
          ondismiss: function() {
            setLoading(false)
            console.log('Payment dismissed by user')
          }
        }
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (err: any) {
      console.error('Payment error:', err)
      setError(err.message || 'Payment failed. Please try again.')
      setLoading(false)
    }
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
              <p className="text-gray-600 mt-2">
                Secure payment powered by Razorpay
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 555 0101"
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !razorpayLoaded}
                className="w-full py-4 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : !razorpayLoaded ? 'Loading payment gateway...' : `Pay Now`}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>🔒</span>
                <span>Secure 256-bit SSL payment</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}