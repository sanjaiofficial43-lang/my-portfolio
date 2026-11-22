import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Send, Layers } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';
import HeroScene from './3d/HeroScene';
import { scrollToSection } from '../utils/scrollManager';

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const metaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.85 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.5'
        )
        .fromTo(
          metaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.75 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

      // Smooth scroll choreography
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
        opacity: 0,
        y: -50,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 'clamp(90px, 12vh, 130px) 16px 40px',
      }}
    >
      {/* 3D WebGL Canvas Layer - 100% Crystal-Clear, Zero Blurring */}
      <HeroScene />

      {/* Hero Foreground Content - Placed Directly on the Scene */}
      <div
        ref={contentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: '0',
          paddingRight: '0',
          pointerEvents: 'none',
        }}
      >
        {/* Top Identification Badge */}
        <div ref={badgeRef} style={{ marginBottom: '20px', pointerEvents: 'auto' }}>
          <div
            className="glass-pill"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
              border: '1px solid rgba(192, 132, 252, 0.45)',
              background: 'rgba(20, 10, 38, 0.75)',
              fontSize: 'clamp(0.72rem, 2vw, 0.82rem)',
              padding: '6px 14px',
              color: '#ffffff',
            }}
          >
            <Sparkles size={13} color="#c084fc" />
            <span>{PERSONAL_INFO.name} // {PERSONAL_INFO.displayTag}</span>
          </div>
        </div>

        {/* Main Heading - Razor-Sharp Solid White Placed Directly Over the 3D Canvas */}
        <h1
          ref={titleRef}
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1.9rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            marginBottom: '18px',
            textTransform: 'uppercase',
            maxWidth: '860px',
            wordBreak: 'break-word',
            textShadow: '0 2px 10px rgba(0, 0, 0, 1), 0 0 25px rgba(0, 0, 0, 0.95), 0 0 40px rgba(168, 85, 247, 0.85), 0 0 80px rgba(192, 132, 252, 0.4)',
          }}
        >
          {PERSONAL_INFO.roleHeadline}
        </h1>

        {/* Subtitle - High-Contrast Pure White with Dark Shadow */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.03em',
            maxWidth: '680px',
            marginBottom: '32px',
            lineHeight: 1.55,
            textShadow: '0 2px 10px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0.95)',
            fontWeight: 600,
          }}
        >
          {PERSONAL_INFO.subtitle}
        </p>

        {/* Call-to-Action Buttons */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '36px',
            width: '100%',
            pointerEvents: 'auto',
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#projects');
            }}
            className="btn-primary"
            style={{
              minWidth: 'clamp(150px, 40vw, 190px)',
              padding: '13px 26px',
              fontSize: '0.94rem',
            }}
          >
            <Layers size={17} />
            <span>Explore My Work</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="btn-secondary"
            style={{
              minWidth: 'clamp(150px, 40vw, 190px)',
              padding: '13px 26px',
              fontSize: '0.94rem',
            }}
          >
            <Send size={17} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Futuristic System Coordinates & Telemetry */}
        <div
          ref={metaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(10px, 2.5vw, 20px)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.7rem, 1.8vw, 0.78rem)',
            color: '#ffffff',
            letterSpacing: '0.06em',
            background: 'rgba(15, 8, 28, 0.6)',
            padding: '7px 18px',
            borderRadius: '9999px',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            textShadow: '0 1px 6px rgba(0, 0, 0, 0.9)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#c084fc' }}>LATENCY:</span> 12ms
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#c084fc' }}>NEURAL.CORE:</span> v4.8 ACTIVE
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#c084fc' }}>SPACE:</span> WEBGL
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => scrollToSection('#about')}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: '22px',
            height: '34px',
            borderRadius: '9999px',
            border: '2px solid rgba(168, 85, 247, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px',
            background: 'rgba(15, 8, 28, 0.6)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '7px',
              borderRadius: '9999px',
              backgroundColor: 'var(--purple-neon)',
              boxShadow: '0 0 8px var(--purple-neon)',
              animation: 'scrollPulse 2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.2; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
