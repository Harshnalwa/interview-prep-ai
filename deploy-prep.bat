@echo off
echo 🚀 Preparing Interview Prep AI for Vercel deployment...

REM Check if we're in the right directory
if not exist "vercel.json" (
    echo ❌ Error: vercel.json not found. Please run this script from the project root.
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    exit /b 1
)

REM Install frontend dependencies
echo Installing frontend dependencies...
cd ..\frontend\interview-prep-ai
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    exit /b 1
)

REM Build frontend
echo 🔨 Building frontend...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    exit /b 1
)

cd ..\..

echo ✅ Build completed successfully!
echo.
echo 📋 Next steps:
echo 1. Push your code to GitHub
echo 2. Connect your repository to Vercel
echo 3. Set environment variables in Vercel dashboard:
echo    - MONGODB_URI
echo    - JWT_SECRET
echo    - GOOGLE_API_KEY
echo    - VITE_API_URL (your Vercel deployment URL)
echo 4. Deploy!
echo.
echo 📖 For detailed instructions, see VERCEL_DEPLOYMENT.md

pause
