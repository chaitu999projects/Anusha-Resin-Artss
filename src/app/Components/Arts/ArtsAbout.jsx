"use client";
import Image from "next/image";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import Link from "next/link";

// Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export default function ArtsAbout() {
  return (
    <section className="flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-5 text-center md:text-left">
          <h1
            className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900`}
          >
            HELLO GORGEOUS
          </h1>
          <h2
            className={`${dancing.className} text-lg sm:text-xl md:text-2xl text-gray-700`}
          >
            Stunning Resin Creations & Endless Possibilities
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            <span className="font-semibold">Features you'll love</span> from our most popular
            resin collections.
            <br />
            Timeless pieces of beauty designed to elevate your space. Add elegance to your
            home, office, or personal style with handcrafted resin décor, jewelry, and keepsakes.
          </p>

          <Link href='/all-products' className="mt-4 px-6 py-3 bg-black text-white text-sm tracking-wide rounded-md hover:bg-gray-800 transition-all duration-500">
            SEE MORE ARTS ♡
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-72 sm:h-80 md:h-[500px]">
          <Image
            src="/images/img18.jpg"
            alt="Resin Art"
            fill
            className="object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
