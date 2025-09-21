"use client";
import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <div className="min-w-full h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </div>

      {/* Content (static, no animation) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 md:mb-6 tracking-wide">
          Explore the World of <span className="font-normal">Resin Arts</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8 md:mb-10 font-extralight tracking-wide leading-relaxed">
          Choose stunning resin art pieces and bring your imagination to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href='/new-arrivals' className=" bg-white text-black font-light py-3 px-8 rounded-sm text-base tracking-wide transition-all duration-300 hover:bg-gray-100">
            New Products
          </Link>
          <Link href='/about' className="bg-transparent border border-white text-white font-light py-3 px-8 rounded-sm text-base tracking-wide transition-all duration-300 hover:bg-white/10">
            Learn More
          </Link>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-pulse">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
