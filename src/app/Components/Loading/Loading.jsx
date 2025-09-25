"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 z-50 transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Resin-like rotating drop */}
      <div className="relative w-28 h-28 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-pink-200 to-white animate-spin-slow shadow-lg"></div>
        <div className="absolute inset-3 rounded-full bg-white shadow-inner animate-glow"></div>
      </div>

      {/* Brand shimmer text */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-gray-900 relative">
        <span className="animate-shimmer bg-gradient-to-r from-pink-400 via-gray-900 to-pink-400 bg-[length:200%_100%] text-transparent bg-clip-text">
          SONALISINGHRAO
        </span>
        <br />
        <span className="animate-shimmer bg-gradient-to-r from-gray-900 via-pink-500 to-gray-900 bg-[length:200%_100%] text-transparent bg-clip-text text-xl sm:text-2xl">
          RESIN ARTS
        </span>
      </h1>

      {/* Resin drip effect */}
      <div className="mt-8 w-2 h-10 bg-pink-400 rounded-full animate-drip"></div>

      {/* Small text */}
      <p className="mt-6 text-sm text-gray-600 tracking-[0.3em] animate-soft-blink">
        LOADING
      </p>

      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.4),
              inset 0 0 10px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.7),
              inset 0 0 15px rgba(236, 72, 153, 0.4);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes drip {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 1;
          }
          70% {
            transform: translateY(20px) scaleY(1.3);
            opacity: 0.7;
          }
          100% {
            transform: translateY(40px) scaleY(0.8);
            opacity: 0;
          }
        }
        @keyframes soft-blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .animate-drip {
          animation: drip 1.8s ease-in-out infinite;
        }
        .animate-soft-blink {
          animation: soft-blink 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
