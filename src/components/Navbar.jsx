import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollManager';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '12px 24px' : '22px 24px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1240px',
            margin: '0 auto',
            pointerEvents: 'auto',
          }}
        >
          {/* Logo Capsule */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              padding: '8px 16px',
              background: 'rgba(15, 8, 28, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(168, 85, 247, 0.28)',
              borderRadius: '9999px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              transition: 'var(--transition-smooth)',
            }}
            className="glass-panel-hover"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #6b21a8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
              }}
            >
              <Terminal size={15} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                color: '#ffffff',
              }}
            >
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Nav Capsule */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              background: 'rgba(15, 8, 28, 0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '9999px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  transition: 'all 0.25s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Status Indicator & Action CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Status pill (Desktop) */}
            <div
              className="status-indicator-badge"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(15, 8, 28, 0.8)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(168, 85, 247, 0.22)',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#e9d5ff',
                letterSpacing: '0.04em',
              }}
            >
              <span className="pulse-dot" />
              <span>CORE // ONLINE</span>
            </div>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
              style={{
                padding: '9px 18px',
                fontSize: '0.85rem',
                display: 'none',
              }}
              id="nav-contact-btn"
            >
              <span>Initialize</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 8, 28, 0.85)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              className="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: 'center',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.1)',
                  background: 'rgba(18, 10, 32, 0.5)',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
              style={{ marginTop: '12px', width: '100%' }}
            >
              <span>Initialize Transmission</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query adjustments for navbar */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-indicator-badge {
            display: inline-flex !important;
          }
          #nav-contact-btn {
            display: inline-flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
