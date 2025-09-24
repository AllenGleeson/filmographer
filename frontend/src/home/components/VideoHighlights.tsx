'use client';

import React, { useEffect, useRef } from 'react';

interface VideoItem {
  id: string;
  title: string;
  vimeoId: string;
  thumbnail: string;
  duration?: string;
}

const VideoHighlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'Wedding Highlights',
      vimeoId: '123456789',
      thumbnail: '/api/placeholder/300/200',
      duration: '2:30'
    },
    {
      id: '2',
      title: 'Corporate Event',
      vimeoId: '987654321',
      thumbnail: '/api/placeholder/300/200',
      duration: '1:45'
    },
    {
      id: '3',
      title: 'Portrait Session',
      vimeoId: '456789123',
      thumbnail: '/api/placeholder/300/200',
      duration: '3:15'
    },
    {
      id: '4',
      title: 'Product Showcase',
      vimeoId: '789123456',
      thumbnail: '/api/placeholder/300/200',
      duration: '2:00'
    },
    {
      id: '5',
      title: 'Event Coverage',
      vimeoId: '321654987',
      thumbnail: '/api/placeholder/300/200',
      duration: '4:20'
    },
    {
      id: '6',
      title: 'Behind the Scenes',
      vimeoId: '654987321',
      thumbnail: '/api/placeholder/300/200',
      duration: '1:30'
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;

      // Reset scroll position when it reaches the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleVideoClick = (vimeoId: string) => {
    // Open Vimeo video in a new tab or modal
    window.open(`https://vimeo.com/${vimeoId}`, '_blank');
  };

  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Duplicate videos for seamless loop */}
            {[...videos, ...videos].map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="flex-shrink-0 w-1/3 cursor-pointer group"
                onClick={() => handleVideoClick(video.vimeoId)}
              >
                <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-700">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 text-gray-900 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    )}

                    {/* Vimeo Logo */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-white bg-opacity-90 rounded px-2 py-1">
                        <span className="text-xs font-semibold text-gray-900">Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VideoHighlights;

