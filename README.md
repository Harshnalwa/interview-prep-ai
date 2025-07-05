
# � Interview Prep AI

<div align="center">
  
  ![Interview Prep AI](https://img.shields.io/badge/Interview%20Prep-AI%20Powered-blue?style=for-the-badge&logo=openai)
  ![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
  ![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

  **An intelligent, AI-powered interview preparation platform that helps you ace your next technical interview**

  🌐 **[Live Demo](https://interview-preparation-ai-navy.vercel.app/)** | 📚 **[Documentation](#getting-started)** | 🐛 **[Report Bug](https://github.com/varunkm11/Interview-Preparation-AI/issues)**

</div>

---

## 🎯 About The Project

Interview Prep AI is a comprehensive full-stack application that revolutionizes the way you prepare for technical interviews. Leveraging the power of Google's Gemini AI, it generates personalized interview questions, provides detailed explanations, and creates an interactive learning environment tailored to your specific role and experience level.

### Built With

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### � **Secure Authentication**
- JWT-based user authentication
- Role-based access control
- Secure session management
- Profile customization with photo upload

### 🎯 **Smart Question Generation**
- AI-powered questions based on job role
- Experience level customization
- Technical focus areas selection
- Real-time question generation

</td>
<td width="50%">

### 🤖 **AI-Powered Insights**
- Google Gemini AI integration
- Detailed answer explanations
- Concept breakdowns
- Interactive Q&A sessions

### � **Persistent Storage**
- MongoDB database integration
- Session history tracking
- Bookmarked questions
- Progress monitoring

</td>
</tr>
</table>

### 🌟 **Additional Features**
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- ⚡ **Fast Performance** - Optimized for speed and efficiency
- 🔄 **Real-time Updates** - Dynamic content loading
- 📊 **Analytics Dashboard** - Track your preparation progress

---

## 🏗️ Project Architecture

```
📦 Interview-Preparation-AI
├── 📁 api/                     # Vercel API routes
│   └── index.js               # Main API handler
├── 📁 backend/                # Server-side application
│   ├── server.js              # Express server
│   ├── 📁 config/             # Database configuration
│   ├── 📁 controllers/        # Route controllers
│   ├── 📁 models/             # MongoDB schemas
│   ├── 📁 routes/             # API routes
│   ├── 📁 middlewares/        # Custom middleware
│   └── 📁 utils/              # Utility functions
├── 📁 frontend/               # Client-side application
│   └── 📁 interview-prep-ai/  # React application
│       ├── 📁 src/
│       │   ├── 📁 components/  # Reusable components
│       │   ├── 📁 pages/       # Page components
│       │   ├── 📁 context/     # React context
│       │   └── 📁 utils/       # Frontend utilities
│       └── 📁 public/          # Static assets
├── vercel.json                # Vercel configuration
└── package.json               # Root dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js) **Node.js** (v18 or higher)
- ![npm](https://img.shields.io/badge/npm-latest-red?logo=npm) **npm** or **yarn**
- ![MongoDB](https://img.shields.io/badge/MongoDB-latest-green?logo=mongodb) **MongoDB** (Atlas or local)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/varunkm11/Interview-Preparation-AI.git
   cd Interview-Preparation-AI
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create `.env` files in both backend and frontend directories:

   **Backend `.env`:**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_API_KEY=your_google_gemini_api_key
   NODE_ENV=development
   ```

   **Frontend `.env`:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application!

---

## 🌐 Deployment

This project is configured for seamless deployment on **Vercel**.

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   vercel login
   vercel --prod
   ```

2. **Set Environment Variables in Vercel Dashboard**
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - JWT secret key
   - `GOOGLE_API_KEY` - Google Gemini API key
   - `NODE_ENV` - Set to `production`

3. **Your app will be live!** 🎉

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run install-all` | Install all dependencies |
| `npm run build` | Build for production |
| `npm run dev` | Start development servers |
| `npm start` | Start production server |

---

## 🔑 Environment Variables

<details>
<summary><strong>Backend Environment Variables</strong></summary>

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 5000) | ❌ |
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | JWT signing secret | ✅ |
| `GOOGLE_API_KEY` | Google Gemini API key | ✅ |
| `NODE_ENV` | Environment (development/production) | ❌ |

</details>

<details>cev
<summary><strong>Frontend Environment Variables</strong></summary>

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL | ✅ |

</details>

---

## � Screenshots

<div align="center">

### 🏠 Landing Page
*Clean, modern interface with clear call-to-action*

### 🔐 Authentication
*Secure login and registration with user-friendly design*

### 📊 Dashboard
*Personalized dashboard showing your interview preparation progress*

### 🤖 AI Interview Session
*Interactive AI-powered interview questions with real-time explanations*

</div>

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

<div align="center">

**Varun Kumar Singh**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/varunkm11)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/varun-kumar-singh-267951269/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:varunkumarsingh818@gmail.com)

</div>

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powering the intelligent question generation
- [Vercel](https://vercel.com/) for seamless deployment experience
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for reliable database hosting
- [Tailwind CSS](https://tailwindcss.com/) for beautiful, responsive styling
- [React](https://reactjs.org/) for the amazing frontend framework

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and ☕ by Varun Kumar Singh

</div>
