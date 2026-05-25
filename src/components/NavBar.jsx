import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass nav-container">
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>
        PRINCE<span style={{ color: 'var(--primary)' }}>.</span>
      </Link>
      
      {/* Mobile Hamburger Button */}
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/shayari" className="nav-link" onClick={() => setIsOpen(false)}>Shayari</Link>
        <Link to="/thoughts" className="nav-link" onClick={() => setIsOpen(false)}>Thoughts</Link>
        <Link to="/books" className="nav-link" onClick={() => setIsOpen(false)}>Books</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/art-work" className="nav-link" onClick={() => setIsOpen(false)}>Art Work</Link>
      </div>

      <style>{`
        .nav-container {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 1200px;
          z-index: 1000;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-toggle {
          display: none;
          color: var(--text);
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          opacity: 0.8;
          transition: var(--transition);
          position: relative;
        }
        .nav-link:hover {
          opacity: 1;
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
        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0.75rem 1.25rem;
            width: calc(100% - 1.5rem);
            top: 0.75rem;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-links {
            display: none;
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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            animation: slideDown 0.3s ease forwards;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-link::after {
            display: none;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
