import React, { useEffect, useRef } from 'react';
import { Cpu, Globe, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line-by-line / paragraph stagger reveal with ScrollTrigger
      const paragraphs = textContainerRef.current?.querySelectorAll('.reveal-line');
      if (paragraphs && paragraphs.length > 0) {
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 35, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Pillars cards entrance with 3D depth transform
      const pillarCards = cardsContainerRef.current?.querySelectorAll('.pillar-card');
      if (pillarCards && pillarCards.length > 0) {
        gsap.fromTo(
          pillarCards,
          { opacity: 0, x: 40, rotateY: 15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillarIcons = {
    'ai-systems': <Cpu size={20} className="text-purple-neon" />,
    'web-engineering': <Globe size={20} className="text-purple-neon" />,
    'creative-3d': <Sparkles size={20} className="text-purple-neon" />,
    'methodology': <Compass size={20} className="text-purple-neon" />,
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 34, 206, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Narrative & Detailed Approach */}
          <div ref={textContainerRef}>
            <div className="section-badge reveal-line">
              <Sparkles size={13} />
              <span>{ABOUT_DATA.subheading}</span>
            </div>

            <h2 className="section-title text-gradient reveal-line" style={{ marginBottom: '24px' }}>
              {ABOUT_DATA.heading}
            </h2>

            {/* Introduction paragraph */}
            <p
              className="reveal-line"
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                fontWeight: 400,
              }}
            >
              {ABOUT_DATA.paragraphs[0]}
            </p>

            <p
              className="reveal-line"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
              }}
            >
              {ABOUT_DATA.paragraphs[1]}
            </p>

            {/* Core Competencies Focus List */}
            <div
              className="reveal-line"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(168, 85, 247, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '2px' }}>
                    AI Development Interests
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Autonomous agents, retrieval-augmented intelligence (RAG), neural graph reasoning, and production-grade LLM inference engines.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '2px' }}>
                    Web Development Interests
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Real-time reactive frontends, hardware-accelerated 3D graphics (Three.js/WebGL), distributed micro-services, and edge computing.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#a855f7" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '2px' }}>
                    Approach to Solving Problems
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    First-principles deconstruction: stripping away artificial friction, profiling critical paths, and architecting resilient deterministic systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Pillars Grid */}
          <div
            ref={cardsContainerRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {ABOUT_DATA.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="glass-panel glass-panel-hover pillar-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '220px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top card header */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--purple-light)',
                      }}
                    >
                      {pillarIcons[pillar.id]}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--purple-light)',
                        letterSpacing: '0.08em',
                        background: 'rgba(126, 34, 206, 0.2)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: '#ffffff',
                      marginBottom: '10px',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '20px',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric telemetry */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(168, 85, 247, 0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {pillar.metricLabel}
                  </span>
                  <span
                    className="text-gradient-purple"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                    }}
                  >
                    {pillar.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
