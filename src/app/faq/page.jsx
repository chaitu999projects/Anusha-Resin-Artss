// app/faq/page.jsx
'use client';

import React, { useState } from 'react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What types of resin art do you create?",
      answer: "We specialize in a variety of resin art including geode art, river tables, resin jewelry, coasters, wall art, and custom commissioned pieces. Each piece is handmade with attention to detail and quality."
    },
    {
      question: "How long does it take to create a custom resin piece?",
      answer: "The creation time varies depending on the complexity and size of the piece. Generally, it takes between 2-4 weeks from conception to completion. This includes design consultation, creation, curing time, and finishing touches."
    },
    {
      question: "How do I care for my resin art?",
      answer: "Resin art is relatively low maintenance. Simply dust with a soft, dry cloth. Avoid using harsh chemicals or abrasive cleaners. Keep your resin pieces out of direct sunlight for extended periods to prevent yellowing over time."
    },
    {
      question: "Are your products food-safe?",
      answer: "While we use high-quality, non-toxic resins, not all our pieces are certified food-safe. Our coasters and table tops are sealed with food-safe epoxy, but we recommend using placemats or trivets for hot items. Please specify if you need a food-safe product when ordering."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location. We carefully package each piece to ensure it arrives safely. Please contact us for specific shipping quotes to your country."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of delivery for unused items in their original packaging. Custom commissions are non-refundable unless damaged during shipping. If your item arrives damaged, please contact us within 48 hours with photos of the damage."
    },
    {
      question: "Can I request custom colors for my piece?",
      answer: "Absolutely! We encourage custom color requests. During the ordering process, you can specify your color preferences, and we'll work with you to create a piece that matches your vision perfectly."
    },
    {
      question: "How durable is resin art?",
      answer: "High-quality resin art is quite durable and resistant to moisture, yellowing (with UV protection), and mild chemicals. While it's scratch-resistant, we recommend using coasters under hot cups and avoiding sharp objects directly on the surface."
    }
  ];

  return (
    <div className="min-h-screen mt-[170px] bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our resin art products and services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* FAQ Items */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems[index]}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${openItems[index] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 pb-5 pt-0 transition-all duration-300 ease-in-out ${openItems[index] ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions section */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please get in touch with our team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;