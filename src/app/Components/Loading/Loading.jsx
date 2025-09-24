"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800); // Longer fade out for smoother transition
    }, 2500); // Slightly longer loading time
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-all duration-700 ${fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gray-50 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-gray-50 animate-pulse-slower"></div>
      </div>
      
      {/* Main logo with enhanced animation */}
      <div className="relative mb-8">
        <div className="absolute -inset-6 rounded-full bg-pink-200 animate-ping-slow"></div>
        <div className="relative z-10">
          <h1
              href="/"
              className="text-2xl font-bold tracking-wide text-gray-900 hover:opacity-70 transition text-center"
            >
              SONALISINGH<br />RESIN ARTS
            </h1>
        </div>
      </div>
      
      {/* Elegant progress indicator */}
      <div className="relative w-40 h-0.5 bg-gray-200/80 rounded-full overflow-hidden mt-6">
        <div className="absolute h-full bg-gray-800 rounded-full animate-progress"></div>
      </div>
      
      {/* Optional subtle text */}
      <p className="mt-6 text-sm text-gray-500 font-light tracking-wider animate-pulse">LOADING</p>
      
      <style jsx global>{`
        @keyframes soft-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes progress {
          0% { width: 0%; left: 0%; }
          50% { width: 60%; left: 20%; }
          100% { width: 100%; left: 0%; }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-soft-bounce {
          animation: soft-bounce 2s ease-in-out infinite;
        }
        .animate-progress {
          animation: progress 1.8s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}