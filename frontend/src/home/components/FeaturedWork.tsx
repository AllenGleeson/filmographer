import React from 'react';
import Image from 'next/image';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const FeaturedWork: React.FC = () => {
  const featuredWorks: WorkItem[] = [
    {
      id: 1,
      title: 'Wedding Photography',
      category: 'Wedding',
      image: '/api/placeholder/400/300',
      description: 'Capturing the magic of your special day'
    },
    {
      id: 2,
      title: 'Portrait Session',
      category: 'Portrait',
      image: '/api/placeholder/400/300',
      description: 'Professional headshots and portraits'
    },
    {
      id: 3,
      title: 'Event Coverage',
      category: 'Event',
      image: '/api/placeholder/400/300',
      description: 'Documenting your important moments'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects and see the quality of our work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
