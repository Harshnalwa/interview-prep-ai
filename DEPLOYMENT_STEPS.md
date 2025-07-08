# Step-by-Step Deployment Instructions

## Prerequisites Check ✅

Before we start, make sure you have:
- [ ] GitHub account with your code pushed
- [ ] Render account (sign up at render.com)
- [ ] MongoDB Atlas database set up
- [ ] Google Gemini API key

## Step 1: Prepare Environment Variables

Create these environment variable values (keep them safe):

### Generate JWT Secret
Run this command in your terminal to generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Your Environment Variables List:
```
NODE_ENV=production
PORT=10000
MONGODB_URI=your-mongodb-atlas-connection-string
JWT_SECRET=generated-jwt-secret-from-above
GEMINI_API_KEY=your-gemini-api-key
FRONTEND_URL=will-be-set-after-frontend-deployment
```

## Step 2: Deploy Backend to Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in these settings:

**Service Settings:**
- Name: `interview-prep-ai-backend`
- Environment: `Node`
- Region: Choose closest to you
- Branch: `main`
- Root Directory: (leave empty)
- Build Command: `npm run install-backend`
- Start Command: `npm start`

**Environment Variables:**
Add each of these in the Environment section:
- NODE_ENV = production
- PORT = 10000
- MONGODB_URI = [your MongoDB Atlas connection string]
- JWT_SECRET = [generated JWT secret]
- GEMINI_API_KEY = [your Gemini API key]

5. Click "Create Web Service"
6. Wait for deployment to complete
7. **SAVE THE BACKEND URL** (something like: https://interview-prep-ai-backend.onrender.com)

## Step 3: Deploy Frontend to Render

1. In Render dashboard, click "New +" → "Static Site"
2. Connect your GitHub repository
3. Fill in these settings:

**Site Settings:**
- Name: `interview-prep-ai-frontend`
- Branch: `main`
- Root Directory: (leave empty)
- Build Command: `npm run build-frontend`
- Publish Directory: `frontend/interview-prep-ai/dist`

**Environment Variables:**
- VITE_API_URL = [your backend URL from step 2]

4. Click "Create Static Site"
5. Wait for deployment to complete
6. **SAVE THE FRONTEND URL** (something like: https://interview-prep-ai-frontend.onrender.com)

## Step 4: Update Backend CORS Configuration

1. Go back to your backend service in Render
2. Go to Environment variables
3. Add/Update:
   - FRONTEND_URL = [your frontend URL from step 3]

4. The service will automatically redeploy

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Try to sign up/login
3. Test creating a session
4. Test AI question generation

## If Something Goes Wrong

Check the logs:
1. Backend logs: Go to your backend service → Logs tab
2. Frontend logs: Go to your frontend static site → Deploys tab

Common issues:
- CORS errors: Check if frontend URL is added to backend CORS
- Database connection: Verify MongoDB Atlas connection string
- Build errors: Check if all dependencies are in package.json

## Your Deployment URLs

After successful deployment, save these:
- Backend: https://interview-prep-ai-backend.onrender.com
- Frontend: https://interview-prep-ai-frontend.onrender.com
