import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/home/components/Hero';
import About from '@/home/components/About';
import Portfolio from '@/home/components/Portfolio';
import VideoHighlights from '@/home/components/VideoHighlights';
import Services from '@/home/components/Services';
import Testimonials from '@/home/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <VideoHighlights />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}