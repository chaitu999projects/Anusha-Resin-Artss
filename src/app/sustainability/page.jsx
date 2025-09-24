
'use client';

import React from 'react';

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen mt-[167px] bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Sustainable Resin Art</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to creating beautiful art while minimizing our environmental impact
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Commitment */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-4">Our Commitment to Sustainability</h2>
            <p className="text-gray-600">
              At Sonalisingh Resin Arts, we believe that beautiful art shouldn't come at the expense of our planet. 
              We're continuously working to reduce our environmental footprint through innovative practices and 
              responsible material sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">We partner with suppliers who share our commitment to environmental responsibility and ethical practices.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-600">We use bio-based resins and recycled materials whenever possible to reduce our environmental impact.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm5-3a2 2 0 11-4 0 2 2 0 014 0zm4 0a2 2 0 11-4 0 2 2 0 014 0zm-8 4a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Waste Reduction</h3>
              <p className="text-gray-600">We minimize waste through efficient production processes and repurpose materials whenever possible.</p>
            </div>
          </div>
        </div>

        {/* Sustainable Practices */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-8 text-center">Our Sustainable Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Bio-Based Resins</h3>
                <p className="text-gray-600">We prioritize resins made from renewable plant-based materials that reduce reliance on petroleum products.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Recycled Materials</h3>
                <p className="text-gray-600">We incorporate recycled glass, metals, and other materials into our designs to give new life to discarded resources.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Energy Efficiency</h3>
                <p className="text-gray-600">Our studio uses energy-efficient lighting and equipment to minimize our carbon footprint during production.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Eco-Conscious Packaging</h3>
                <p className="text-gray-600">We use recycled, biodegradable, and minimal packaging to reduce waste from shipping.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-8 text-center">Our Environmental Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">72%</div>
              <p className="text-gray-700">of materials used are recycled or bio-based</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">350+</div>
              <p className="text-gray-700">kg of waste materials repurposed annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
              <p className="text-gray-700">carbon neutral shipping options available</p>
            </div>
          </div>
        </div>

        {/* Customer Participation */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-serif font-light text-gray-800 mb-6 text-center">How You Can Participate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Proper Care</h3>
              <p className="text-gray-600">Extend the life of your resin art by following our care guidelines, reducing the need for replacement.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Recycling Program</h3>
              <p className="text-gray-600">Return old pieces to us for recycling and receive a discount on your next purchase.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Choose Sustainable Options</h3>
              <p className="text-gray-600">Look for products marked with our eco-friendly badge when shopping.</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Carbon Neutral Shipping</h3>
              <p className="text-gray-600">Select carbon neutral shipping at checkout to offset delivery emissions.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/care-guide"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              View Care Guide
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;