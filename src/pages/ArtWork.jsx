import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import artItems from '../data/artwork.json';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';

const CATEGORIES = ['All', 'Paintings', 'Digital Art', 'Sketches'];

const ArtWork = () => {
  usePageSEO({
    title: 'Exhibition Hall & Art Gallery | Prince Bhalse',
    description: 'View sketches, paintings, digital art, and creative exhibitions designed and crafted by Prince Bhalse.',
    keywords: 'Prince Bhalse Art, Digital Art Prince Bhalse, sketches, paintings, exhibition hall, digital gallery'
  });

  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? artItems 
    : artItems.filter(item => item.category === filter);

  return (
    <div className="container section-padding animate-fade-in">
      <header className="artwork-header">
        <h1 className="artwork-title">Exhibition Hall</h1>
        <p className="artwork-subtitle">Visual explorations through canvas, sketches, and digital illustration.</p>
      </header>
      
      {/* Category Filter Pills */}
      <nav className="artwork-filters" aria-label="Art categories">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Artwork Grid with Animated Layout */}
      <AnimatedSection>
        <motion.div layout className="artwork-grid">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={`${item.title}-${idx}`} 
                className="glass art-card"
              >
                <div className="art-img-wrapper">
                  <LazyImage 
                    src={item.img} 
                    alt={`Artwork: ${item.title} by Prince Bhalse (${item.category})`} 
                    aspectRatio="1 / 1"
                    className="art-img"
                  />
                  <span className="art-category-pill">{item.category}</span>
                </div>
                <div className="art-card-details">
                  <h3 className="art-card-title">{item.title}</h3>
                  {item.date && (
                    <span className="art-card-date">
                      {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      <style>{`
        .artwork-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .artwork-title {
          font-size: 3.5rem;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .artwork-subtitle {
          color: var(--text-muted);
          font-size: 1.15rem;
        }
        .artwork-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.55rem 1.6rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          color: var(--text);
          background: rgba(255, 255, 255, 0.03);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.35);
        }
        .artwork-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .art-card {
          padding: 1.25rem;
          border-radius: 1.5rem;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .art-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
        }
        .art-img-wrapper {
          overflow: hidden;
          border-radius: 1.25rem;
          position: relative;
          border: 1px solid var(--border);
          background: var(--bg-secondary);
        }
        .art-category-pill {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.3rem 0.7rem;
          border-radius: 0.5rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 2;
        }
        .art-card-details {
          padding: 1.25rem 0.5rem 0.25rem;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .art-card-title {
          font-size: 1.25rem;
          color: var(--text);
          font-weight: 600;
        }
        .art-card-date {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .artwork-title {
            font-size: 2.5rem;
          }
          .artwork-filters {
            gap: 0.75rem;
            margin-bottom: 2.5rem;
          }
          .filter-btn {
            padding: 0.45rem 1.2rem;
            font-size: 0.85rem;
          }
          .artwork-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtWork;
