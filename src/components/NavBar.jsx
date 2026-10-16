import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, cycleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/blog', label: 'Blog' },
    { to: '/stories', label: 'Stories' },
    { to: '/shayari', label: 'Shayari' },
    { to: '/thoughts', label: 'Thoughts' },
    { to: '/books', label: 'Books' },
    { to: '/projects', label: 'Projects' },
    { to: '/art-work', label: 'Art Work' },
  ];

  return (
    <nav
      className={`glass nav-container ${scrolled ? 'nav-scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/" className="nav-logo" aria-label="Prince Bhalse - Home">
        PRINCE<span style={{ color: 'var(--primary)' }}>.</span>
      </Link>

      <div className="nav-right-cluster">
        {/* Quick Theme Cycle Button (Desktop & Mobile) */}
        <button
          className="nav-theme-btn"
          onClick={cycleTheme}
          aria-label={`Current theme: ${theme.name}. Click to switch theme`}
          title={`Switch Theme (Current: ${theme.name})`}
        >
          <span className="nav-theme-emoji" aria-hidden="true">{theme.emoji}</span>
          <span className="nav-theme-name">{theme.name}</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="nav-links-desktop" role="menubar">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${location.pathname.startsWith(to) ? 'nav-link-active' : ''}`}
            role="menuitem"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-menu"
            className="nav-links-mobile"
            role="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname.startsWith(to) ? 'nav-link-active' : ''}`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-container {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 1200px;
          z-index: 1000;
          padding: 0.85rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border);
          transition: var(--transition), box-shadow 0.3s ease;
          border-radius: 2rem;
        }
        .nav-scrolled {
          box-shadow: 0 8px 30px var(--shadow-color, rgba(0, 0, 0, 0.3));
        }
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          text-decoration: none;
          color: var(--text);
        }

        .nav-right-cluster {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          order: 3;
        }

        .nav-theme-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.04);
          color: var(--text);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        .nav-theme-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
          transform: translateY(-1px);
        }
        .nav-theme-emoji {
          font-size: 1rem;
          line-height: 1;
        }
        .nav-theme-name {
          font-size: 0.85rem;
        }

        .nav-links-desktop {
          display: flex;
          gap: 1.75rem;
          order: 2;
        }

        .nav-toggle {
          display: none;
          color: var(--text);
          background: transparent;
          border: none;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-muted);
          transition: var(--transition);
          position: relative;
          padding: 0.25rem 0;
          text-decoration: none;
        }
        .nav-link:hover,
        .nav-link-active {
          color: var(--primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }
        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }

        .nav-links-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0.75rem 1.25rem;
            width: calc(100% - 1.5rem);
            top: 0.75rem;
          }
          .nav-theme-name {
            display: none;
          }
          .nav-theme-btn {
            padding: 0.4rem 0.6rem;
          }
          .nav-links-mobile {
            display: flex;
            position: absolute;
            top: calc(100% + 0.5rem);
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--nav-bg);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border);
            border-radius: 1.25rem;
            padding: 1.5rem;
            gap: 1.25rem;
            text-align: center;
            box-shadow: 0 10px 30px var(--shadow-color, rgba(0, 0, 0, 0.5));
          }
          .nav-link::after {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
