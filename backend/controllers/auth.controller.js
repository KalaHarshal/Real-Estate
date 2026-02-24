import argon2 from "argon2";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "User registered successfully!",
    });

  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const validPassword = await argon2.verify(
      user.password,
      password
    );

    if (!validPassword) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // 🔥 Generate JWT HERE
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 🔥 Store JWT in httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      maxAge: 24 * 60 * 60 * 1000,
    });

    // 👇 ADD THIS: Separate password from the rest of the user data
    const { password: userPassword, ...userInfo } = user;

    // 👇 UPDATE THIS: Send userInfo instead of just a message
    return res.status(200).json(userInfo);

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error logging in user",
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "User logged out successfully!"
  });

};



// Register → hash → store
// Login → verify → sign JWT → set cookie
// Logout → clear cookie