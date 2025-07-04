#!/bin/bash

echo "🚀 Preparing Interview Prep AI for Vercel deployment..."

# Check if we're in the right directory
if [ ! -f "vercel.json" ]; then
    echo "❌ Error: vercel.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend && npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../frontend/interview-prep-ai && npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

# Build frontend
echo "🔨 Building frontend..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi

cd ../..

echo "✅ Build completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Push your code to GitHub"
echo "2. Connect your repository to Vercel"
echo "3. Set environment variables in Vercel dashboard:"
echo "   - MONGODB_URI"
echo "   - JWT_SECRET" 
echo "   - GOOGLE_API_KEY"
echo "   - VITE_API_URL (your Vercel deployment URL)"
echo "4. Deploy!"
echo ""
echo "📖 For detailed instructions, see VERCEL_DEPLOYMENT.md"
