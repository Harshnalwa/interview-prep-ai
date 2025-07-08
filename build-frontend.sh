#!/bin/bash
# Frontend build script for Render deployment

echo "Installing frontend dependencies..."
cd frontend/interview-prep-ai
npm install

echo "Building frontend with Vite..."
npx vite build

echo "Build completed successfully!"
