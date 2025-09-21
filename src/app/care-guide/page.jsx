// app/care-guide/page.jsx
'use client';

import React from 'react';

const CareGuidePage = () => {
  return (
    <div className="min-h-screen mt-[170px] bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Resin Art Care Guide</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proper care will ensure your resin art pieces remain beautiful for years to come. Follow these guidelines to maintain their shine and durability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* General Care Tips */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">General Care Instructions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Display Location</h3>
                  <p className="text-gray-600">Keep resin art away from direct sunlight to prevent yellowing over time. Avoid extreme temperature changes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Cleaning</h3>
                  <p className="text-gray-600">Dust regularly with a soft, dry cloth. For deeper cleaning, use a damp cloth with mild soap and water.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Avoid Harsh Chemicals</h3>
                  <p className="text-gray-600">Never use abrasive cleaners, alcohol, or ammonia-based products on resin surfaces as they can cause damage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Heat Protection</h3>
                  <p className="text-gray-600">Use coasters or trivets under hot items. While resin is heat resistant, extreme temperatures can cause damage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Product Care */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Product-Specific Care</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Resin Coasters</h3>
                <p className="text-gray-600 mb-2">While our coasters are sealed with food-safe resin, we recommend:</p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Wiping clean immediately after use</li>
                  <li>Using both sides to ensure even wear</li>
                  <li>Storing flat to prevent warping</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Resin Jewelry</h3>
                <p className="text-gray-600 mb-2">To keep your resin jewelry looking its best:</p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Put on after applying cosmetics and perfumes</li>
                  <li>Store in a soft pouch to prevent scratches</li>
                  <li>Remove before swimming or showering</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Resin Art Pieces</h3>
                <p className="text-gray-600 mb-2">For wall art and decorative pieces:</p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Dust regularly with a soft, dry cloth</li>
                  <li>Avoid hanging in direct sunlight</li>
                  <li>Handle with clean hands to prevent oil transfer</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Resin Furniture & Table Tops</h3>
                <p className="text-gray-600 mb-2">For tables and furniture pieces:</p>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Use placemats or coasters under items</li>
                  <li>Clean spills immediately</li>
                  <li>Use felt pads under objects to prevent scratches</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Troubleshooting Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Troubleshooting Common Issues</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Cloudy or Hazy Appearance</h3>
                <p className="text-gray-600">This can occur from moisture exposure. Gently buff with a soft, dry cloth. If persistent, use a small amount of resin polish specifically designed for epoxy surfaces.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Minor Scratches</h3>
                <p className="text-gray-600">Light surface scratches can often be buffed out with a soft cloth and a small amount of toothpaste or specialized resin polish.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Sticky Surface</h3>
                <p className="text-gray-600">If your resin piece feels sticky, it may need more curing time. Leave it in a warm, dry area for 24-48 hours. If problem persists, contact us.</p>
              </div>
            </div>
          </div>

          {/* Warranty & Support */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Warranty & Support</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-3">Our Quality Guarantee</h3>
              <p className="text-blue-700 mb-4">
                All our resin art comes with a 1-year warranty against manufacturing defects. If your piece develops issues under normal use conditions, we'll repair or replace it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="/contact"
                  className="inline-flex justify-center items-center px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
                >
                  Contact Support
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </a>
                
                <a
                  href="https://wa.me/918766580887?text=Hi,%20I%20need%20help%20with%20my%20resin%20art%20care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  WhatsApp Support
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.016a9.77 9.77 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.857 9.857 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.772 11.772 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.82 11.82 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.777 11.777 0 0020.465 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuidePage;