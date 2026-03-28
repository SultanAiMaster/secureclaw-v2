'use client'

import Head from 'next/head'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Payment Successful - SecureClaw</title>
      </Head>

      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-4xl">✓</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Payment Successful!
              </h1>
              <p className="text-gray-600">
                Thank you for your purchase!
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <p className="text-green-800 font-medium">
                Your plan has been activated successfully.
              </p>
            </div>

            <Link
              href="/"
              className="block w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800"
            >
              Go to Dashboard →
            </Link>

            <Link
              href="/pricing"
              className="block w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold mt-4"
            >
              Browse Plans
            </Link>

            <div className="text-center mt-8 text-gray-500 text-sm">
              <p>You will receive email confirmation shortly.</p>
              <p>Need help? Contact support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}