import express from "express";
import Product from "../models/Product.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// GET /api/cart
router.get("/", protect, async (req, res) => {
  res.json(req.user.cart || []);
});

// POST /api/cart  { productId }
router.post("/", protect, async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = req.user.cart.find(
    (i) => i.product.toString() === productId
  );
  if (existing) existing.quantity += 1;
  else
    req.user.cart.push({
      product: product._id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: 1,
    });

  await req.user.save();
  res.json({ message: "Added to cart" });
});

// PUT /api/cart/:productId { quantity }
router.put("/:productId", protect, async (req, res) => {
  const { quantity } = req.body;
  const idx = req.user.cart.findIndex(
    (i) => i.product.toString() === req.params.productId
  );
  if (idx === -1) return res.status(404).json({ message: "Item not in cart" });

  if (quantity <= 0) {
    req.user.cart.splice(idx, 1);
  } else {
    req.user.cart[idx].quantity = quantity;
  }
  await req.user.save();
  res.json({ message: "Cart updated" });
});

// DELETE /api/cart  { productId }
router.delete("/", protect, async (req, res) => {
  const { productId } = req.body;
  req.user.cart = req.user.cart.filter(
    (i) => i.product.toString() !== productId
  );
  await req.user.save();
  res.json({ message: "Removed" });
});

export default router;
