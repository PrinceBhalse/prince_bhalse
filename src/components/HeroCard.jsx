import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroCard = ({ profileImg, profileWebp }) => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('.home-garden-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="glass hero-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Decorative Blur */}
      <div className="hero-blur" aria-hidden="true" />

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting Digital <span style={{ color: 'var(--primary)' }}>Realities.</span>
        </motion.h1>
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          I'm Prince Bhalse, a software architect, writer, and digital artist. Exploring the intersection of code, literature, and visual storytelling.
        </motion.p>
        <motion.button
          className="hover-btn hero-btn"
          onClick={scrollToContent}
          aria-label="Explore my work in the digital garden below"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore My Work
          <ArrowDown size={18} style={{ marginLeft: '0.5rem' }} />
        </motion.button>
      </div>

      <motion.div
        className="hero-img-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="hero-img-wrapper">
          <picture>
            {profileWebp && <source srcSet={profileWebp} type="image/webp" />}
            <img 
              src={profileImg} 
              alt="Prince Bhalse - Software Architect, Writer, and Digital Artist" 
              className="hero-img"
              width="300"
              height="300"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </motion.div>

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
          transition: background 0.5s ease;
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
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border: none;
        }

        .hover-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(var(--primary-rgb), 0.4);
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
          padding: 8px;
          background: linear-gradient(45deg, var(--primary), transparent);
          transition: border-color 0.5s ease, background 0.5s ease;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
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
    </motion.div>
  );
};

export default HeroCard;
