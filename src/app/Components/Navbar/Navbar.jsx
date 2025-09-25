"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "../Whatsapp/Whatsapp";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const navbarRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 100) {
          setShowNavbar(window.scrollY < lastScrollY);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "#", hasDropdown: true },
    { name: "GALLERY", href: "/gallery" },
    { name: "ABOUT US", href: "/about" },
    { name: "RESIN CALCULATOR", href: "/resin-calculator" },
    { name: "CARE GUIDE", href: "/care-guide" },
    { name: "CONTACT", href: "/contact" },
  ];

  const categories = [
    { name: "All Products", href: "/all-products"},
    { name: "Side Table", href: "/side-table" },
    { name: "Center Table", href: "/center-table" },
    { name: "Dining Table", href: "/dining-table" },
    { name: "Conference Table", href: "/conference-table" },
    { name: "Wall Arts", href: "/wall-arts" },
    { name: "Clocks", href: "/clocks" },
    { name: "Trays Coasters", href: "/trays-coasters" },
  ];

  return (
    <>
      <div
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 z-40 transition-transform duration-300 bg-white border-b ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Social Icons */}
        <div className="flex justify-start gap-4 text-gray-500 bg-pink-100 text-sm px-6 py-2">
          <Link
            href="https://www.instagram.com/sonalisinghrao/"
            className="hover:text-white hover:bg-rose-600 p-1  transition-colors rounded-full bg-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.youtube.com/@sonalisinghrao4834"
            className="transition-colors hover:text-white hover:bg-rose-600 rounded-full p-1 bg-white"
            aria-label="YouTube"
          >
            <FaYoutube />
          </Link>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-6 py-4">
          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="hover:opacity-70 transition-opacity duration-200 md:hidden"
          >
            <Menu size={24} />
          </button>

          {/* Brand Title */}
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide text-gray-900 hover:opacity-70 transition text-center"
            >
              SONALISINGH<br />RESIN ARTS
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 font-medium text-gray-900 relative">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="hover:underline underline-offset-4 transition"
                  >
                    {link.name}
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-0.5 w-48 bg-white shadow-lg py-2 z-50">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          href={cat.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-pink-300 uppercase transition"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:underline underline-offset-4 transition"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Sidebar (mobile menu) */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div className="relative bg-white w-80 h-full shadow-lg flex flex-col">
          {/* Header Tabs */}
          <div className="flex justify-between items-center border-b px-5 py-4">
            <div className="flex gap-6 font-medium text-sm">
              <button
                className={`pb-1 transition-colors duration-200 ${
                  activeTab === "menu"
                    ? "border-b-2 border-black"
                    : "hover:text-gray-600"
                }`}
                onClick={() => setActiveTab("menu")}
              >
                MENU
              </button>
              <button
                className={`pb-1 transition-colors duration-200 ${
                  activeTab === "categories"
                    ? "border-b-2 border-black"
                    : "hover:text-gray-600"
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
              <X size={22} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4 text-gray-800 text-base">
              {(activeTab === "menu" ? navLinks : categories).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block hover:underline underline-offset-4 transition-colors uppercase"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}