import React, { useEffect } from 'react';
import { initSmoothScroll } from './utils/scrollManager';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
    const lenis = initSmoothScroll();

    return () => {
      if (window.__destroySmoothScroll) {
        window.__destroySmoothScroll();
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050505' }}>
      {/* Ambient Cyber Grid & Noise Background */}
      <div className="bg-cyber-grid" />

      {/* Floating Futuristic Header */}
      <Navbar />

      {/* Main Experience Flow */}
      <main>
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: ABOUT ME */}
        <About />

        {/* SECTION 3: SKILLS */}
        <Skills />

        {/* SECTION 4: FEATURED PROJECTS */}
        <Projects />

        {/* SECTION 5: MY JOURNEY */}
        <Journey />

        {/* SECTION 6: CONTACT */}
        <Contact />
      </main>

      {/* SECTION 7: FOOTER */}
      <Footer />
    </div>
  );
}
