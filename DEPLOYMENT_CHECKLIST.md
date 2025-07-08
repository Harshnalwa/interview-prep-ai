# Render Deployment Checklist

## Pre-Deployment Setup

- [ ] Push your code to GitHub repository
- [ ] Set up MongoDB Atlas database (or other MongoDB instance)
- [ ] **IMPORTANT**: Configure MongoDB Atlas IP Whitelist for Render:
  - [ ] Go to MongoDB Atlas → Network Access
  - [ ] Click "Add IP Address"
  - [ ] Select "Allow Access From Anywhere" (0.0.0.0/0)
  - [ ] Or add Render's IP ranges (see troubleshooting section)
- [ ] Obtain Google Gemini API key
- [ ] Generate a strong JWT secret (32+ characters)

## Render Account Setup

- [ ] Create account at [render.com](https://render.com)
- [ ] Connect your GitHub account to Render

## Backend Deployment

- [ ] Create new Web Service on Render
- [ ] Connect to your GitHub repository
- [ ] Set root directory: `backend`
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Add environment variables:
  - [ ] `NODE_ENV=production`
  - [ ] `PORT=10000`
  - [ ] `MONGODB_URI=your-mongodb-connection-string`
  - [ ] `JWT_SECRET=your-jwt-secret`
  - [ ] `GEMINI_API_KEY=your-gemini-api-key`
- [ ] Deploy and note the backend URL

## Frontend Deployment

- [ ] Create new Static Site on Render
- [ ] Connect to your GitHub repository
- [ ] Set build command: `cd frontend/interview-prep-ai && npm ci && npx vite build`
- [ ] Set publish directory: `frontend/interview-prep-ai/dist`
- [ ] Add environment variable:
  - [ ] `VITE_API_URL=https://your-backend-url.onrender.com`
- [ ] Deploy and note the frontend URL

## Post-Deployment Configuration

- [ ] Update backend CORS configuration with frontend URL
- [ ] Update backend `FRONTEND_URL` environment variable
- [ ] Test the application end-to-end
- [ ] Verify MongoDB connection
- [ ] Test AI functionality with Gemini API

## Optional Enhancements

- [ ] Set up custom domains
- [ ] Configure SSL certificates (automatic with custom domains)
- [ ] Set up monitoring and alerts
- [ ] Consider upgrading to paid plan for production use

## Troubleshooting

### Frontend Build Issues

**Error**: `sh: 1: vite: Permission denied` or similar build errors

**Solutions**:
1. **Update build command** to use `npx` and `npm ci`:
   ```
   cd frontend/interview-prep-ai && npm ci && npx vite build
   ```

2. **Alternative build commands** (try these in order if the above doesn't work):
   ```
   # Option A: Use npm scripts instead
   cd frontend/interview-prep-ai && npm install && npm run build
   
   # Option B: Use node directly
   cd frontend/interview-prep-ai && npm ci && node node_modules/.bin/vite build
   
   # Option C: More explicit approach
   cd frontend/interview-prep-ai && npm ci && ./node_modules/.bin/vite build
   
   # Option D: Set permissions explicitly
   cd frontend/interview-prep-ai && npm ci && chmod +x node_modules/.bin/vite && npx vite build
   ```

3. **Check Node.js version**: Ensure you're using Node.js 18+ (add `.nvmrc` file with `18`)

### MongoDB Connection Issues

**Error**: `MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster`

**Solution**: Fix IP Whitelist in MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Select your cluster
3. Go to "Network Access" in the left sidebar
4. Click "Add IP Address"
5. Choose one of these options:
   - **Option A (Recommended for deployment)**: "Allow Access From Anywhere"
     - This adds `0.0.0.0/0` which allows all IPs
   - **Option B (More secure)**: Add Render's specific IP ranges:
     - `44.195.64.0/22`
     - `44.198.12.0/22` 
     - `18.206.107.24/29`
     - `3.209.207.32/29`
6. Click "Confirm"
7. Wait 1-2 minutes for changes to take effect
8. Redeploy your backend service on Render

### Other Issues

If something doesn't work:

1. Check the deployment logs in Render dashboard
2. Verify all environment variables are set correctly
3. Ensure MongoDB IP whitelist includes 0.0.0.0/0 (or Render's IPs)
4. Check CORS configuration in backend
5. Verify API endpoints are working with tools like Postman

## Quick URLs Reference

After deployment, save these URLs:

- Backend API: `https://interview-prep-ai-backend.onrender.com`
- Frontend App: `https://interview-prep-ai-frontend.onrender.com`
- MongoDB Atlas: `https://cloud.mongodb.com`
- Render Dashboard: `https://dashboard.render.com`
