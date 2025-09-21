"use client";

import { useEffect, useState } from "react";

export default function NewArrivalsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen relative top-[180px] bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-light text-gray-900 mb-8 text-center">
            New Arrivals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg animate-pulse"
              >
                <div className="bg-gray-200 h-64 w-full mb-4 rounded"></div>
                <div className="bg-gray-200 h-6 w-3/4 mb-2 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
                <div className="bg-gray-200 h-5 w-1/4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative top-[150px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-light text-gray-900">New Products</h1>
          <p className="mt-2 text-sm text-gray-600">
            {products.length} products available
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available yet.</p>
          </div>
        ) : (
          <>
            {/* Top Grid - First 6 Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.slice(0, 6).map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-4 rounded-lg group hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="overflow-hidden rounded mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-lg font-normal text-gray-900 mb-1">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-gray-800 font-medium">INR{product.price}</p>
                </div>
              ))}
            </div>

            {/* Medium 2 + Small 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {products.slice(6, 8).map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-6 rounded-lg group hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="overflow-hidden rounded mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-xl font-medium text-gray-900 mb-1">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-gray-800 font-semibold">${product.price}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6">
              {products[8] && (
                <div
                  key={products[8]._id}
                  className="bg-white p-6 rounded-lg group hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="overflow-hidden rounded mb-4">
                    <img
                      src={products[8].image}
                      alt={products[8].title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 mb-1">
                    {products[8].title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {products[8].category}
                  </p>
                  <p className="text-gray-800 font-semibold">
                    ${products[8].price}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
