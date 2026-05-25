import React from 'react';

const HeroCard = ({ profileImg }) => {
  return (
    <div className="glass animate-fade-in hero-card">
      {/* Decorative Blur */}
      <div className="hero-blur" />

      <div className="hero-content">
        <h1 className="hero-title">
          Crafting Digital <span style={{ color: 'var(--primary)' }}>Realities.</span>
        </h1>
        <p className="hero-desc">
          I'm Prince Bhalse, a software architect, writer, and digital artist. Exploring the intersection of code, literature, and visual storytelling.
        </p>
        <button className="hover-btn hero-btn">
          Explore My Work
        </button>
      </div>

      <div className="hero-img-container">
        <div className="hero-img-wrapper">
          <img 
            src={profileImg} 
            alt="Prince Bhalse" 
            className="hero-img"
          />
        </div>
      </div>

      <style>{`
        .hero-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem;
          gap: 4rem;
          margin-top: 8rem;
          position: relative;
          overflow: hidden;
        }

        .hero-blur {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.2;
          z-index: 0;
        }

        .hero-content {
          flex: 1;
          z-index: 1;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-desc {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-btn {
          padding: 1rem 2rem;
          background: var(--primary);
          color: white;
          border-radius: 1rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .hover-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -10px var(--primary);
        }

        .hero-img-container {
          flex-shrink: 0;
          z-index: 1;
        }

        .hero-img-wrapper {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 4px solid var(--border);
          padding: 10px;
          background: linear-gradient(45deg, var(--primary), transparent);
        }

        .hero-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .hero-card {
            padding: 3rem;
            gap: 2.5rem;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-img-wrapper {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .hero-card {
            flex-direction: column-reverse;
            text-align: center;
            padding: 2.5rem 1.5rem;
            gap: 2rem;
            margin-top: 6rem;
          }
          .hero-desc {
            margin: 0 auto 2rem;
            font-size: 1.1rem;
          }
          .hero-img-wrapper {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCard;
