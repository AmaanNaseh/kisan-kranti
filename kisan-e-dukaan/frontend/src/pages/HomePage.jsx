import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import animalFoodIcon from "../assets/AnimalFoodIcon.png";
import fertilizerIcon from "../assets/FertilizerIcon.png";
import pesticideIcon from "../assets/PesticideIcon.png";
import otherItemsIcon from "../assets/OtherItemsIcon.png";
import soilProductIcon from "../assets/SoilProductIcon.png";

const categories = [
  {
    href: "/Animal Food Items",
    name: "Animal food items",
    imageUrl: animalFoodIcon,
  },
  { href: "/Soil Products", name: "Soil Products", imageUrl: soilProductIcon },
  { href: "/fertilizers", name: "Fertilizers", imageUrl: fertilizerIcon },
  { href: "/pesticides", name: "Pesticides", imageUrl: pesticideIcon },
  { href: "/Other Items", name: "Other Items", imageUrl: otherItemsIcon },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest Farm Freindly items...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
