import React, { useEffect, useRef } from 'react';
import { Milestone, Compass, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JOURNEY_TIMELINE } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineProgressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate glowing vertical beam progress as user scrolls
      if (lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        );
      }

      // 2. Progressive node reveal animation
      const items = timelineRef.current?.querySelectorAll('.timeline-node-item');
      if (items && items.length > 0) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient gradient */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 64px' }}>
          <div className="section-badge" style={{ margin: '0 auto 14px' }}>
            <Milestone size={13} />
            <span>// 04. TRAJECTORY & EVOLUTION</span>
          </div>

          <h2 className="section-title text-gradient">
            Evolution of a Builder
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A disciplined trajectory uniting foundational computer science, visual computing, and modern artificial intelligence.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          style={{
            position: 'relative',
            maxWidth: '940px',
            margin: '0 auto',
            padding: '20px 0',
          }}
        >
          {/* Background Track Line */}
          <div
            className="timeline-spine-track"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              transform: 'translateX(-50%)',
              background: 'rgba(168, 85, 247, 0.15)',
            }}
          />

          {/* Active Glowing Neon Line */}
          <div
            ref={lineProgressRef}
            className="timeline-spine-active"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              transform: 'translateX(-50%)',
              transformOrigin: 'top center',
              background: 'linear-gradient(to bottom, #a855f7 0%, #c084fc 50%, #e9d5ff 100%)',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 30px rgba(192, 132, 252, 0.4)',
              zIndex: 1,
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {JOURNEY_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.phase}
                  className={`timeline-node-item ${isEven ? 'item-even' : 'item-odd'}`}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {/* Central Node Pulse Marker */}
                  <div
                    className="timeline-center-marker"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#0a0612',
                      border: '2px solid var(--purple-light)',
                      boxShadow: '0 0 14px var(--purple-neon)',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        boxShadow: '0 0 8px #ffffff',
                      }}
                    />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className="timeline-content-card"
                    style={{
                      width: '45%',
                      marginLeft: isEven ? '0' : 'auto',
                      marginRight: isEven ? 'auto' : '0',
                    }}
                  >
                    <div
                      className="glass-panel glass-panel-hover"
                      style={{
                        padding: '28px',
                        borderRadius: '16px',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                      }}
                    >
                      {/* Phase Badge & Focus */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '12px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: 'var(--purple-light)',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            background: 'rgba(168, 85, 247, 0.15)',
                            padding: '3px 10px',
                            borderRadius: '6px',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                          }}
                        >
                          {item.phase}
                        </span>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.focus}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          color: '#ffffff',
                          marginBottom: '12px',
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '18px',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Key Milestones List */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(168, 85, 247, 0.12)',
                        }}
                      >
                        {item.milestones.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '0.82rem',
                              color: 'var(--text-muted)',
                              lineHeight: 1.45,
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color="#a855f7"
                              style={{ marginTop: '2px', flexShrink: 0 }}
                            />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive mobile adjustments for vertical timeline */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-spine-track,
          .timeline-spine-active {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-center-marker {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-content-card {
            width: calc(100% - 48px) !important;
            margin-left: 48px !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
