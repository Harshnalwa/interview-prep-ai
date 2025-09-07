#!/bin/bash
# Build script for Render deployment

echo "Starting frontend build..."
cd frontend/interview-prep-ai

echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Checking if dist directory exists..."
if [ -d "dist" ]; then
    echo "✅ Build successful - dist directory created"
    ls -la dist/
else
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "Build completed successfully!"
