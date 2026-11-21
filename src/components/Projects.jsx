import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Terminal, Activity, Eye, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// Custom Futuristic Visual Header for Project Cards
function ProjectVisual({ type, title }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '210px',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f081c 0%, #1a0b36 50%, #080314 100%)',
        border: '1px solid rgba(168, 85, 247, 0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background cyber grid inside project card */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.8,
        }}
      />

      {/* Futuristic Visual Variations */}
      {type === 'cyber-sphere' && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '2px solid rgba(192, 132, 252, 0.7)',
              boxShadow: '0 0 35px rgba(168, 85, 247, 0.5), inset 0 0 25px rgba(147, 51, 234, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '1px dashed #e9d5ff',
                animation: 'spin 10s linear infinite',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              width: '140px',
              height: '35px',
              border: '1px solid rgba(168, 85, 247, 0.5)',
              borderRadius: '50%',
              transform: 'rotate(-25deg)',
            }}
          />
        </div>
      )}

      {type === 'network-graph' && (
        <div style={{ position: 'relative', width: '140px', height: '100px' }}>
          {/* Node graph simulation */}
          <div style={{ position: 'absolute', top: '20px', left: '10px', width: '12px', height: '12px', borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 10px #c084fc' }} />
          <div style={{ position: 'absolute', top: '15px', right: '15px', width: '14px', height: '14px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 12px #a855f7' }} />
          <div style={{ position: 'absolute', bottom: '15px', left: '30px', width: '10px', height: '10px', borderRadius: '50%', background: '#e9d5ff', boxShadow: '0 0 8px #e9d5ff' }} />
          <div style={{ position: 'absolute', bottom: '20px', right: '25px', width: '12px', height: '12px', borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 10px #c084fc' }} />
          <div style={{ position: 'absolute', top: '45px', left: '60px', width: '16px', height: '16px', borderRadius: '50%', background: '#9333ea', boxShadow: '0 0 15px #9333ea' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <line x1="16" y1="26" x2="68" y2="53" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" />
            <line x1="125" y1="22" x2="68" y2="53" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" />
            <line x1="35" y1="85" x2="68" y2="53" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" />
            <line x1="115" y1="80" x2="68" y2="53" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {type === 'waveform-pulse' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '60px' }}>
          {[30, 55, 80, 45, 90, 70, 100, 65, 40, 85, 50, 35].map((h, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: `${h}%`,
                background: 'linear-gradient(to top, #7e22ce, #c084fc)',
                borderRadius: '4px',
                boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)',
                animation: `pulseHeight 1.5s ease-in-out ${i * 0.1}s infinite alternate`,
              }}
            />
          ))}
        </div>
      )}

      {type === 'quantum-particle' && (
        <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              border: '1px solid rgba(233, 213, 255, 0.4)',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid #c084fc',
                background: 'rgba(147, 51, 234, 0.25)',
              }}
            />
          </div>
        </div>
      )}

      {/* Top telemetry pill */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          background: 'rgba(5, 5, 5, 0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: '9999px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--purple-light)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
        }}
      >
        <Activity size={11} />
        <span>SYS // OPERATIONAL</span>
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulseHeight {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Depth Transition for project cards on scroll
      const projectItems = cardsRef.current?.querySelectorAll('.project-card-wrapper');
      if (projectItems && projectItems.length > 0) {
        gsap.fromTo(
          projectItems,
          {
            opacity: 0,
            y: 70,
            scale: 0.9,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt calculation on individual card
  const handleCardMouseMove = (e, index) => {
    const el = document.getElementById(`project-card-${index}`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleCardMouseLeave = (index) => {
    const el = document.getElementById(`project-card-${index}`);
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 34, 206, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
          <div className="section-badge" style={{ margin: '0 auto 14px' }}>
            <Sparkles size={13} />
            <span>// 03. FEATURED PROJECTS</span>
          </div>

          <h2 className="section-title text-gradient">
            Intelligent Systems & Digital Realities
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated showcase of artificial intelligence architectures, real-time 3D environments, and reactive interfaces.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="project-card-wrapper"
              onMouseMove={(e) => handleCardMouseMove(e, idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
              style={{
                perspective: '1000px',
              }}
            >
              <div
                id={`project-card-${idx}`}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.35s ease',
                  willChange: 'transform',
                }}
              >
                <div>
                  {/* Dynamic Visual Header */}
                  <div style={{ marginBottom: '20px' }}>
                    <ProjectVisual type={project.imageType} title={project.title} />
                  </div>

                  {/* Subtitle / Focus pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--purple-light)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {project.subtitle}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      color: '#ffffff',
                      marginBottom: '10px',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies Used Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#e9d5ff',
                          background: 'rgba(147, 51, 234, 0.15)',
                          border: '1px solid rgba(168, 85, 247, 0.25)',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(168, 85, 247, 0.15)',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--purple-light)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '4px 0',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--purple-light)')}
                  >
                    <Eye size={15} />
                    <span>Architecture</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Source on GitHub"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(26, 16, 46, 0.6)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = 'var(--purple-neon)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                      }}
                    >
                      <Github size={16} />
                    </a>

                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        if (project.demoUrl === '#') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      className="btn-primary"
                      style={{
                        padding: '8px 16px',
                        fontSize: '0.82rem',
                      }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(5, 5, 5, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '650px',
              padding: '36px',
              borderRadius: '20px',
              border: '1px solid var(--border-glow)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 85, 247, 0.3)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div className="section-badge" style={{ marginBottom: '12px' }}>
              <Terminal size={12} />
              <span>SYSTEM ARCHITECTURE INSPECTION</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: 'var(--purple-light)', fontSize: '0.95rem', marginBottom: '16px' }}>
              {selectedProject.subtitle}
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedProject.description}
            </p>

            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(10, 5, 20, 0.8)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                marginBottom: '24px',
              }}
            >
              <h4 style={{ fontSize: '0.85rem', color: '#e9d5ff', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                KEY ARCHITECTURAL HIGHLIGHTS:
              </h4>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <li>Zero-lag streaming WebSocket protocol for sub-50ms data synchronization.</li>
                <li>Isolated Web Worker execution preventing main-thread UI stutters.</li>
                <li>GPU-accelerated procedural canvas shaders optimized for 60fps across mobile and desktop.</li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <Github size={15} />
                <span>View Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
