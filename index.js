// 🎯 Netflix 2.0 Backend – Developed by Bhavya Soni

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";

// Load environment variables
dotenv.config({
  path: ".env",
});

// Initialize app
const app = express();

// Connect to MongoDB
databaseConnection();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS Configuration – Allow frontend connection
const corsOptions = {
  origin: "http://localhost:3000", // Change this to your frontend URL on deploy
  credentials: true,
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});