import express from 'express';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import chatRoute from './routes/chat.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();
const PORT = 8800;

// 1. 🔥 ADD THIS RIGHT HERE (Before your routes and other middleware)
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend Vite URL
    credentials: true,               // Allow cookies to be sent
  })
);

// 2. Body and Cookie parsers
app.use(express.json());
app.use(cookieParser());

// 3. Your Routes
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});