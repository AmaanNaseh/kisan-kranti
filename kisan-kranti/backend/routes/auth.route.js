import express from "express";
import User from "../models/User.js";
import {
  signAccess,
  signRefresh,
  setAuthCookies,
  clearAuthCookies,
} from "../utils/token.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already in use" });

    const user = await User.create({
      name,
      email,
      password,
      role: role || "customer",
    });

    const accessToken = signAccess({ id: user._id });
    const refreshToken = signRefresh({ id: user._id });
    user.refreshToken = refreshToken;
    await user.save();

    setAuthCookies(res, accessToken, refreshToken);
    const safeUser = (({ _id, name, email, role }) => ({
      _id,
      name,
      email,
      role,
    }))(user);
    res.status(201).json(safeUser);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = signAccess({ id: user._id });
    const refreshToken = signRefresh({ id: user._id });
    user.refreshToken = refreshToken;
    await user.save();

    setAuthCookies(res, accessToken, refreshToken);
    const safeUser = (({ _id, name, email, role }) => ({
      _id,
      name,
      email,
      role,
    }))(user);
    res.json(safeUser);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/auth/logout
router.post("/logout", protect, async (req, res) => {
  try {
    req.user.refreshToken = undefined;
    await req.user.save();
    clearAuthCookies(res);
    res.json({ message: "Logged out" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/auth/profile
router.get("/profile", protect, (req, res) => {
  const { _id, name, email, role } = req.user;
  res.json({ _id, name, email, role });
});

// POST /api/auth/refresh-token
router.post("/refresh-token", async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.id);
    if (!user || user.refreshToken !== token)
      return res.status(401).json({ message: "Invalid refresh token" });

    const newAccess = signAccess({ id: user._id });
    const newRefresh = signRefresh({ id: user._id });
    user.refreshToken = newRefresh;
    await user.save();

    setAuthCookies(res, newAccess, newRefresh);
    res.json({ ok: true });
  } catch {
    res.status(401).json({ message: "Refresh failed" });
  }
});

export default router;
