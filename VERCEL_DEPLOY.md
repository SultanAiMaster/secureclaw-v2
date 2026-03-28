# SecureClaw V2 - Vercel Deployment Guide

## Method 1: Vercel CLI (Recommended)

```bash
# 1. Install CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Follow prompts:
# - Project: secureclaw-v2
# - Build settings: Use defaults
# - Environment Variables: See below
```

## Method 2: Vercel Dashboard

1. Visit: https://vercel.com/new
2. Import GitHub repository: secureclaw-v2
3. Next.js framework preset
4. Add Environment Variables
5. Deploy

## Environment Variables Required:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID = "rzp_test_demo_key"
RAZORPAY_KEY_SECRET = "test_key_secret"
NEXT_PUBLIC_API_URL = "https://yourdomain.com"
NODE_ENV = "production"
```

## After Deployment Access:

```
https://yourapp.vercel.app/
```

## Test Flow:

1. Landing page → "Buy Now" button
2. Pricing → Select plan
3. Checkout → Enter email + name
4. Submit → Redirect to success
5. Success → "Your plan has been activated"

## Custom Domain (Optional):

Vercel Dashboard → Settings → Domains → Add Domain

## Production Mode:

Switch to live Razorpay keys