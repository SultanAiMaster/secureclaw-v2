import * as crypto from 'crypto'

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

export function createHash(value: string): string {
  const secret = RAZORPAY_KEY_SECRET || 'test_key_secret'
  return crypto
    .createHmac('sha256', secret)
    .update(value)
    .digest('hex')
}

export function verifySignature(orderId: string, paymentId: string, signature: string, secret?: string): boolean {
  const keySecret = secret || RAZORPAY_KEY_SECRET || 'test_key_secret'

  const generatedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex')

  return generatedSignature === signature
}