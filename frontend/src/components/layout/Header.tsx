import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
              Filmographer
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#about" 
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20"
            >
              About
            </Link>
            <Link 
              href="/#portfolio" 
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20"
            >
              Portfolio
            </Link>
            <Link 
              href="/#services" 
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20"
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20"
            >
              Testimonials
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
