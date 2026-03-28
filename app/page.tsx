'use client'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center py-10">
        SecureClaw - AI Agent Deployment in 60 Seconds
      </h1>
      <div className="text-center mt-6">
        <a href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
          Buy Now - $49/month
        </a>
      </div>
      <div className="text-center mt-6 text-gray-600">
        Deploy secure AI agents powered by OpenClaw.
      </div>
    </div>
  )
}