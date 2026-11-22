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
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          metaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

      // Subtle scroll fade for hero typography content as user scrolls down
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
        opacity: 0,
        y: -60,
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
        padding: 'clamp(100px, 14vh, 140px) 16px 60px',
      }}
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroScene />

      {/* Subtle Dark Vignette Backdrop behind typography to ensure high contrast */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(780px, 90vw)',
          height: 'min(500px, 70vh)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5, 5, 5, 0.72) 0%, rgba(5, 5, 5, 0.45) 55%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 2,
          filter: 'blur(20px)',
        }}
      />

      {/* Hero Foreground Content */}
      <div
        ref={contentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        {/* Top Identification Badge */}
        <div ref={badgeRef} style={{ pointerEvents: 'auto', marginBottom: '20px' }}>
          <div
            className="glass-pill"
            style={{
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.35)',
              border: '1px solid rgba(192, 132, 252, 0.35)',
              background: 'rgba(15, 8, 28, 0.85)',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.8rem)',
              padding: '6px 12px',
            }}
          >
            <Sparkles size={13} color="#c084fc" />
            <span>{PERSONAL_INFO.name} // {PERSONAL_INFO.displayTag}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          ref={titleRef}
          className="text-gradient"
          style={{
            fontSize: 'clamp(1.85rem, 5vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            marginBottom: '18px',
            textTransform: 'uppercase',
            maxWidth: '920px',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 0, 0, 0.85)',
            wordBreak: 'break-word',
          }}
        >
          {PERSONAL_INFO.roleHeadline}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(0.92rem, 1.8vw, 1.25rem)',
            color: '#e5e7eb',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.04em',
            maxWidth: '680px',
            marginBottom: '32px',
            lineHeight: 1.5,
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.9)',
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
            gap: '12px',
            marginBottom: '40px',
            pointerEvents: 'auto',
            width: '100%',
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#projects');
            }}
            className="btn-primary"
            style={{ minWidth: 'min(100%, 160px)' }}
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
            style={{ minWidth: 'min(100%, 160px)' }}
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
            gap: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            background: 'rgba(10, 5, 20, 0.7)',
            padding: '8px 18px',
            borderRadius: '9999px',
            border: '1px solid rgba(168, 85, 247, 0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--purple-light)' }}>LATENCY:</span> 12ms (STREAMING)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--purple-light)' }}>NEURAL.CORE:</span> v4.8 ACTIVE
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--purple-light)' }}>SPACE:</span> WEBGL / THREE.JS
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => scrollToSection('#about')}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: '24px',
            height: '38px',
            borderRadius: '9999px',
            border: '2px solid rgba(168, 85, 247, 0.45)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
            background: 'rgba(15, 8, 28, 0.6)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: 'var(--purple-neon)',
              boxShadow: '0 0 10px var(--purple-neon)',
              animation: 'scrollPulse 2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.2; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
