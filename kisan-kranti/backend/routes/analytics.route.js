import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

const router = express.Router();

// GET /api/edukaan/analytics
router.get("/", protect, adminOnly, async (_req, res) => {
  const [users, products, salesAgg] = await Promise.all([
    User.countDocuments(),
    Product.countDocuments(),
    Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: 1 },
          totalRevenue: { $sum: "$total" },
        },
      },
    ]),
  ]);

  const totals = salesAgg[0] || { totalSales: 0, totalRevenue: 0 };

  // last 7 days daily sales
  const last7 = await Order.aggregate([
    {
      $group: {
        _id: { $dateToString: { date: "$createdAt", format: "%Y-%m-%d" } },
        sales: { $sum: 1 },
        revenue: { $sum: "$total" },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  const dailySalesData = last7.map((d) => ({
    name: d._id,
    sales: d.sales,
    revenue: d.revenue,
  }));

  res.json({
    analyticsData: {
      users,
      products,
      totalSales: totals.totalSales,
      totalRevenue: totals.totalRevenue,
    },
    dailySalesData,
  });
});

export default router;
