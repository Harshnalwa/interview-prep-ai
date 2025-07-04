# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Environment Variables**: Prepare your environment variables

## Environment Variables Setup

Before deploying, you need to set up the following environment variables in your Vercel dashboard:

### Backend Environment Variables
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure secret key for JWT tokens
- `GOOGLE_API_KEY`: Your Google Gemini API key
- `NODE_ENV`: Set to `production`

### Frontend Environment Variables
- `VITE_API_URL`: Set to your Vercel deployment URL (e.g., `https://your-app.vercel.app`)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:
   - Root Directory: Leave as default (root)
   - Framework Preset: Other
   - Build Command: `npm run vercel-build`
   - Output Directory: `frontend/interview-prep-ai/dist`
   - Install Command: `npm run install-all`

3. **Set Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all the environment variables listed above
   - Make sure to set them for Production, Preview, and Development

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## Post-Deployment Setup

1. **Update Frontend API URL**:
   - Once deployed, update the `VITE_API_URL` environment variable with your actual Vercel URL
   - Redeploy if necessary

2. **Test the Application**:
   - Visit your deployment URL
   - Test user registration/login
   - Test AI question generation
   - Verify file uploads work

## Important Notes

### File Uploads
- Vercel's serverless functions have limitations with file storage
- Uploaded files (profile pictures) will be lost on each deployment
- Consider using a cloud storage service like AWS S3, Cloudinary, or Vercel Blob for production

### Database
- Make sure your MongoDB instance allows connections from Vercel's IP ranges
- Consider using MongoDB Atlas for better compatibility

### API Rate Limits
- Vercel has function execution time limits (10s for Hobby, 30s for Pro)
- The AI API calls might take time, monitor for timeouts

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are listed in package.json
- Verify environment variables are set correctly

### Runtime Errors
- Check function logs in Vercel dashboard
- Verify database connection string
- Check API key validity

### CORS Issues
- The app is configured to allow your Vercel domain
- If you encounter CORS errors, check the allowedOrigins in server.js

## Domain Setup (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

## Monitoring

- Use Vercel Analytics for performance monitoring
- Monitor function execution logs
- Set up error tracking with services like Sentry if needed
