"use client";

import { useEffect, useState } from "react";

export default function CenterTablePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch("/api/products").then((res) => res.json()).catch(() => []),
      fetch("/images_data.json").then((res) => res.json()).catch(() => []),
    ])
      .then(([dbData, jsonData]) => {
        const allData = [...dbData, ...jsonData];
        const centerTables = allData.filter((item) => item.category === "Center Table");
        setItems(centerTables);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-4 max-w-7xl mx-auto mt-[140px]">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">
        - Center Tables -
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500 border-b-4"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
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
