"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import WhatsAppButton from "../Whatsapp/Whatsapp";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

<WhatsAppButton />

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Only show/hide navbar when scroll exceeds a certain threshold
        if (window.scrollY > 100) {
          if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
          } else {
            // Scrolling up
            setShowNavbar(true);
          }
        } else {
          // Always show navbar at top of page
          setShowNavbar(true);
        }
        
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div 
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 z-40 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Social Icons Row */}
        <div className="bg-[#faf0ef] flex justify-between items-center gap-4 text-gray-700 text-lg p-2">
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:-translate-y-1 transition-all duration-300 text-[10px] p-2 rounded-full hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 transition-all duration-300 text-[10px] p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white"
            >
              <FaTwitter />
            </a>
            <Link
              href="https://www.instagram.com/arts_of_anusha/"
              className="hover:-translate-y-1 transition-all duration-300 text-[10px] p-2 rounded-full hover:bg-[#E4405F] hover:text-white"
            >
              <FaInstagram />
            </Link>
            <a
              href="#"
              className="hover:-translate-y-1 transition-all duration-300 text-[10px] p-2 rounded-full hover:bg-[#BD081C] hover:text-white"
            >
              <FaPinterestP />
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 transition-all duration-300 text-[10px] p-2 rounded-full hover:bg-[#CD201F] hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
          {/* Left - Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <Menu size={28} />
          </button>

          {/* Center - Logo */}
          <Link
            href="/"
            className="hover:scale-105 transition-transform duration-300 animate-pulse"
          >
            <Image src='/anusha-logo.png' alt="Luxury Deco" width={150} height={60} className="w-32 h-auto"/>
          </Link>
          
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div className="relative bg-white w-80 h-full shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b px-4 py-3">
            <div className="flex gap-8 font-semibold text-sm">
              <button
                className={`pb-1 transition-colors duration-200 ${
                  activeTab === "menu"
                    ? "border-b-2 border-black"
                    : "hover:text-[#b28b67]"
                }`}
                onClick={() => setActiveTab("menu")}
              >
                MENU
              </button>
              <button
                className={`pb-1 transition-colors duration-200 ${
                  activeTab === "categories"
                    ? "border-b-2 border-black"
                    : "hover:text-[#b28b67]"
                }`}
                onClick={() => setActiveTab("categories")}
              >
                CATEGORIES
              </button>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="hover:opacity-70 transition-opacity duration-200"
            >
              <X size={26} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {activeTab === "menu" ? (
              <ul className="space-y-4 text-gray-800 font-medium">
                <li>
                  <Link
                    href="/new-arrivals"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    ALL PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offers"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    EXCITING OFFERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resin-calculator"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    RESIN CALCULATOR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/care-guide"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    CARE GUIDE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="space-y-4 text-gray-800 font-medium">
                <li>
                  <Link
                    href="/resin-art"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Resin Art & Craft
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gift-hampers"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Gift Hampers & Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/party"
                    className="block hover:text-[#b28b67] transition-colors duration-200 py-1"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Party & Decoration Products
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
