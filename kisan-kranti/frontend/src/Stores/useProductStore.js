import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  isLoading: false,

  setProducts: (products) => set({ products }),

  createProduct: async (productData) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        isLoading: false,
      }));
      toast.success("Product created successfully.");
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "Failed to create product");
    }
  },

  fetchAllProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/products");
      set({ products: response.data.products || [], isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  },

  fetchProductsByCategory: async (category) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get(
        `/products/category/${category}`
      );
      set({ products: response.data.products || [], isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  },

  deleteProduct: async (productId) => {
    set({ isLoading: true });
    try {
      await axiosInstance.delete(`/products/${productId}`);
      set((prev) => ({
        products: prev.products.filter((p) => p._id !== productId),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  },

  toggleFeaturedProduct: async (productId) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.patch(`/products/${productId}`);
      set((prev) => ({
        products: prev.products.map((p) =>
          p._id === productId
            ? { ...p, isFeatured: response.data.isFeatured }
            : p
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "Failed to update product");
    }
  },

  fetchFeaturedProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/products/featured");

      // ✅ If backend returns empty, just set empty — no toast
      const products = Array.isArray(response.data) ? response.data : [];
      set({ products, isLoading: false });
    } catch (error) {
      set({ isLoading: false });

      // ✅ Only toast if it's a server/network failure, not 404 or empty
      if (!error.response || error.response.status >= 500) {
        toast.error(
          error.response?.data?.message || "Failed to fetch featured products"
        );
      }
    }
  },
}));
