import express from "express";
import Product from "../models/Product.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// GET /api/products
router.get("/", async (_req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json({ products });
});

// GET /api/products/featured
router.get("/featured", async (_req, res) => {
  const featured = await Product.find({ isFeatured: true }).lean();
  if (!featured.length)
    return res.status(404).json({ message: "No featured products found" });
  res.json(featured);
});

// GET /api/products/category/:category
router.get("/category/:category", async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json({ products });
});

// POST /api/products (admin)
router.post("/", protect, adminOnly, async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const product = await Product.create({
    name,
    description,
    price,
    image,
    category,
  });
  res.status(201).json(product);
});

// PATCH /api/products/:id (toggle featured)
router.patch("/:id", protect, adminOnly, async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: "Product not found" });
  p.isFeatured = !p.isFeatured;
  await p.save();
  res.json({ isFeatured: p.isFeatured });
});

// DELETE /api/products/:id (admin)
router.delete("/:id", protect, adminOnly, async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: "Product not found" });
  await p.deleteOne();
  res.json({ message: "Product deleted successfully" });
});

export default router;
