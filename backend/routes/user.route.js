import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { 
  getUsers, 
  getUser, 
  updateUser, 
  deleteUser 
} from "../controllers/user.controller.js";

const router = express.Router();

// 🔒 ALL routes here should be protected by verifyToken
// The middleware goes right in the middle: router.method(path, middleware, controller)

router.get("/", verifyToken, getUsers);           // Get all users
router.get("/:id", verifyToken, getUser);         // Get a single user by ID
router.put("/:id", verifyToken, updateUser);      // Update user profile
router.delete("/:id", verifyToken, deleteUser);   // Delete user account

export default router;