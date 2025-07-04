# 🚀 Vercel Deployment Checklist

## Pre-Deployment Setup ✅

- [x] Created `vercel.json` configuration
- [x] Updated `server.js` for Vercel compatibility
- [x] Created API route handler in `/api/index.js`
- [x] Updated Vite configuration
- [x] Created root `package.json` with build scripts
- [x] Added environment variables documentation
- [x] Created deployment scripts
- [x] Updated CORS settings for Vercel
- [x] Test build completed successfully

## Before You Deploy 📋

### 1. Environment Variables Required:
- [ ] `MONGODB_URI` - Your MongoDB connection string
- [ ] `JWT_SECRET` - Secure secret for JWT tokens
- [ ] `GOOGLE_API_KEY` - Your Google Gemini API key
- [ ] `VITE_API_URL` - Will be your Vercel URL (set after first deploy)
- [ ] `NODE_ENV` - Set to "production"

### 2. Repository Setup:
- [ ] Push all code to GitHub
- [ ] Ensure `.gitignore` excludes sensitive files
- [ ] Verify all dependencies are in package.json files

### 3. External Services:
- [ ] MongoDB Atlas configured and accessible
- [ ] Google Gemini API key is valid
- [ ] All API quotas/limits are appropriate for production

## Deployment Steps 🚀

### Option A: Vercel Dashboard (Recommended)
1. [ ] Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. [ ] Click "New Project"
3. [ ] Import your GitHub repository
4. [ ] Configure project settings:
   - Root Directory: Leave default
   - Framework: Other
   - Build Command: `npm run vercel-build`
   - Output Directory: `frontend/interview-prep-ai/dist`
   - Install Command: `npm run install-all`
5. [ ] Add all environment variables
6. [ ] Click "Deploy"

### Option B: Vercel CLI
1. [ ] Install Vercel CLI: `npm i -g vercel`
2. [ ] Login: `vercel login`
3. [ ] Deploy: `vercel --prod`

## Post-Deployment ✅

### 1. Update Environment Variables:
- [ ] Copy your Vercel deployment URL
- [ ] Update `VITE_API_URL` environment variable
- [ ] Redeploy if necessary

### 2. Testing:
- [ ] Visit your deployment URL
- [ ] Test user registration
- [ ] Test user login
- [ ] Test AI question generation
- [ ] Test profile picture upload
- [ ] Test session creation and management

### 3. Domain Setup (Optional):
- [ ] Add custom domain in Vercel settings
- [ ] Configure DNS records
- [ ] Update environment variables if needed

## Troubleshooting 🔧

### Common Issues:
- **Build Failures**: Check build logs, verify dependencies
- **API Errors**: Verify environment variables are set correctly
- **CORS Issues**: Check allowedOrigins in server.js
- **Database Connection**: Ensure MongoDB allows Vercel connections
- **Function Timeouts**: Monitor execution times (10s limit on free tier)

### Important Notes:
- **File Uploads**: Vercel serverless functions don't persist files
- **Consider Cloudinary or AWS S3 for production file storage**
- **Monitor function execution times and logs**
- **Set up error tracking for production monitoring**

---

## 🎉 You're Ready to Deploy!

Run the deployment preparation script:
- Windows: `.\deploy-prep.bat`
- Mac/Linux: `./deploy-prep.sh`

Then follow the deployment steps above. Good luck! 🚀
