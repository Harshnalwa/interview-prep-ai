# Render Deployment Guide for Interview Preparation AI

This guide will walk you through deploying your full-stack Interview Preparation AI application on Render.

## Overview
Your application consists of:
- **Frontend**: React + Vite application
- **Backend**: Node.js + Express API server
- **Database**: MongoDB (hosted externally)
- **Architecture**: Monorepo with separate frontend and backend

## Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **MongoDB Database**: Set up a MongoDB Atlas database or use your existing MongoDB instance
4. **Environment Variables**: Prepare your environment variables

## Deployment Strategy

We'll deploy this as two separate services on Render:
1. **Web Service** for the backend API
2. **Static Site** for the frontend React app

## Step 1: Prepare Your Repository

### 1.1 Create Production Build Scripts

Make sure your root `package.json` has the correct build scripts (which you already have):

```json
{
  "scripts": {
    "install-backend": "cd backend && npm install",
    "install-frontend": "cd frontend/interview-prep-ai && npm install",
    "build-frontend": "cd frontend/interview-prep-ai && npm run build",
    "build": "npm run install-backend && npm run install-frontend && npm run build-frontend",
    "start": "cd backend && npm start"
  }
}
```

### 1.2 Create Render Configuration Files

Create a `render.yaml` file in your project root for easier deployment:

```yaml
services:
  - type: web
    name: interview-prep-ai-backend
    env: node
    plan: free
    buildCommand: npm run install-backend
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
    healthCheckPath: /

  - type: web
    name: interview-prep-ai-frontend
    env: static
    buildCommand: npm run build-frontend
    staticPublishPath: ./frontend/interview-prep-ai/dist
    envVars:
      - key: NODE_ENV
        value: production
```

## Step 2: Deploy Backend (API Server)

### 2.1 Create a New Web Service

1. Go to your [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `interview-prep-ai-backend`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (root of repo)
   - **Build Command**: `npm run install-backend`
   - **Start Command**: `npm start`

### 2.2 Configure Environment Variables

In the "Environment" section, add these variables:

| Key | Value | Notes |
|-----|--------|-------|
| `NODE_ENV` | `production` | Required |
| `PORT` | `10000` | Render's default port |
| `MONGODB_URI` | `your-mongodb-connection-string` | Your MongoDB Atlas URI |
| `JWT_SECRET` | `your-jwt-secret-key` | Generate a secure random string |
| `GEMINI_API_KEY` | `your-gemini-api-key` | Your Google Gemini API key |
| `FRONTEND_URL` | `https://your-frontend-url.onrender.com` | Will be set after frontend deployment |

### 2.3 Update Backend CORS Configuration

Your backend already has CORS configured, but you'll need to update the `allowedOrigins` in `server.js` after you deploy the frontend.

## Step 3: Deploy Frontend (React App)

### 3.1 Create a Static Site

1. Go to your [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure the site:
   - **Name**: `interview-prep-ai-frontend`
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Build Command**: `npm run build-frontend`
   - **Publish Directory**: `frontend/interview-prep-ai/dist`

### 3.2 Configure Environment Variables

Add this environment variable:

| Key | Value |
|-----|--------|
| `VITE_API_URL` | `https://your-backend-url.onrender.com` |

**Note**: Replace `your-backend-url` with the actual URL of your deployed backend service.

## Step 4: Update Configuration After Deployment

### 4.1 Update Backend CORS

After both services are deployed, update your backend's CORS configuration:

1. Note the URLs of your deployed services:
   - Backend: `https://interview-prep-ai-backend.onrender.com`
   - Frontend: `https://interview-prep-ai-frontend.onrender.com`

2. Update the `allowedOrigins` array in `backend/server.js`:

```javascript
const allowedOrigins = [
  "https://interview-prep-ai-frontend.onrender.com", // Your deployed frontend
  "https://interview-prep-ai-backend.onrender.com",  // Your deployed backend
  "http://localhost:5173", // Keep for local development
  process.env.FRONTEND_URL
];
```

3. Commit and push the changes to trigger a redeploy.

### 4.2 Update Frontend API URL

Make sure your frontend's `VITE_API_URL` environment variable points to your deployed backend URL.

## Step 5: Database Setup

### 5.1 MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster (free tier available)
3. Create a database user
4. Add your IP to the whitelist (or use 0.0.0.0/0 for all IPs)
5. Get the connection string and add it to your backend's `MONGODB_URI` environment variable

### 5.2 Connection String Format

```
mongodb+srv://username:password@cluster.mongodb.net/interview-prep-ai?retryWrites=true&w=majority
```

## Step 6: Custom Domains (Optional)

### 6.1 Backend Custom Domain

1. In your backend service settings, go to "Settings" → "Custom Domains"
2. Add your domain (e.g., `api.yourapp.com`)
3. Update DNS records as instructed

### 6.2 Frontend Custom Domain

1. In your static site settings, go to "Settings" → "Custom Domains"
2. Add your domain (e.g., `yourapp.com` or `www.yourapp.com`)
3. Update DNS records as instructed

## Step 7: Environment Variables Reference

### Backend Environment Variables

```env
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interview-prep-ai
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
GEMINI_API_KEY=your-gemini-api-key
FRONTEND_URL=https://interview-prep-ai-frontend.onrender.com
```

### Frontend Environment Variables

```env
VITE_API_URL=https://interview-prep-ai-backend.onrender.com
```

## Step 8: Deployment Commands

### Manual Deploy Commands (if needed)

```bash
# Build everything locally (for testing)
npm run build

# Deploy backend manually
npm run install-backend
cd backend && npm start

# Build frontend manually
npm run build-frontend
```

## Step 9: Monitoring and Logs

### 9.1 Backend Logs

1. Go to your backend service in Render dashboard
2. Click on "Logs" tab to view real-time logs
3. Monitor for errors and performance issues

### 9.2 Frontend Deploy Logs

1. Go to your static site in Render dashboard
2. Click on "Deploys" tab to view build logs
3. Check for build errors

## Step 10: Common Issues and Troubleshooting

### 10.1 CORS Issues

**Problem**: Frontend can't connect to backend
**Solution**: Ensure your backend's CORS configuration includes your frontend URL

### 10.2 Environment Variables

**Problem**: App not working after deployment
**Solution**: Double-check all environment variables are set correctly

### 10.3 Build Failures

**Problem**: Build fails on Render
**Solution**: 
- Check build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify build commands are correct

### 10.4 Database Connection

**Problem**: Cannot connect to MongoDB
**Solution**:
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Ensure database user has correct permissions

## Step 11: Updating Your Application

### 11.1 Automatic Deploys

Render automatically deploys when you push to your connected branch:

1. Make changes to your code
2. Commit and push to your repository
3. Render will automatically build and deploy

### 11.2 Manual Deploys

You can also trigger manual deploys from the Render dashboard:

1. Go to your service
2. Click "Manual Deploy" → "Deploy latest commit"

## Step 12: Performance Optimization

### 12.1 Backend Optimization

- Use compression middleware
- Implement caching where appropriate
- Optimize database queries

### 12.2 Frontend Optimization

- Implement code splitting
- Optimize images and assets
- Use React.memo for expensive components

## Support and Resources

- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/node-version)
- [Static Sites on Render](https://render.com/docs/static-sites)
- [Environment Variables](https://render.com/docs/environment-variables)

## Security Checklist

- [ ] Use strong JWT secret (minimum 32 characters)
- [ ] Set up proper CORS origins
- [ ] Use HTTPS for all communications
- [ ] Keep API keys secure in environment variables
- [ ] Implement rate limiting if needed
- [ ] Set up proper error handling

---

**Note**: Free tier services on Render may spin down after periods of inactivity. Consider upgrading to paid plans for production applications requiring 24/7 availability.
