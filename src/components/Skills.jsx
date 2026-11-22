import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Globe, Terminal, Bot, Sparkles, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILL_CATEGORIES } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// 3D Tilt Card wrapper
function TiltCard({ children, style = {} }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const categoryIcons = {
    ai: <Cpu size={18} />,
    web: <Globe size={18} />,
    programming: <Terminal size={18} />,
    automation: <Bot size={18} />,
    creative: <Sparkles size={18} />,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D transform entrance for skill cards
      const cards = gridRef.current?.querySelectorAll('.skill-grid-item');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            rotateX: 25,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  // Filter categories based on tab selection
  const displayedCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background cyber radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="section-badge" style={{ margin: '0 auto 14px' }}>
            <Layers size={13} />
            <span>// 02. TECHNICAL ARSENAL</span>
          </div>

          <h2 className="section-title text-gradient">
            Mastery & Technical Capabilities
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated stack spanning deep learning systems, resilient web infrastructure, and spatial 3D interfaces.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '44px',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              border: `1px solid ${activeTab === 'all' ? 'var(--purple-neon)' : 'var(--border-subtle)'}`,
              background: activeTab === 'all' ? 'rgba(168, 85, 247, 0.25)' : 'rgba(15, 8, 28, 0.6)',
              color: activeTab === 'all' ? '#ffffff' : 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)',
            }}
          >
            All Disciplines
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: `1px solid ${isActive ? 'var(--purple-neon)' : 'var(--border-subtle)'}`,
                  background: isActive ? 'rgba(168, 85, 247, 0.25)' : 'rgba(15, 8, 28, 0.6)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span style={{ color: isActive ? 'var(--purple-light)' : 'var(--text-muted)' }}>
                  {categoryIcons[cat.id]}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)',
          }}
        >
          {displayedCategories.map((category) => (
            <div key={category.id} className="skill-grid-item">
              <TiltCard>
                <div
                  className="glass-panel glass-panel-hover"
                  style={{
                    padding: 'clamp(20px, 3.5vw, 30px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Category Card Header */}
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
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'rgba(168, 85, 247, 0.16)',
                          border: '1px solid rgba(168, 85, 247, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--purple-light)',
                          boxShadow: '0 0 16px rgba(168, 85, 247, 0.25)',
                        }}
                      >
                        {categoryIcons[category.id]}
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {category.skills.length} MODULES
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        color: '#ffffff',
                        marginBottom: '8px',
                      }}
                    >
                      {category.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        marginBottom: '22px',
                      }}
                    >
                      {category.description}
                    </p>

                    {/* Skill Items List */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '10px',
                            background: 'rgba(24, 14, 44, 0.5)',
                            border: '1px solid rgba(168, 85, 247, 0.12)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.35)';
                            e.currentTarget.style.background = 'rgba(38, 20, 68, 0.65)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.12)';
                            e.currentTarget.style.background = 'rgba(24, 14, 44, 0.5)';
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: '#ffffff',
                              }}
                            >
                              {skill.name}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--purple-light)',
                                background: 'rgba(168, 85, 247, 0.15)',
                                padding: '2px 8px',
                                borderRadius: '4px',
                              }}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: '0.78rem',
                              color: 'var(--text-muted)',
                              lineHeight: 1.4,
                            }}
                          >
                            {skill.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle bottom indicator */}
                  <div
                    style={{
                      marginTop: '22px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(168, 85, 247, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--purple-neon)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      READY FOR PRODUCTION
                    </span>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--purple-neon)',
                        boxShadow: '0 0 8px var(--purple-neon)',
                      }}
                    />
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
