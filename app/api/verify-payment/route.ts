import { NextRequest, NextResponse } from 'next/server'
import { verifySignature } from '@/lib/razorpay'

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'test_key_secret'

interface VerifyPaymentBody {
  orderId: string
  razorpay_payment_id: string
  razorpay_signature: string,
  formData: {
    email: string
    name: string
    phone?: string
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: VerifyPaymentBody = await req.json()

    const { orderId, razorpay_payment_id: paymentId, razorpay_signature: signature, formData } = body

    // Verify Razorpay signature
    const isValid = verifySignature(orderId, paymentId, signature, RAZORPAY_KEY_SECRET)

    if (!isValid) {
      return NextResponse.json({
        success: false,
        error: 'Invalid payment signature. Payment verification failed.'
      }, { status: 400 })
    }

    // TODO: In production, save to database (Supabase/Firebase)
    // For now, simulate manual fulfillment
    console.log('✅ Payment verified:', {
      orderId,
      paymentId,
      email: formData.email,
      name: formData.name
    })

    // Simulate storing user data (this would go to DB in production)
    const userData = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      paymentId,
      orderId,
      paymentStatus: 'completed',
      timestamp: new Date().toISOString()
    }

    console.log('📝 User data stored:', userData)

    // Return success - user won't know we're doing manual fulfillment
    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully. Plan activation in progress.'
    }, { status: 200 })

  } catch (error: any) {
    console.error('❌ Payment verification error:', error)
    return NextResponse.json({
      success: false,
      error: 'Payment verification failed. Please contact support.'
    }, { status: 500 })
  }
}