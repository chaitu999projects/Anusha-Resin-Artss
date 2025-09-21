
'use client';

import React, { useState } from 'react';

const ResinCalculatorPage = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    shape: 'rectangle'
  });
  
  const [resinAmount, setResinAmount] = useState(null);
  const [ratioA, setRatioA] = useState(1);
  const [ratioB, setRatioB] = useState(1);

  const calculateResin = () => {
    const { length, width, height, shape } = dimensions;
    
    if (!length || !width || !height) {
      alert('Please enter all dimensions');
      return;
    }

    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);

    let volume = 0;

    if (shape === 'rectangle') {
      volume = l * w * h;
    } else if (shape === 'circle') {
      // For circle, length is diameter, width is unused
      const radius = l / 2;
      volume = Math.PI * Math.pow(radius, 2) * h;
    }

    // Convert volume from cm³ to liters (1 liter = 1000 cm³)
    const liters = volume / 1000;
    
    // Calculate resin amounts based on mixing ratio
    const totalParts = ratioA + ratioB;
    const partA = (liters * ratioA / totalParts).toFixed(2);
    const partB = (liters * ratioB / totalParts).toFixed(2);
    
    setResinAmount({
      total: liters.toFixed(2),
      partA,
      partB
    });
  };

  const resetCalculator = () => {
    setDimensions({
      length: '',
      width: '',
      height: '',
      shape: 'rectangle'
    });
    setResinAmount(null);
    setRatioA(1);
    setRatioB(1);
  };

  return (
    <div className="min-h-screen mt-[167px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-light text-gray-800 mb-2">Resin Calculator</h1>
          <p className="text-gray-600">Calculate the amount of resin needed for your project</p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Shape Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Shape</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setDimensions({...dimensions, shape: 'rectangle'})}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  dimensions.shape === 'rectangle' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rectangle
              </button>
              <button
                onClick={() => setDimensions({...dimensions, shape: 'circle'})}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  dimensions.shape === 'circle' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Circle
              </button>
            </div>
          </div>

          {/* Dimensions Inputs */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {dimensions.shape === 'rectangle' ? 'Length (cm)' : 'Diameter (cm)'}
              </label>
              <input
                type="number"
                value={dimensions.length}
                onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder={dimensions.shape === 'rectangle' ? 'Length' : 'Diameter'}
                min="0"
                step="0.1"
              />
            </div>

            {dimensions.shape === 'rectangle' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                <input
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                  placeholder="Width"
                  min="0"
                  step="0.1"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height/Depth (cm)</label>
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                placeholder="Height"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          {/* Mixing Ratio */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Mixing Ratio (A:B)</label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={ratioA}
                onChange={(e) => setRatioA(parseInt(e.target.value) || 1)}
                className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                min="1"
              />
              <span className="text-gray-600">:</span>
              <input
                type="number"
                value={ratioB}
                onChange={(e) => setRatioB(parseInt(e.target.value) || 1)}
                className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
                min="1"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={calculateResin}
              className="flex-1 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
            >
              Calculate
            </button>
            <button
              onClick={resetCalculator}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition"
            >
              Reset
            </button>
          </div>

          {/* Results */}
          {resinAmount && (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Results</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Total resin needed: <span className="font-medium">{resinAmount.total} liters</span></p>
                <p className="text-gray-700">Part A: <span className="font-medium">{resinAmount.partA} liters</span></p>
                <p className="text-gray-700">Part B: <span className="font-medium">{resinAmount.partB} liters</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Helpful Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Always mix a little extra resin to account for spills and miscalculations (add 10-15%)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Measure dimensions in centimeters for accurate results</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>Check your resin's specific mixing ratio (common ratios are 1:1, 2:1, or 3:1)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResinCalculatorPage;