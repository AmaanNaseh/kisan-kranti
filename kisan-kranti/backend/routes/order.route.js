import express from "express";
import { protect } from "../middleware/auth.js";
import Order from "../models/Order.js";

const router = express.Router();

// POST /api/orders/checkout  (uses user's server-side cart)
router.post("/checkout", protect, async (req, res) => {
  const items = req.user.cart.map((i) => ({
    product: i.product,
    name: i.name,
    price: i.price,
    quantity: i.quantity,
  }));
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  let total = subtotal;
  let couponCode = null;

  if (req.user.coupon?.discountPercentage) {
    total = subtotal - subtotal * (req.user.coupon.discountPercentage / 100);
    couponCode = req.user.coupon.code;
  }

  const order = await Order.create({
    user: req.user._id,
    items,
    subtotal,
    total,
    couponCode,
    status: "placed",
  });

  // clear cart + coupon
  req.user.cart = [];
  req.user.coupon = undefined;
  await req.user.save();

  res.status(201).json({ orderId: order._id, total });
});

// GET /api/orders/my
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({
    createdAt: -1,
  });
  res.json(orders);
});

export default router;
