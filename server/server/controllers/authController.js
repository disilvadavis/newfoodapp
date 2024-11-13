import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (user) => jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ token: generateToken(user) });
  } catch (error) {
    res.status(400).json({ error: 'Signup failed' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) throw new Error();
    res.json({ token: generateToken(user) });
  } catch (error) {
    res.status(400).json({ error: 'Invalid credentials' });
  }
};
