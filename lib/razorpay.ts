import * as crypto from 'crypto'

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID
const RAZORPAY_KEY_SECRET = process.env

export function createHash(value: string): string {
  return crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET || 'test_key_secret')
    .update(value)
    .digest('hex')
}

export function verifySignature(orderId: string, paymentId: string, signature: string, secret?: string): boolean {
  if (!secret) secret = RAZORPAY_KEY_SECRET || 'test_key_secret'

  const generatedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex')

  return generatedSignature === signature
}