'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Wedding Collection',
      category: 'Wedding',
      image: '/api/placeholder/600/400',
      description: 'Beautiful wedding moments captured with love and care'
    },
    {
      id: 2,
      title: 'Portrait Session',
      category: 'Portrait',
      image: '/api/placeholder/600/400',
      description: 'Professional headshots and personal portraits'
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'Event',
      image: '/api/placeholder/600/400',
      description: 'Corporate events and business gatherings'
    },
    {
      id: 4,
      title: 'Family Photos',
      category: 'Family',
      image: '/api/placeholder/600/400',
      description: 'Family moments and special occasions'
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'Commercial',
      image: '/api/placeholder/600/400',
      description: 'Commercial and product photography'
    },
    {
      id: 6,
      title: 'Engagement Session',
      category: 'Wedding',
      image: '/api/placeholder/600/400',
      description: 'Romantic engagement photo sessions'
    }
  ];

  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Family', 'Commercial'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of work across different photography styles and events
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-12">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm mb-2">{item.description}</p>
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
