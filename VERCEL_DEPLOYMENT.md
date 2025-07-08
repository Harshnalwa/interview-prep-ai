# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Environment Variables**: Prepare your environment variables

## Environment Variables Required

Set these environment variables in your Vercel dashboard:

### Backend Environment Variables
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure random string for JWT tokens
- `GEMINI_API_KEY`: Your Google Gemini API key
- `NODE_ENV`: Set to "production"
- `FRONTEND_URL`: Your Vercel app URL (e.g., https://your-app-name.vercel.app)

### Frontend Environment Variables
- `VITE_API_URL`: Your Vercel app URL (e.g., https://your-app-name.vercel.app)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Environment Variables**:
   - In the project settings, go to "Environment Variables"
   - Add all the required environment variables listed above
   - Make sure to set them for "Production", "Preview", and "Development"

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application

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

4. **Set Environment Variables** (via CLI):
   ```bash
   vercel env add MONGODB_URI
   vercel env add JWT_SECRET
   vercel env add GEMINI_API_KEY
   vercel env add FRONTEND_URL
   vercel env add VITE_API_URL
   ```

## Project Structure

This project uses a monorepo structure with:
- **Backend**: Node.js/Express API (`/backend`)
- **Frontend**: React/Vite SPA (`/frontend/interview-prep-ai`)

The deployment configuration:
- Builds the frontend to `/frontend/interview-prep-ai/dist`
- Serves the React app through the Express server
- All routes are handled by the backend, which serves the SPA for non-API routes

## Post-Deployment

1. **Test the Application**: Visit your Vercel URL
2. **Check Logs**: Use Vercel dashboard to monitor function logs
3. **Update CORS**: Make sure your new domain is added to CORS configuration

## Troubleshooting

- **Build Errors**: Check the build logs in Vercel dashboard
- **API Errors**: Verify all environment variables are set correctly
- **CORS Issues**: Ensure your Vercel domain is in the allowedOrigins array
- **Database Connection**: Verify MongoDB URI and network access

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update environment variables with your new domain
