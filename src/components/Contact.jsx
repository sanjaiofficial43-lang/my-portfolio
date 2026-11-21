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
          scale: 1.2,
          opacity: 0.85,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentCardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
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
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Cinematic Purple Light Element / Background Lens Flare */}
      <div
        ref={glowAuraRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, rgba(126, 34, 206, 0.15) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(90px)',
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
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: ' clamp(32px, 5vw, 64px)',
            borderRadius: '28px',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(168, 85, 247, 0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Top Cyber Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--purple-light), transparent)',
              boxShadow: '0 0 15px var(--purple-neon)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Transmission Brief & Channels */}
            <div>
              <div className="section-badge" style={{ marginBottom: '16px' }}>
                <Sparkles size={13} />
                <span>// 05. DIRECT TRANSMISSION</span>
              </div>

              <h2
                className="section-title text-gradient"
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  letterSpacing: '-0.02em',
                }}
              >
                LET'S BUILD SOMETHING INTELLIGENT.
              </h2>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  marginBottom: '36px',
                }}
              >
                Whether you're developing autonomous AI agent infrastructure, high-fidelity 3D web applications, or high-throughput digital systems, I am ready to engineer the vision.
              </p>

              {/* Direct Channels List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: 'rgba(24, 14, 44, 0.6)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={18} color="#c084fc" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        DIRECT PROTOCOL
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    style={{
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      color: copiedEmail ? '#4ade80' : 'var(--purple-light)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      flex: 1,
                      padding: '12px',
                      fontSize: '0.86rem',
                    }}
                  >
                    <Linkedin size={16} color="#c084fc" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      flex: 1,
                      padding: '12px',
                      fontSize: '0.86rem',
                    }}
                  >
                    <Github size={16} color="#c084fc" />
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
                gap: '18px',
                background: 'rgba(12, 6, 24, 0.65)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid rgba(168, 85, 247, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Terminal size={15} color="#c084fc" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#e9d5ff' }}>
                  INITIALIZE SECURE INQUIRY
                </span>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
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
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.6)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
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
                    fontSize: '0.75rem',
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
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.6)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
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
                    fontSize: '0.75rem',
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
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 5, 0.6)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
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
                  marginTop: '8px',
                  opacity: formStatus === 'sending' ? 0.7 : 1,
                }}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={16} />
                    <span>Initialize Transmission</span>
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <Sparkles size={16} className="animate-spin" />
                    <span>Encrypting & Sending...</span>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <Check size={16} color="#4ade80" />
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
