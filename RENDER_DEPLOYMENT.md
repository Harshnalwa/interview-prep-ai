# Interview Preparation AI - Render Deployment Guide

## Prerequisites
- GitHub repository: https://github.com/varunkm11/Interview-Preparation-AI
- Render account: https://render.com

## Backend Deployment (Web Service)

1. **Create New Web Service** on Render
2. **Connect Repository**: `varunkm11/Interview-Preparation-AI`
3. **Configuration**:
   - Name: `interview-preparation-ai-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: `Free`

4. **Environment Variables**:
   ```
   MONGO_URI=mongodb+srv://varunkm11:dAQO7sBavWafLWGi@cluster0.zlwptez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=6e6f9a43fd64125f722ec47afba1480fc1f0fd47a1f643df5f99d37b413b3419cbea0fbcd6c1c373453f6509a13d9b1f8230c8d7b974c63d0a066ee86857c358
   GEMINI_API_KEY=AIzaSyCzWTX8IijHIo9gm6g0B-CAni5YdMUOiYo
   CLOUDINARY_CLOUD_NAME=dykqa99lv
   CLOUDINARY_API_KEY=418811919719153
   CLOUDINARY_API_SECRET=sK05It_x4wLoN_rzO1B1eRwnAIQ
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.onrender.com
   ```

## Frontend Deployment (Static Site)

1. **Create New Static Site** on Render
2. **Connect Repository**: `varunkm11/Interview-Preparation-AI`
3. **Configuration**:
   - Name: `interview-preparation-ai-frontend`
   - Root Directory: `frontend/interview-prep-ai`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

4. **Environment Variables**:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

## Post-Deployment Steps

1. **Get URLs**: After both services are deployed, note down both URLs
2. **Update Environment Variables**:
   - Update `FRONTEND_URL` in backend service
   - Update `VITE_API_URL` in frontend service
3. **Redeploy**: Both services will auto-redeploy when you update environment variables

## Testing

1. Visit your frontend URL
2. Test user registration/login
3. Test AI question generation
4. Verify file uploads work correctly

## Notes

- Free tier on Render spins down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Consider upgrading to paid tier for production use
