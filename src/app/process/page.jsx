// app/processes/page.jsx
'use client';

import React, { useState } from 'react';

const ProcessesPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Design & Planning",
      description: "Every piece begins with careful planning. We sketch designs, select color palettes, and plan the composition to ensure the final result matches our vision.",
      details: [
        "Client consultation for custom pieces",
        "Material selection and color matching",
        "Technical planning for complex structures",
        "Creating mockups and prototypes when needed"
      ],
      image: "https://i.pinimg.com/736x/a9/da/d8/a9dad8ade60e45bbfb7eeeeabff0ca7c.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      title: "Material Preparation",
      description: "We carefully measure and prepare all materials, ensuring the highest quality resins, pigments, and additives are used in precise proportions.",
      details: [
        "Precise measurement of resin components",
        "Mixing of custom color pigments",
        "Preparation of molds and surfaces",
        "Quality check of all materials"
      ],
      image: "https://i.pinimg.com/736x/e9/24/fa/e924fa2b36d57198fdd320cdbe1e3967.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    },
    {
      title: "Resin Mixing",
      description: "Our artisans mix the resin with precision, ensuring proper ratios and minimizing bubbles through specialized techniques.",
      details: [
        "Exact 1:1 or 2:1 ratio mixing (depending on resin type)",
        "Slow, deliberate stirring to minimize bubbles",
        "Gradual addition of pigments and additives",
        "Temperature and humidity control during mixing"
      ],
      image: "https://i.pinimg.com/736x/9d/fa/57/9dfa57411976e61801c076367098c1f9.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      title: "Pouring & Layering",
      description: "The resin is carefully poured and manipulated to create the desired effects, with attention to timing between layers for complex pieces.",
      details: [
        "Strategic pouring techniques for different effects",
        "Timed layering for multidimensional pieces",
        "Use of tools to create specific patterns",
        "Bubble removal with heat guns or torches"
      ],
      image: "https://i.pinimg.com/736x/c3/cc/6f/c3cc6f125177713894608df8bf450859.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    },
    {
      title: "Curing Process",
      description: "Pieces are left to cure in a controlled environment, ensuring proper hardening and clarity over the required timeframe.",
      details: [
        "24-72 hour curing time depending on piece size",
        "Dust-free environment maintenance",
        "Temperature and humidity control",
        "Regular monitoring during curing process"
      ],
      image: "https://i.pinimg.com/736x/8c/ea/d2/8cead2dc4d4d82a2ec03fb387667b0e6.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Finishing & Quality Check",
      description: "Each piece is carefully demolded, polished, and inspected to ensure it meets our high standards of quality and craftsmanship.",
      details: [
        "Careful demolding to prevent damage",
        "Sanding and polishing to perfect finish",
        "Final inspection for clarity and quality",
        "Packaging preparation for shipment"
      ],
      image: "https://i.pinimg.com/1200x/01/35/67/013567f03caf56a0cb1fd7290a4fb792.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen mt-[160px] bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Our Process</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the meticulous craftsmanship behind each piece of resin art, from concept to completion
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Process Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {steps.map((step, index) => (
                <div key={index} className={`flex justify-between mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Step Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div 
                      className="cursor-pointer"
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        activeStep === index ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border border-gray-300'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className={`text-xl font-medium mb-2 ${activeStep === index ? 'text-gray-800' : 'text-gray-700'}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Image */}
                  <div className="w-5/12">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Process Steps */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div 
                  className="flex items-start cursor-pointer"
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === index ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeStep === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                
                {activeStep === index && (
                  <div className="mt-4 pl-14">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed View for Desktop */}
          <div className="hidden md:block mt-12 bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={steps[activeStep]?.image} 
                    alt={steps[activeStep]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">
                  {steps[activeStep]?.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {steps[activeStep]?.description}
                </p>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Process Details:</h4>
                <ul className="space-y-2">
                  {steps[activeStep]?.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Craftsmanship Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-600">
              Every piece undergoes rigorous quality checks to ensure it meets our high standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Each piece is inspected at multiple stages to ensure perfection.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Handcrafted Excellence</h3>
              <p className="text-gray-600">Every piece is handmade with attention to detail and craftsmanship.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Continuous Innovation</h3>
              <p className="text-gray-600">We constantly experiment with new techniques and materials.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-gray-800 mb-6">Ready to Create Something Unique?</h3>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Start a Custom Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessesPage;