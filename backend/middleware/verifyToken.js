import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // 1. Grab the token from the cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  // 2. Verify the token using your secret key
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    }

    // 3. Attach the decrypted user ID to the request object
    req.userId = payload.userId;
    
    // 4. Move to the next function (the actual controller)
    next();
  });
};