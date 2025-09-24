
'use client';

import React, { useState } from 'react';

const TutorialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: 'How to do a topical with resin',
      description: 'In this video , i give you all the tips and tricks that are required to top coat your resin pieces . If you have any doubts leave a comment , i shall reply ..',
      category: 'beginner',
      duration: '11 min',
      image: "/images/img13.jpg",
      link: 'https://youtu.be/u0j18DVAI6k?si=flmmZ9yFUEDfG9s4'
    },
    {
      id: 2,
      title: 'How to make 3D flowers in resin ?',
      description: 'Step-by-step guide to creating beautiful 3D flowers with resin.',
      category: 'intermediate',
      duration: '5 min',
      image: '/images/img40.jpg',
      link: 'https://youtu.be/KRGj4VU7Q6o?si=ky9v4FW0ScbH_s93'
    },
    {
      id: 3,
      title: 'Sonali Singh Rao | Indian Resin Artist | Resin Art India',
      description: 'Advanced techniques for creating stunning geode designs with resin and crystals.',
      category: 'advanced',
      duration: '2 min',
      image: '/images/img57.jpg',
      link: 'https://youtu.be/A91MfR44aUQ?si=J-ogQHB1Pay3EmfD'
    },
    {
      id: 4,
      title: 'Resin Coaster Making for Beginners',
      description: 'Create your own beautiful resin coasters with this easy-to-follow tutorial.',
      category: 'beginner',
      duration: '18 min',
      image: 'https://i.pinimg.com/1200x/c9/22/63/c9226398037ad02b0f57a6e04e7e243b.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'RESIN ART INDIA🇮🇳 Pouring techniques coasters with resin',
      description: 'Learn how to use alcohol inks to create vibrant, colorful effects in your resin art.',
      category: 'intermediate',
      duration: '15 min',
      image: 'https://i.pinimg.com/736x/33/84/7e/33847eb8fce57b10531cf2d3c7908db4.jpg',
      link: 'https://youtu.be/9GmhiW3lIz0?si=X9-uJoueR90SaQCn'
    },
    {
      id: 6,
      title: 'Creating 3D Resin Effects',
      description: 'Advanced techniques for creating dimensional effects and layers in resin art.',
      category: 'advanced',
      duration: '35 min',
      image: 'https://i.pinimg.com/736x/70/ed/1f/70ed1f8032418201016b1bf8226300a3.jpg',
      link: 'https://youtu.be/mI68v1reIC4?si=91Om1xD7gBK3y68_'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredTutorials = activeCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

  return (
    <div className="min-h-screen mt-[167px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-800 mb-4">Resin Art Tutorials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn the art of resin with our step-by-step tutorials. From beginner basics to advanced techniques.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 text-sm font-medium rounded-md ${
                  activeCategory === category.id
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                } ${category.id === 'all' ? 'rounded-l-md' : ''} ${
                  category.id === 'advanced' ? 'rounded-r-md' : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map(tutorial => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-1">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className={`text-xs px-2 py-1 rounded text-white ${
                    tutorial.category === 'beginner' ? 'bg-green-600' :
                    tutorial.category === 'intermediate' ? 'bg-blue-600' :
                    'bg-purple-600'
                  }`}>
                    {tutorial.category.charAt(0).toUpperCase() + tutorial.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                <a
                  href={tutorial.link}
                  className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Watch Tutorial
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when we release new tutorials and resin art techniques.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
            />
            <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;