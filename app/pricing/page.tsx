'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    { id: 'starter', name: 'Starter', price: 49, popular: false },
    { id: 'pro', name: 'Pro', price: 99, popular: true }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Simple Pricing
          </h1>
          <p className="text-gray-600 text-lg">
            One flat price. Cancel anytime.
          </p>
        </div>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 border-2 transition-all ${
                plan.popular
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    ${plan.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    USD {plan.price}/month
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1 text-green-800 font-semibold">
                    {plan.price}
                  </div>
                </div>
              </div>

              <Link
                key={plan.id}
                href={`/checkout?plan=${plan.name.toLowerCase()}&amount=${plan.price}&currency=USD`}
                className="block w-full py-4 rounded-xl font-semibold transition-all hover:scale-[1.02]
                text-center bg-blue-600 text-white hover:bg-blue-700"
              >
                Select {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold"
          >
            Back to Home →
          </Link>
        </div>
      </div>
    </div>
  )
}