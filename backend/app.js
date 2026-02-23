import express from 'express';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import chatRoute from './routes/chat.route.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});