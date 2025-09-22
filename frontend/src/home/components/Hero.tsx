import React from 'react';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capturing Life's
            <span className="block text-blue-400">Beautiful Moments</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Professional photography and videography services that tell your story with creativity and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
