"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const categories = [
  { name: "All", video: "/kits.mp4", link:"/all-products" },
  { name: "Tables", video: "/resins.mp4", link:"/tables"},
  { name: "Wall Arts", video: "/pigments.mp4", link:"/wall-arts" },
  { name: "Clocks", video: "/glitters.mp4", link:"/clocks" },
  { name: "Trays Coasters", video: "/accessories.mp4", link:"/trays-coasters" },
];

export default function Categories() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const mouseDownHandler = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };

    const mouseLeaveHandler = () => setIsDragging(false);
    const mouseUpHandler = () => setIsDragging(false);

    const mouseMoveHandler = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDownHandler);
    slider.addEventListener("mouseleave", mouseLeaveHandler);
    slider.addEventListener("mouseup", mouseUpHandler);
    slider.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      slider.removeEventListener("mousedown", mouseDownHandler);
      slider.removeEventListener("mouseleave", mouseLeaveHandler);
      slider.removeEventListener("mouseup", mouseUpHandler);
      slider.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [isDragging, scrollLeft, startX]);

  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-xl font-bold text-gray-800 my-9">
       - SHOP BY CATEGORY -
      </h2>

      {/* Wrapper (scroll always enabled + draggable) */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide cursor-grab"
      >
        <div className="flex space-x-3 px-6 justify-start md:justify-center flex-nowrap">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center w-3/4 sm:w-1/2 md:w-1/2 lg:w-auto"
            >
              <Link href={cat.link}>
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <video
                  src={cat.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 text-base text-center sm:text-lg font-medium text-gray-700">
                {cat.name}
              </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}