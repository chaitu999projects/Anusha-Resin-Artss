"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const whatsappNumber = 7259685931;

  const [products, setProducts] = useState([]);
  const [jsonImages, setJsonImages] = useState([]);

  // Local static images (all inside /public/images/)
  const localImages = Array.from({ length: 147 }, (_, i) => ({
    id: `local-${i + 1}`,
    src: `/images/img${i + 1}.jpg`, // ✅ fixed path
    alt: `Gallery Image ${i + 1}`,
  }));

  // Fetch database + json
  useEffect(() => {
    // Database products
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));

    // JSON images
    fetch("/images_data.json")
      .then((res) => res.json())
      .then((data) => setJsonImages(data))
      .catch(() => setJsonImages([]));
  }, []);

  // Merge (DB first → JSON → Local)
  const allImages = [
    ...products.map((p, i) => ({
      id: `db-${i}`,
      src: p.imageUrl || p.image, // ✅ supports DB image field
      alt: p.title || p.name || `Product ${i + 1}`,
    })),
    ...jsonImages.map((img, i) => ({
      id: `json-${i}`,
      src: img.src_relative || img.imageUrl || img.image,
      alt: img.title || `Gallery JSON ${i + 1}`,
    })),
    ...localImages,
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 mt-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pink-800 font-serif">
          Soanlisingh Gallery
        </h1>
        <p className="mt-3 text-lg text-pink-600 font-light">
          A collection of our finest moments
        </p>
      </div>

      {/* Photo Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {allImages.map((img) => (
          <Link
            href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in this image: ${img.alt}`}
            key={img.id}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-all duration-300"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
