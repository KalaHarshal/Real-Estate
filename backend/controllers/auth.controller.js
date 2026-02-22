import argon2 from 'argon2';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);
    res.status(201).json({ message: 'User registered successfully!', hashedPassword });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const login = (req, res) => {
  res.send('User logged in successfully!');
};      

export const logout = (req, res) => {
  res.send('User logged out successfully!');
};

export default {
  register,
  login,
  logout
};