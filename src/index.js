import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/ping", (req, res) => {
    res.status(200).send("Server is running 🚀");
});

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
});