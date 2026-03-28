# SecureClaw V2 - AI Agent Payment Flow

Clean, fast SaaS landing + payment system powered by Razorpay. deployed to Vercel.

## 🚀 Features

- ✅ **Landing Page**: Modern SaaS hero, benefits section, social proof
- ✅ **Pricing Page**: Simple subscription plans ($49/month Starter, $99/month Pro)
- ✅ **Checkout Flow**: Buyer form + Razorpay payment integration
- ✅ **Payment Success**: Confirmation page with generic next steps
- ✅ **Manual Fulfillment**: Backend creates order, verifies payment internally (not visible to users)
- ✅ **SEO Optimized**: Proper meta tags, fast loading
- ✅ **Global Payments**: USD pricing via Razorpay (cards, netbanking, UPI optional)

## 📁 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS
- **Payment**: Razorpay ( Checkout + API integration)
- **Deployment**: Vercel (global CDN, automatic SSL)
- **Security**: CSP headers, HTTPS, signature verification

## 🛠️ Quick Start

### 1. Clone Repository

```bash
cd /home/openclaw/.openclaw/workspace/secureclaw-v2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Razorpay keys:

```env
# Test keys (development)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
RAZORPAY_KEY_SECRET=your_secret_here
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

Get keys from: https://dashboard.razorpay.com/#/app/keys

### 4. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## 📄 Flow Overview

1. **Landing Page** → User clicks "Buy Now"
2. **Pricing Page** → User selects plan ($49 Starter or $99 Pro)
3. **Checkout Page** → User enters email + name
4. **Razorpay Popup** → User completes payment (popup opens automatically)
5. **API `/verify-payment`** → Backend verifies signature internally
6. **Success Page** → User sees "Payment successful, plan activation in progress"
7. **Manual Fulfillment** → Admin manually activates user's plan (not visible to users)

## 🔑 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/create-order` | POST | Create Razorpay order (amount, plan details) |
| `/api/verify-payment` | POST | Verify Razorpay payment signature |
| `/api/health` | GET | Health check endpoint |

### Create Order (/api/create-order)

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "planId": "pro"
}
```

**Response:**
```json
{
  "success": true,
  "orderId": "order_12345",
  "amount": 9900,
  "currency": "USD",
  "keyId": "rzp_test_demo_key"
}
```

### Verify Payment (/api/verify-payment)

**Request:**
```json
{
  "orderId": "order_12345",
  "razorpay_payment_id": "pay_12345",
  "razorpay_signature": "abc123...",
  "formData": {
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully. Plan activation in progress."
}
```

## 🚀 Deploy to Vercel

### Option 1: Command Line (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set project name: secureclaw-v2
# - No custom build command (default is fine)
# - Set environment variables in Vercel dashboard:
#   NEXT_PUBLIC_RAZORPAY_KEY_ID
#   RAZORPAY_KEY_SECRET
```

### Option 2: Vercel Dashboard

1. Go to: https://vercel.com/new
2. Import from GitHub: SultanAiMaster/secureclaw-v2
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Add Environment Variables:
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` (your Razorpay key ID)
   - `RAZORPAY_KEY_SECRET` (your Razorpay secret)
   - `NEXT_PUBLIC_API_URL` (your production URL)
   - `NODE_ENV` = 'production'
5. Click **Deploy**

## 🔐 Razorpay Setup

### 1. Get Keys

- Go to: https://dashboard.razorpay.com/#/app/keys
- Copy **Key ID** (public - safe for frontend)
- Copy **Key Secret** (private - server-side only)

### 2. Set Environment Variables

```
# Test mode (development)
NEXT_PUBLIC_RAZORPAY_KEY_ID = rzp_test_your_key_id
RAZORPAY_KEY_SECRET = your_test_secret_here

# Production (switch to live before launch)
NEXT_PUBLIC_RAZORPAY_KEY_ID = rzp_live_your_key_id
RAZORPAY_KEY_SECRET = your_live_secret_here
```

### 3. Test Payment Flow

1. Go to: http://localhost:3000 from localhost
2. Click "Buy Now"
3. Select Pro Plan ($99/month)
4. Fill email + name
5. Complete payment popup (Razorpay test mode)
6. Verify success page loads
7. Check console for verification logs

## 📊 Manual Fulfillment (Hidden from Users)

After payment success, backend stores user data (not visible to frontend).

**From backend logs, extract:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "orderId": "order_12345",
  "paymentId": "pay_12345",
  "paymentStatus": "completed",
  "timestamp": "2026-03-28T01:00:00Z"
}
```

**Admin actions (not visible to users):**
1. Send email confirmation (manual via ESP or console log initially)
2. Update database (Supabase/Firebase) with user subscription
3. Grant dashboard access (invite link, user account creation)
4. Start monitoring (logs, metrics, alerts)

Users never see these internal steps - they only see "Payment successful, plan activation in progress."

## 🎨 Customization

### Modify Pricing Plans

Edit `/app/pricing/page.tsx`:

```typescript
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    // ...
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    // ...
  }
]
```

### Change Colors

Edit `/app/globals.css` variables:

```css
:root {
  --background: #FFFFFF;
  --primary: #2196F3;
  /* ... */
}
```

### Add Features

Edit `/app/page.tsx` features array.

## 🔒 Security

- ✅ **HTTPS enforced** on Vercel
- ✅ **CSP headers** configured in vercel.json
- ✅ **Signature verification** for payments (prevents fake payment)
- ✅ **Secret key** never exposed to frontend
- ✅ **CORS handling** via Next.js API routes
- ✅ **No server-side view of manual steps** (admin logs only)

## 📈 SEO

Meta tags included on all pages:
- Title, description, keywords
- OpenGraph tags for social sharing
- Mobile-responsive design
- Fast loading (static generation where possible)

## 🛑 Known Limitations (Phase 1)

- ❌ **No database** - using Map() in-memory (move to Supabase/Firebase Phase 2)
- ❌ **No real subscription** - one-time payment only (recurring billing Phase 2)
- ❌ **No dashboard UI** - success page only (full dashboard Phase 2)
- ❌ **No user accounts** - no login/signup (Phase 3)
- ❌ **No email notifications** - manual fulfillment via console logs

## 📝 Post-Deployment Checklist

- [ ] Update Razorpay keys to live mode
- [ ] Verify payment flow on staging environment
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Set up error monitoring (Sentry)
- [ ] Custom domain setup (e.g., app.secureclaw.com)
- [ ] Add SSL certificate (auto-provided by Vercel)
- [ ] Test from mobile devices
- [ ] Verify payment success rate
- [ ] Add backup payment methods (Stripe, PayPal - optional)

## 🆘 Troubleshooting

### Payment Popup Not Opening

- Check browser console for errors
- Verify NEXT_PUBLIC_RAZORPAY_KEY_ID is set
- Check CORS settings

### Payment Verification Failed

- Verify signature calculation in lib/razorpay.ts
- Check RAZORPAY_KEY_SECRET matches dashboard
- Ensure order ID matches

### Environment Variables Not Loading

- Restart dev server after changing .env.local
- On Vercel, verify variables are set in project settings
- Check spelling of variable names

## 📄 License

Proprietary - SecureClaw 2026

---

**Ready to deploy?** Run `vercel` now!

🚀 `vercel` → Your app is live in 60 seconds!