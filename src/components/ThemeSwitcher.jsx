import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, themeId, setTheme, themeOrder, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="theme-switcher-container" ref={panelRef}>
      {/* Floating trigger button */}
      <motion.button
        className="theme-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Change theme"
        title="Change theme"
        style={{ '--fab-color': theme.colors['--primary'] }}
      >
        <Palette size={22} />
      </motion.button>

      {/* Theme panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-panel glass"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <span className="theme-panel-title">Choose Theme</span>
            <div className="theme-options">
              {themeOrder.map((id) => {
                const t = themes[id];
                const isActive = themeId === id;
                return (
                  <motion.button
                    key={id}
                    className={`theme-option ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(id);
                      setIsOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${t.name} theme`}
                    title={t.name}
                  >
                    <span
                      className="theme-swatch"
                      style={{ background: t.colors['--primary'] }}
                    />
                    <span className="theme-emoji">{t.emoji}</span>
                    <span className="theme-name">{t.name}</span>
                    {isActive && (
                      <motion.span
                        className="theme-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .theme-switcher-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
        }
        .theme-fab {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--fab-color, var(--primary));
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), 0 0 20px var(--glow-color, rgba(99, 102, 241, 0.3));
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.15);
          transition: box-shadow 0.3s ease;
        }
        .theme-fab:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 30px var(--glow-color, rgba(99, 102, 241, 0.4));
        }
        .theme-panel {
          position: absolute;
          bottom: calc(100% + 1rem);
          right: 0;
          min-width: 220px;
          padding: 1.25rem;
          border-radius: 1.25rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .theme-panel-title {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .theme-options {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .theme-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid transparent;
          color: var(--text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
        }
        .theme-option:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border);
        }
        .theme-option.active {
          background: rgba(var(--primary-rgb, 99, 102, 241), 0.1);
          border-color: var(--primary);
        }
        .theme-swatch {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .theme-emoji {
          font-size: 1rem;
          line-height: 1;
        }
        .theme-name {
          flex: 1;
          text-align: left;
        }
        .theme-check {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .theme-switcher-container {
            bottom: 1.25rem;
            right: 1.25rem;
          }
          .theme-fab {
            width: 46px;
            height: 46px;
          }
          .theme-panel {
            right: 0;
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;
