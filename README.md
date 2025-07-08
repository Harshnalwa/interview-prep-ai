# 🤖 Interview Preparation AI

An intelligent, AI-powered interview preparation platform that generates personalized interview questions and answers based on your role, experience level, and focus areas. Built with modern web technologies and powered by Google's Gemini AI.

![Interview Prep AI](https://img.shields.io/badge/AI%20Powered-Interview%20Prep-purple?style=for-the-badge&logo=openai)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-19+-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)

## 🌐 Live Demo

🔗 **[Try the Live Application](https://interview-preparation-ai-1.onrender.com)**

> Experience the AI-powered interview preparation platform in action! Create your account and start generating personalized interview questions instantly.

**Demo Features:**
- ✅ Full AI question generation
- ✅ Interactive Q&A interface
- ✅ Session management
- ✅ Real-time explanations
- ✅ Responsive design

## ✨ Features

### 🎯 **Personalized Interview Questions**
- Role-specific questions tailored to your target position
- Experience-level appropriate content (Junior to Senior)
- Focus area customization for targeted preparation

### 🧠 **AI-Powered Learning**
- **Google Gemini AI Integration** for intelligent question generation
- Detailed explanations for complex concepts
- Adaptive content based on your preferences

### 📊 **Smart Organization**
- **Session Management**: Create and organize multiple interview sessions
- **Question Pinning**: Mark important questions for quick access
- **Progress Tracking**: Monitor your preparation journey

### 💡 **Interactive Experience**
- Expandable answer cards with syntax-highlighted code examples
- Real-time AI explanations for deeper understanding
- Beautiful, responsive UI with dark theme

### 🔐 **User Management**
- Secure authentication with JWT tokens
- Profile management with image upload
- Personal dashboard for session overview

## 🏗️ Technology Stack

### Frontend
- **React 19** with Vite for fast development
- **Tailwind CSS 4** for modern styling
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **Axios** for API communication
- **React Markdown** with syntax highlighting

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Google Gemini AI** for content generation
- **JWT** for authentication
- **Multer** for file uploads
- **bcryptjs** for password encryption

### Development Tools
- **Nodemon** for backend development
- **ESLint** for code quality
- **CORS** for cross-origin requests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/interview-preparation-ai.git
   cd interview-preparation-ai
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (frontend + backend)
   npm run build
   
   # Or install separately
   npm run install-backend
   npm run install-frontend
   ```

3. **Environment Setup**
   
   Create `.env` file in the `backend` directory:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   FRONTEND_URL=http://localhost:5173
   ```

   Create `.env` file in the `frontend/interview-prep-ai` directory:
   ```env
   VITE_API_URL=http://localhost:8000
   ```

4. **Start the application**
   ```bash
   # Development mode (both frontend and backend)
   npm run dev-backend    # Terminal 1
   npm run dev-frontend   # Terminal 2
   
   # Production mode
   npm start              # Starts backend only
   ```

5. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

## 📁 Project Structure

```
Interview-Preparation-AI/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── aiController.js       # AI/Gemini integration
│   │   ├── authController.js     # Authentication logic
│   │   ├── questionController.js # Question management
│   │   └── sessionController.js  # Session management
│   ├── middlewares/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Session.js           # Interview session schema
│   │   └── Question.js          # Question schema
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication endpoints
│   │   ├── sessionRoutes.js     # Session CRUD operations
│   │   └── questionRoutes.js    # Question operations
│   ├── utils/
│   │   └── prompts.js           # AI prompt templates
│   └── server.js                # Express app entry point
│
├── frontend/interview-prep-ai/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cards/           # Reusable card components
│   │   │   ├── Inputs/          # Form input components
│   │   │   ├── layouts/         # Layout components
│   │   │   └── Loader/          # Loading components
│   │   ├── pages/
│   │   │   ├── Auth/            # Login/Signup pages
│   │   │   ├── Home/            # Dashboard and session creation
│   │   │   └── InterviewPrep/   # Main interview interface
│   │   ├── context/
│   │   │   └── userContext.jsx  # User state management
│   │   ├── utils/
│   │   │   ├── apiPaths.js      # API endpoint definitions
│   │   │   ├── axiosInstance.js # HTTP client configuration
│   │   │   └── helper.js        # Utility functions
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # React entry point
│   ├── package.json
│   └── vite.config.js
│
├── package.json                 # Root package.json
└── README.md
```

## 🎮 Usage Guide

### 1. **Create Your Profile**
- Sign up with email and password
- Upload a profile picture (optional)
- Access your personalized dashboard

### 2. **Start an Interview Session**
- Click "Create New Session" on dashboard
- Fill in details:
  - **Target Role**: e.g., "Frontend Developer", "Data Scientist"
  - **Experience Level**: Years of professional experience
  - **Focus Topics**: Comma-separated skills (e.g., "React, Node.js, MongoDB")
  - **Description**: Optional session notes

### 3. **AI Question Generation**
- The system automatically generates 10 relevant questions
- Each question includes a detailed, beginner-friendly answer
- Code examples are syntax-highlighted for clarity

### 4. **Interactive Learning**
- **Expand/Collapse**: Click questions to view detailed answers
- **Pin Important Questions**: Use the pin button for quick access
- **Learn More**: Get AI-powered concept explanations
- **Load More Questions**: Generate additional questions anytime

### 5. **Session Management**
- View all sessions on your dashboard
- Track progress with question counts and last updated dates
- Delete sessions you no longer need

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/upload-image` - Upload profile image

### Sessions
- `POST /api/sessions/create` - Create new interview session
- `GET /api/sessions/my-sessions` - Get user's sessions
- `GET /api/sessions/:id` - Get specific session with questions
- `DELETE /api/sessions/:id` - Delete session

### Questions
- `POST /api/questions/add` - Add questions to session
- `POST /api/questions/:id/pin` - Pin/unpin question
- `POST /api/questions/:id/note` - Add note to question

### AI Integration
- `POST /api/ai/generate-questions` - Generate interview Q&A
- `POST /api/ai/generate-explanation` - Get concept explanation

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/interview-prep-ai
JWT_SECRET=your-super-secret-jwt-key
GEMINI_API_KEY=your-google-gemini-api-key
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:8000
```

## 🚀 Deployment

### Backend Deployment (Railway/Render)
1. Connect your repository
2. Set environment variables
3. Deploy with build command: `npm install`
4. Start command: `npm start`

### Frontend Deployment (Vercel/Netlify)
1. Build command: `npm run build`
2. Output directory: `dist`
3. Set `VITE_API_URL` to your backend URL

### Database
- MongoDB Atlas for cloud deployment
- Local MongoDB for development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent content generation
- **MongoDB** for flexible data storage
- **React** and **Node.js** communities for excellent documentation
- **Tailwind CSS** for beautiful, responsive design
- **Framer Motion** for smooth animations

## 📞 Support

Having issues? Please check:
1. Node.js version (18+ required)
2. Environment variables are set correctly
3. MongoDB connection is working
4. Gemini API key has proper permissions

For additional help, please open an issue on GitHub.

## 👨‍💻 Developer

**Varun Kumar Singh** 
[varunkumarsingh818@gmail.com](mailto:varunkumarsingh818@gmail.com)

---

<div align="center">
  <p>Made with ❤️ and AI Innovation</p>
</div>

