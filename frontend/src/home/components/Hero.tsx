"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import { useVimeoPlayer } from '@/hooks/useVimeoPlayer';

const Hero: React.FC = () => {
  const { playerRef, isLoaded, error } = useVimeoPlayer({
    id: 922651989,
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    background: true,
    responsive: true,
  });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          ref={playerRef}
          className="w-full h-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
        
        {/* Fallback gradient background */}
        {(!isLoaded || error) && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        )}
        
        {/* Loading state */}
        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-lg">Loading video...</div>
          </div>
        )}
      </div>
      
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white drop-shadow-2xl">
            Capturing Life's
            <span className="block text-blue-400 mt-2">Beautiful Moments</span>
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-gray-200 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
            Professional photography and videography services that tell your story with creativity and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white border-0">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
