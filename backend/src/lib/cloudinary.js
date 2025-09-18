import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

// Load environment variables
config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Simple verification print
console.log("Cloudinary configured with:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "" + process.env.CLOUDINARY_CLOUD_NAME.slice(-4) : "NOT SET",
  api_key: process.env.CLOUDINARY_API_KEY ? "" + process.env.CLOUDINARY_API_KEY.slice(-4) : "NOT SET",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "" + process.env.CLOUDINARY_API_SECRET.slice(-4) : "NOT SET",
});

export default cloudinary;