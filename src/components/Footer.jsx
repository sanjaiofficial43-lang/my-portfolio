import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollManager';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(168, 85, 247, 0.15)',
        background: 'rgba(5, 5, 5, 0.85)',
        backdropFilter: 'blur(20px)',
        padding: '48px 24px 36px',
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Brand & Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #6b21a8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
              }}
            >
              <Terminal size={17} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                {PERSONAL_INFO.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {PERSONAL_INFO.displayTag}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(26, 16, 46, 0.6)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                color: 'var(--text-secondary)',
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
              <Github size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(26, 16, 46, 0.6)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                color: 'var(--text-secondary)',
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
              <Linkedin size={18} />
            </a>

            <a
              href={PERSONAL_INFO.xTwitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(26, 16, 46, 0.6)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                color: 'var(--text-secondary)',
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
              <Twitter size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="btn-secondary"
            style={{
              padding: '10px 18px',
              fontSize: '0.82rem',
              borderRadius: '9999px',
            }}
          >
            <span>Back to Summit</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Bottom Line: Copyright & Tech Attribution */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(168, 85, 247, 0.1)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All systems operational.
          </div>
          <div>
            Engineered with React, Three.js, R3F, GSAP & Lenis
          </div>
        </div>
      </div>
    </footer>
  );
}
