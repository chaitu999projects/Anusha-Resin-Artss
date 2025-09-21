"use client";
import { useState } from "react";

export default function DeleteProductButton({ productId, onDeleted }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    try {
      // RESTful route: /api/products/:id
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Product deleted successfully");
        if (onDeleted) onDeleted(productId); // Notify parent
      } else {
        let data;
        try {
          data = await res.json();
        } catch {
          data = { message: "Something went wrong" };
        }
        alert(data.message);
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-500 disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}