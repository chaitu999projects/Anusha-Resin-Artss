"use client";

import { useEffect, useState } from "react";

export default function AllWorksPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Side Table",
    "Center Table",
    "Dining Table",
    "Conference Table",
    "Wall Art",
    "Clocks",
    "Trays Coasters",
  ];

  useEffect(() => {
    setLoading(true);

    // Fetch both DB and JSON simultaneously
    Promise.all([
      fetch("/api/products").then((res) => res.json()).catch(() => []),
      fetch("/images_data.json").then((res) => res.json()).catch(() => []),
    ])
      .then(([dbData, jsonData]) => {
        // Merge both arrays
        const allProducts = [...dbData, ...jsonData];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    setLoading(true);

    setTimeout(() => {
      if (category === "All") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((item) => item.category === category)
        );
      }
      setLoading(false);
    }, 300);
  };

  return (
    <section className="p-4 max-w-7xl mx-auto mt-[130px]">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        All Products
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 font-medium transition-colors duration-300
              ${
                activeCategory === cat
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500 border-b-4"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((item) => (
            <div
              key={item._id || item.id} // MongoDB _id or JSON id
              className="overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.image || item.src_relative} // DB image or JSON image
                alt={item.title || item.alt}
                className="w-full h-96 object-cover"
              />
              {/* <p className="text-center text-sm font-medium text-gray-700 mt-2 mb-2 px-2">
                {item.title}
              </p> */}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
