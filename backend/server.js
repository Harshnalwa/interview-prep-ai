require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes')
const sessionRoutes = require('./routes/sessionRoutes')
const questionRoutes = require('./routes/questionRoutes');
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController");

const app = express();

const allowedOrigins = [
  "https://interview-prep-ai-1-femj.onrender.com",
  "https://interview-preparation-ai-1.onrender.com",
  "https://interview-prep-7vj8m0kx1-varun-kumar-singhs-projects-3f9d06df.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  process.env.FRONTEND_URL || "https://interview-preparation-ai.vercel.app"
];

// Middleware to handle CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      
      // Allow all localhost origins for development
      if (origin.startsWith('http://localhost:')) {
        return callback(null, true);
      }
      
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB()

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/questions', questionRoutes);

app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve static files from React build
// app.use(express.static(path.join(__dirname, "../frontend/interview-prep-ai/dist")));

// Catch all handler: send back React's index.html file for any non-API routes
// app.get("*", (req, res) => {
//   if (!req.path.startsWith("/api") && !req.path.startsWith("/uploads")) {
//     res.sendFile(path.join(__dirname, "../frontend/interview-prep-ai/dist/index.html"));
//   }
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
