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
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      {reviews.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">
                    {review.author_name}
                  </h3>
                  <span className="text-yellow-500">
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.text}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  {review.relative_time_description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No reviews available</p>
      )}
    </section>
  );
}
