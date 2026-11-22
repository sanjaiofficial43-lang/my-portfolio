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
      {/* 3D WebGL Canvas Layer - Always Front & Center with Full Dynamic Motion */}
      <HeroScene />

      {/* Hero Foreground Content Capsule - Highly Translucent so 3D Motion is 100% Visible */}
      <div
        ref={contentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: '0',
          paddingRight: '0',
          pointerEvents: 'none',
        }}
      >
        {/* Slightly Transparent Frosted HUD Card allowing Background Motion to Shine Through */}
        <div
          className="hero-glass-hud"
          style={{
            width: '100%',
            background: 'rgba(10, 4, 22, 0.22)', // Highly transparent
            backdropFilter: 'blur(5px)', // Light blur so 3D motion is clearly visible
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(168, 85, 247, 0.22)',
            borderRadius: 'clamp(20px, 4vw, 32px)',
            padding: 'clamp(24px, 5vw, 44px) clamp(16px, 4vw, 36px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            pointerEvents: 'auto',
          }}
        >
          {/* Subtle Top Accent Beam */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '20%',
              right: '20%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #c084fc, transparent)',
              boxShadow: '0 0 12px #a855f7',
            }}
          />

          {/* Top Identification Badge */}
          <div ref={badgeRef} style={{ marginBottom: '18px' }}>
            <div
              className="glass-pill"
              style={{
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.35)',
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

          {/* Main Heading - Solid Brilliant White with High-Contrast Dark Outline for 100% Readability */}
          <h1
            ref={titleRef}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.75rem, 5.2vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              textTransform: 'uppercase',
              maxWidth: '820px',
              wordBreak: 'break-word',
              textShadow: '0 2px 8px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0.95), 0 0 35px rgba(168, 85, 247, 0.85), 0 0 60px rgba(192, 132, 252, 0.45)',
            }}
          >
            {PERSONAL_INFO.roleHeadline}
          </h1>

          {/* Subtitle - High-Contrast Pure White with Dark Shadow */}
          <p
            ref={subtitleRef}
            style={{
              fontSize: 'clamp(0.92rem, 2vw, 1.2rem)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.03em',
              maxWidth: '640px',
              marginBottom: '28px',
              lineHeight: 1.55,
              textShadow: '0 2px 10px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0.9)',
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
              gap: '12px',
              marginBottom: '28px',
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
              style={{
                minWidth: 'clamp(140px, 40vw, 180px)',
                padding: '12px 24px',
                fontSize: '0.92rem',
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
                minWidth: 'clamp(140px, 40vw, 180px)',
                padding: '12px 24px',
                fontSize: '0.92rem',
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
              gap: 'clamp(8px, 2vw, 18px)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.68rem, 1.8vw, 0.74rem)',
              color: '#ffffff',
              letterSpacing: '0.06em',
              background: 'rgba(15, 8, 28, 0.65)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ color: '#c084fc' }}>LATENCY:</span> 12ms
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ color: '#c084fc' }}>NEURAL.CORE:</span> v4.8 ACTIVE
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ color: '#c084fc' }}>SPACE:</span> WEBGL
            </div>
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
