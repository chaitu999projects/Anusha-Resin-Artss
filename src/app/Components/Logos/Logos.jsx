"use client"
import React, { useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const Logos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/join-newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-pink-50 p-6 flex flex-col md:flex-row items-center justify-between gap-4 relative mt-5 sm:mt-2 md:mt-5">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h2
          className={`${dancing.className} text-2xl md:text-3xl text-gray-800`}
        >
          Join our aesthetic world
        </h2>
      </div>
      <div>
        <p className="text-lg md:text-xl text-gray-700 font-semibold italic tracking-wide leading-relaxed">
          updates & access to our <br /> growing freebies library
        </p>
      </div>
      
      {/* Right Section (Form) */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full md:w-40 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 font-medium"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full md:w-56 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 font-medium"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition font-semibold disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "YES PLEASE!"}
        </button>
      </form>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="absolute bottom-2 right-2 bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
          Thank you for joining!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="absolute bottom-2 right-2 bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
};

export default Logos;