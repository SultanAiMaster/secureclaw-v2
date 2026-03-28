#!/bin/bash

set -e

echo "🚀 SecureClaw V2 Setup Script"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js installed: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

echo "✅ npm installed: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Setup environment variables
echo ""
echo "🔑 Setting up environment..."

if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✅ Created .env.local from .env.example"
else
    echo "ℹ️  .env.local already exists, skipping..."
fi

# Initialize git if not already initialized
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo ""
    echo "📝 Initializing git repository..."
    git init
    git add .
    git commit -m "feat: initial setup - SecureClaw V2 payment flow"

    # Add remote (you'll need to create repo first)
    echo ""
    echo "🌐 To push to GitHub:"
    echo "   1. Create repo: https://github.com/new"
    echo "   2. Git remote add: git remote add origin https://github.com/yourusername/secureclaw-v2.git"
    echo "   3. Push: git push -u origin main"

    # Default remote (optional)
    if [ -z "$(git remote -v)" ]; then
        git remote add origin https://github.com/SultanAiMaster/secureclaw-v2.git
        echo "✅ Added default remote: SultanAiMaster/secureclaw-v2"
    fi
else
    echo "ℹ️  Git repository already initialized, skipping..."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. Edit .env.local with your Razorpay keys:"
echo "      NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_here"
echo "      RAZORPAY_KEY_SECRET=your_secret_here"
echo ""
echo "   2. Start dev server:"
echo "      npm run dev"
echo ""
echo "   3. Open browser:"
echo "      http://localhost:3000"
echo ""
echo "   4. Deploy to Vercel:"
echo "      npm i -g vercel"
echo "      vercel"
echo ""
echo "🎉 Ready to go!"