import React from 'react';
import Hero from '@/home/components/Hero';
import About from '@/home/components/About';
import Portfolio from '@/home/components/Portfolio';
import VideoHighlights from '@/home/components/VideoHighlights';
import Services from '@/home/components/Services';
import Testimonials from '@/home/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Portfolio />
      <VideoHighlights />
      <Services />
      <Testimonials />
    </div>
  );
}