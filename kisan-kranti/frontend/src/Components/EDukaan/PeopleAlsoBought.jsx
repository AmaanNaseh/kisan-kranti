import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProductCard from "./ProductCard";
import axios from "../../lib/axios";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get("/edukaan/products/recommendations");

        // ✅ If backend sends empty, set empty (no toast)
        if (Array.isArray(res.data)) {
          setRecommendations(res.data);
        } else {
          setRecommendations([]);
        }
      } catch (error) {
        // ✅ Only show toast if server/network error (not empty case)
        if (error.response?.status >= 500 || !error.response) {
          toast.error(
            error.response?.data?.message ||
              "An error occurred while fetching recommendations"
          );
        }
        setRecommendations([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (recommendations.length === 0) return null; // ✅ Hide if no products

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-emerald-400">
        People also bought
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PeopleAlsoBought;
