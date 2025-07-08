
# 📝 Interview Prep AI

A full-stack, AI-powered interview preparation platform designed to help users generate personalized interview questions and answers, take notes, and review topics with AI-generated explanations. Built using **Node.js**, **Express**, **MongoDB**, **React**, and **Tailwind CSS**.

🚀 **Live Demo**: [https://interview-prep-ai-1-femj.onrender.com](https://interview-prep-ai-1-femj.onrender.com)

---

## 🔑 Key Features

### 🔒 Authentication
- Secure user registration and login with **JWT**.
- Role-based session management for tailored experience.

### ✍️ Role-Based Interview Sessions
- Generate personalized technical interview questions based on job role and experience level.

### 🤖 AI-Powered Q&A
- Automatically generate high-quality technical questions and model answers using the **Gemini API**.

### 📚 Accordion Learning UI
- Expandable and collapsible Q&A for an organized and clean study flow.

### 💡 Dynamic AI Explanations
- On-demand AI-generated breakdowns of complex technical concepts.

### 📌 Pinning Important Questions
- Pin your favorite or difficult questions for quick future access.

### 🗂️ MongoDB Storage
- Persistently store user sessions, interview questions, and notes for future review.

### 🎨 Modern UI with Tailwind CSS
- A responsive, clean frontend design with smooth user experience.

---

## 🗂️ Project Structure

```bash
backend/
  server.js
  config/
  controllers/
  models/
  routes/
  utils/
  middleware/

frontend/
  client/
    src/
      components/
      pages/
      context/
      hooks/
      utils/
    public/
    index.html
    package.json
```

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud)

---

### 🔧 Backend Setup

```bash
cd backend
npm install
# Create a .env file and add the following:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# GEMINI_API_KEY=your_gemini_api_key
npm start
```

---

### 💻 Frontend Setup

```bash
cd frontend/client
npm install
# Create a .env file and add:
# REACT_APP_BACKEND_URL=https://your-backend-url
npm run dev
```

---

## 🚀 Deployment on Render

### 🔁 Backend
- Deploy as a **Web Service**.
- Add environment variables in Render settings.
- Build Command:
```bash
npm install
```
- Start Command:
```bash
node server.js
```

### 🌐 Frontend
```bash
npm run build
# Deploy the dist folder as a Static Site on Render
# Set REACT_APP_BACKEND_URL in environment variables to your backend URL
```

---

## 🔐 Environment Variables

### Backend `.env`
```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend `.env`
```bash
REACT_APP_BACKEND_URL=https://your-backend-url
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Developer

**Varun Kumar Singh**
