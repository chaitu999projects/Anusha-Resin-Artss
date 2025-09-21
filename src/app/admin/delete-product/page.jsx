"use client";
import DeleteProductButton from "@/app/Components/DeleteProductButton.jsx/DeleteProductButton";
import { useEffect, useState } from "react";
// import DeleteProductButton from "@/app/components/DeleteProductButton/DeleteProductButton";

export default function DeleteProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      alert("Error fetching products: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Remove deleted product from state
  const handleDeleted = (id) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="mt-[170px] max-w-4xl mx-auto px-4">
      <h1 className="text-2xl font-medium mb-6">Delete Products (Admin)</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">
                  <DeleteProductButton
                    productId={product._id}
                    onDeleted={handleDeleted}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
