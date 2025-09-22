import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Filmographer</h3>
            <p className="text-gray-300 mb-4">
              Capturing moments that tell stories. Professional photography and videography services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@filmographer.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Location: Your City, State</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Filmographer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
