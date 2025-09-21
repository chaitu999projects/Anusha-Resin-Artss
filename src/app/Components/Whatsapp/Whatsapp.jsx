"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "918019716330"; // your number with country code
  const message = "Hello! I want to chat with you."; // optional
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
     <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl hover:scale-110 group"
      >
        <FaWhatsapp className="text-2xl" />
        {/* Midnight Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>
      </a>
    </div>
  );
}
