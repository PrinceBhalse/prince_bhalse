import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2rem)',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>
        PRINCE<span style={{ color: 'var(--primary)' }}>.</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/shayari" className="nav-link">Shayari</Link>
        <Link to="/thoughts" className="nav-link">Thoughts</Link>
        <Link to="/books" className="nav-link">Books</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/art-work" className="nav-link">Art Work</Link>
      </div>

      <style>{`
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
      `}</style>
    </nav>
  );
};

export default NavBar;
