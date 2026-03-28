import { NextRequest, NextResponse } from 'next/server'

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_demo_key'
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'test_key_secret'

interface CreateOrderBody {
  email: string
  name: string
  planId?: string
}

interface RazorpayOrderResponse {
  id: string
  entity: string
  amount: number
  currency: string
  receipt: string
  status: string
}

export async function POST(req: NextRequest) {
  try {
    const body: CreateOrderBody = await req.json()
    const planId = body.planId?.toLowerCase() || 'starter'

    // Define pricing plans
    const plans: Record<string, { amount: number; currency: string }> = {
      'starter': { amount: 49, currency: 'USD' },
      'pro': { amount: 99, currency: 'USD' }
    }

    const plan = plans[planId] || plans['starter']
    const amountInPaise = plan.amount * 100 // Convert USD to cents

    // Create Razorpay order
    const orderResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64')}`
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: plan.currency,
        receipt: `rcpt_${Date.now()}`,
        notes: {
          email: body.email,
          name: body.name,
          planId
        },
        payment_capture: 1
      })
    })

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text()
      console.error('❌ Razorpay order creation failed:', errorText)
      throw new Error('Failed to create payment order. Please try again.')
    }

    const orderData: RazorpayOrderResponse = await orderResponse.json()

    console.log('✅ Order created:', {
      orderId: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      email: body.email,
      planId
    })

    return NextResponse.json({
      success: true,
      orderId: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      keyId: RAZORPAY_KEY_ID
    }, { status: 200 })

  } catch (error: any) {
    console.error('❌ Create order error:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to create order. Please try again.'
    }, { status: 500 })
  }
}