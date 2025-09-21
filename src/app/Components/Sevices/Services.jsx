"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Services() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Heading */}
      <h2
        className={`${playfair.className} text-lg sm:text-xl md:text-2xl text-gray-800 tracking-wider`}
      >
        — THE SERVICES —
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        Discover our resin art services — from custom décor to jewelry and
        gifting, each piece is crafted with care to bring beauty and uniqueness
        to your space
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="space-y-4 px-4">
          <Image
            src="/service1.webp"
            alt="Resin Creations"
            width={128}
            height={128}
            className="mx-auto w-24 sm:w-28 md:w-32 h-auto"
          />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Resin Creations
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Handcrafted resin pieces designed to add beauty and uniqueness to
            your space.
          </p>
        </div>

        {/* Service 2 */}
        <div className="space-y-4 px-4">
          <Image
            src="/service2.png"
            alt="Custom Designs"
            width={128}
            height={128}
            className="mx-auto w-24 sm:w-28 md:w-32 h-auto"
          />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Custom Designs
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Colors · Shapes · Personalized <br /> Create resin art that reflects
            your personality — perfect for gifts or décor.
          </p>
        </div>

        {/* Service 3 */}
        <div className="space-y-4 px-4 mt-8">
          <Image
            src="/service3.png"
            alt="Premium Quality"
            width={128}
            height={128}
            className="mx-auto w-24 sm:w-28 md:w-32 h-auto"
          />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Premium Quality
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Glossy finish · Durable · Elegant <br /> High-quality resin
            materials with artistic details that make every piece timeless.
          </p>
        </div>
      </div>
    </section>
  );
}