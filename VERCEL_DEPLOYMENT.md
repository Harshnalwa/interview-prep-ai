# Vercel Deployment Guide - Interview Preparation AI

## 🚀 Quick Deploy to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Go to Vercel**: https://vercel.com
2. **Sign in/Sign up** with your GitHub account
3. **Import Project**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose: `varunkm11/Interview-Preparation-AI`

4. **Configure Project**:
   - **Project Name**: `interview-preparation-ai`
   - **Framework Preset**: `Vite` (should auto-detect)
   - **Root Directory**: `frontend/interview-prep-ai`
   - **Build Command**: `npm run build:prod`
   - **Output Directory**: `dist`
   - **Install Command**: `npm ci`

5. **Environment Variables**:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   *(Replace with your actual Render backend URL)*

6. **Deploy**: Click "Deploy"

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend/interview-prep-ai

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: interview-preparation-ai
# - Directory: ./
# - Override settings? Yes
#   - Build Command: npm run build:prod
#   - Output Directory: dist
#   - Development Command: npm run dev

# Set environment variables
vercel env add VITE_API_URL production
# Enter your backend URL when prompted

# Deploy to production
vercel --prod
```

## 🔧 Configuration Details

### Frontend (Vercel)
- **Platform**: Vercel (Static Site)
- **Build Command**: `npm run build:prod`
- **Output Directory**: `dist`
- **Environment Variable**: `VITE_API_URL`

### Backend (Render)
- **Platform**: Render (Web Service)
- **Keep your existing backend deployment**
- **Update Environment Variable**:
  ```
  FRONTEND_URL=https://your-vercel-app.vercel.app
  ```

## 🔗 Connecting Frontend & Backend

### Step 1: Get URLs
1. **Backend URL**: From your Render dashboard (e.g., `https://interview-preparation-ai-backend.onrender.com`)
2. **Frontend URL**: From Vercel dashboard (e.g., `https://interview-preparation-ai.vercel.app`)

### Step 2: Update Environment Variables

**In Vercel (Frontend)**:
- Go to Project Settings → Environment Variables
- Add: `VITE_API_URL = https://your-backend-url.onrender.com`

**In Render (Backend)**:
- Go to Environment tab
- Update: `FRONTEND_URL = https://your-vercel-app.vercel.app`

### Step 3: Redeploy
- Vercel will auto-redeploy when you update environment variables
- Render backend will also redeploy automatically

## ✅ Verification

1. Visit your Vercel URL
2. Test user registration/login
3. Check browser console for errors
4. Verify API calls work properly

## 🎯 Advantages of Vercel

- ✅ **Lightning fast** deployments
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Zero configuration** for React/Vite
- ✅ **Git integration** (auto-deploy on push)
- ✅ **Preview deployments** for PRs
- ✅ **Custom domains** support

## 🔥 Pro Tips

1. **Custom Domain**: Add your own domain in Vercel dashboard
2. **Environment Variables**: Use Vercel's environment variables UI
3. **Analytics**: Enable Vercel Analytics for usage insights
4. **Preview URLs**: Every commit gets a preview URL
5. **Branch Deployments**: Set up staging from different branches
