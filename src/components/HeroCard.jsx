import React from 'react';

const HeroCard = ({ profileImg }) => {
  return (
    <div className="glass animate-fade-in" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem',
      gap: '4rem',
      marginTop: '8rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: '0.2',
        zIndex: 0
      }} />

      <div style={{ flex: 1, zIndex: 1 }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Crafting Digital <span style={{ color: 'var(--primary)' }}>Realities.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
          I'm Prince Bhalse, a software architect, writer, and digital artist. Exploring the intersection of code, literature, and visual storytelling.
        </p>
        <button style={{
          padding: '1rem 2rem',
          background: 'var(--primary)',
          color: 'white',
          borderRadius: '1rem',
          fontWeight: '600',
          transition: 'var(--transition)'
        }} className="hover-btn">
          Explore My Work
        </button>
      </div>

      <div style={{ flexShrink: 0, zIndex: 1 }}>
        <div style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '4px solid var(--border)',
          padding: '10px',
          background: 'linear-gradient(45deg, var(--primary), transparent)'
        }}>
          <img 
            src={profileImg} 
            alt="Prince Bhalse" 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <style>{`
        .hover-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -10px var(--primary);
        }
      `}</style>
    </div>
  );
};

export default HeroCard;
