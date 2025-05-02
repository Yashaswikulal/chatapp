import express from "express";
import { login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js"; // or the correct path


const router=express.Router();

router.post("/signup",signup );


router.post("/login",login );


router.post("/logout",logout );

router.put("/update-profile",protectRoute,updateProfile); 

router.post("/check",protectRoute,checkAuth);

export default router;