import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/home/components/Hero';
import About from '@/home/components/About';
import Portfolio from '@/home/components/Portfolio';
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
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}