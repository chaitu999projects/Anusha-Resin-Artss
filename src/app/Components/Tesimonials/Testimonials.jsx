"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch("/api/google-reviews");
      const data = await res.json();
      setReviews(data);
    }
    fetchReviews();
  }, []);

  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
        What Our Customers Say
      </h2>

      {reviews.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-pink-50 border border-pink-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-800 text-lg">
                    {review.author_name}
                  </h3>
                  <span className="text-pink-500 text-sm">
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {review.text}
                </p>
                <p className="text-xs text-gray-400 mt-3 italic">
                  {review.relative_time_description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-400">No reviews available</p>
      )}
    </section>
  );
}
