import express from "express";
import { getPosts } from "../controllers/post.controller.js";

const router = express.Router();
router.get("/", getPosts); // 🔥 Your API endpoint is now live at http://localhost:8800/api/posts

export default router;