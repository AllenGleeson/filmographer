'use client';

import React, { useEffect, useRef } from 'react';
import { useVimeoPlayer } from '@/hooks/useVimeoPlayer';

const VideoHighlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const heroVideoId = 922651989;
  const videoCount = 6; // Number of videos to display

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3; // pixels per frame - slower for smoother effect

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Use transform instead of scrollLeft to avoid interfering with page scroll
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;

      // Calculate reset point: each video is 50% width, so reset after scrolling through videoCount videos
      const containerWidth = scrollContainer.clientWidth;
      const videoWidth = containerWidth / 2; // Each video is w-1/2
      const resetPoint = videoWidth * videoCount; // Reset after scrolling through first set of videos

      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-gray-900">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex h-full overflow-x-hidden scrollbar-hide pointer-events-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          willChange: 'transform',
        }}
      >
        {/* Duplicate videos for seamless loop */}
        {Array.from({ length: videoCount * 2 }).map((_, index) => (
          <VideoPlayer
            key={`video-${index}`}
            videoId={heroVideoId}
            index={index}
          />
        ))}
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>

      {/* Overlay with opacity for better visual effect */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-5"></div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Individual Video Player Component
const VideoPlayer: React.FC<{ videoId: number; index: number }> = ({ videoId, index }) => {
  const { playerRef, isLoaded, error } = useVimeoPlayer({
    id: videoId,
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    background: true,
    responsive: true,
  });

  return (
    <div className="flex-shrink-0 w-1/2 h-full relative">
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
      </div>
      
      {/* Subtle overlay for each video */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default VideoHighlights;

