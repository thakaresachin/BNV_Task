import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ✅ CORS (local + production)
app.use(
  cors({
    origin: [
      "http://localhost:5173",              // local frontend
      "https://bnv-task-frontend.netlify.app" // 🔁 replace with YOUR frontend URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Body parser
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling (ALWAYS last)
app.use(errorMiddleware);

// DB connect
connectDB();

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
