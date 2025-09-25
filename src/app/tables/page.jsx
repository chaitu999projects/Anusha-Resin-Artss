"use client";

import { useEffect, useState } from "react";

export default function TablesPage() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define table-related categories
  const tableCategories = ["Side Table", "Center Table", "Dining Table", "Conference Table"];

  useEffect(() => {
    setLoading(true);

    // Fetch both database and JSON data
    Promise.all([
      fetch("/api/products").then((res) => res.json()).catch(() => []),
      fetch("/images_data.json").then((res) => res.json()).catch(() => []),
    ])
      .then(([dbData, jsonData]) => {
        const allData = [...dbData, ...jsonData];

        // Filter only table-related categories
        const tableData = allData.filter((item) =>
          tableCategories.includes(item.category)
        );

        setTables(tableData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-4 max-w-7xl mx-auto mt-[140px]">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">
        - Tables -
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500 border-b-4"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tables.map((item) => (
            <div
              key={item._id || item.id}
              className="overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.image || item.src_relative}
                alt={item.title || item.alt}
                className="w-full h-96 object-cover"
              />
              <p className="text-center text-sm font-medium text-gray-700 mt-2 mb-2 px-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
