import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sectionRef = useRef(null);
  const glowAuraRef = useRef(null);
  const contentCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic purple light bloom entrance
      gsap.fromTo(
        glowAuraRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1.1,
          opacity: 0.85,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentCardRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(60px, 8vw, 120px) 16px',
        overflow: 'hidden',
      }}
    >
      {/* Cinematic Purple Light Element / Ambient Flare */}
      <div
        ref={glowAuraRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(750px, 90vw)',
          height: 'min(750px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(126, 34, 206, 0.12) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        ref={contentCardRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(20px, 4vw, 56px)',
            borderRadius: 'clamp(18px, 3vw, 28px)',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 85, 247, 0.18)',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {/* Subtle Top Cyber Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--purple-light), transparent)',
              boxShadow: '0 0 15px var(--purple-neon)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(28px, 4vw, 48px)',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Transmission Brief & Direct Channels */}
            <div style={{ width: '100%', minWidth: 0 }}>
              <div className="section-badge" style={{ marginBottom: '14px' }}>
                <Sparkles size={13} />
                <span>// 05. DIRECT TRANSMISSION</span>
              </div>

              <h2
                className="section-title text-gradient"
                style={{
                  fontSize: 'clamp(1.65rem, 4.5vw, 2.75rem)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  wordBreak: 'break-word',
                }}
              >
                LET'S BUILD SOMETHING INTELLIGENT.
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                }}
              >
                Whether you're developing autonomous AI agent infrastructure, high-fidelity 3D web applications, or high-throughput digital systems, I am ready to engineer the vision.
              </p>

              {/* Direct Channels List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                {/* Email Box - Mobile Optimized */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    background: 'rgba(24, 14, 44, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  className="contact-email-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(168, 85, 247, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#c084fc',
                        }}
                      >
                        <Mail size={16} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        DIRECT PROTOCOL
                      </span>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      aria-label="Copy Email Address"
                      style={{
                        background: 'rgba(168, 85, 247, 0.15)',
                        border: '1px solid rgba(168, 85, 247, 0.35)',
                        color: copiedEmail ? '#4ade80' : 'var(--purple-light)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                      }}
                    >
                      {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div
                    style={{
                      fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                      color: '#ffffff',
                      fontWeight: 500,
                      wordBreak: 'break-all',
                      lineHeight: 1.4,
                      paddingLeft: '4px',
                    }}
                  >
                    {PERSONAL_INFO.email}
                  </div>
                </div>

                {/* Social Links Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '11px 16px',
                      fontSize: '0.85rem',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Linkedin size={15} color="#c084fc" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '11px 16px',
                      fontSize: '0.85rem',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Github size={15} color="#c084fc" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Transmission Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'rgba(12, 6, 24, 0.7)',
                padding: 'clamp(18px, 3.5vw, 32px)',
                borderRadius: 'clamp(14px, 2.5vw, 20px)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                width: '100%',
                boxSizing: 'border-box',
                minWidth: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Terminal size={15} color="#c084fc" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: '#e9d5ff',
                    letterSpacing: '0.06em',
                  }}
                >
                  INITIALIZE SECURE INQUIRY
                </span>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  IDENTIFIER // YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem', // Prevents iOS Safari auto-zoom on focus
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--purple-neon)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  RETURN ADDRESS // YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jane@organization.ai"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem', // Prevents iOS Safari auto-zoom on focus
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--purple-neon)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  PROJECT MISSION // DETAILS
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the scope, objectives, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem', // Prevents iOS Safari auto-zoom on focus
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--purple-neon)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary"
                style={{
                  width: '100%',
                  marginTop: '6px',
                  padding: '14px 20px',
                  fontSize: '0.92rem',
                  opacity: formStatus === 'sending' ? 0.7 : 1,
                }}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={15} />
                    <span>Initialize Transmission</span>
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <Sparkles size={15} className="animate-spin" />
                    <span>Encrypting & Sending...</span>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <Check size={15} color="#4ade80" />
                    <span style={{ color: '#4ade80' }}>Transmission Received</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
