import express from "express";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// simple demo coupon: SAVE10 = 10%
// GET /api/coupons
router.get("/", protect, async (req, res) => {
  res.json(req.user.coupon || null);
});

// POST /api/coupons/validate { code }
router.post("/validate", protect, async (req, res) => {
  const { code } = req.body;
  const normalized = (code || "").trim().toUpperCase();
  if (normalized === "SAVE10") {
    req.user.coupon = { code: "SAVE10", discountPercentage: 10 };
    await req.user.save();
    return res.json(req.user.coupon);
  }
  return res.status(400).json({ message: "Invalid coupon code" });
});

export default router;
