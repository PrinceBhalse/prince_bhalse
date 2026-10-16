import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Feather } from 'lucide-react';
import poetryItems from '../data/shayari.json';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';

const CATEGORIES = ['All', 'Shayari', 'Sher', 'Poem', 'Gazal', 'Nazm', 'Geet'];

const Shayari = () => {
  usePageSEO({
    title: 'The Inkwell - Poetry & Shayari | Prince Bhalse',
    description: "Explore Prince Bhalse's collection of poetry including Urdu Shayari, Sher, Hindi Poems, Gazals, and Nazms.",
    keywords: 'Prince Bhalse Shayari, Prince Bhalse Poetry, Prince Bhalse Poems, Hindi Shayari, Urdu Shayari, Gazal, Nazm, Sher'
  });

  const [filter, setFilter] = useState('All');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filteredItems = filter === 'All' 
    ? poetryItems 
    : poetryItems.filter(item => item.category === filter);

  const handleCopy = (content, title, idx) => {
    const textToCopy = `${title}\n\n${content}\n\n— Prince Bhalse\nhttps://prince-bhalse.vercel.app/shayari`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="container section-padding animate-fade-in" style={{ textAlign: 'center' }}>
      <header className="shayari-header">
        <div className="feather-icon-wrapper" aria-hidden="true">
          <Feather size={28} className="feather-icon" />
        </div>
        <h1 className="shayari-title">The Inkwell</h1>
        <p className="shayari-subtitle">Echoes of the soul, whispered in verses, rhymes, and rhythms.</p>
      </header>

      {/* Category Filters */}
      <nav className="shayari-filters" aria-label="Poetry categories">
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

      {/* Poetry Grid with Animations */}
      <AnimatedSection>
        <motion.div layout className="poetry-grid">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={`${item.title}-${idx}`} 
                className="glass poetry-card"
              >
                <div className="poetry-card-top">
                  <span className="poetry-category">{item.category}</span>
                  <button 
                    onClick={() => handleCopy(item.content, item.title, idx)}
                    className="copy-btn"
                    title="Copy poem"
                    aria-label={`Copy poem: ${item.title}`}
                  >
                    {copiedIndex === idx ? (
                      <span className="copied-text"><Check size={14} /> Copied</span>
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                <h2 className="poetry-title">{item.title}</h2>
                
                <div className="poetry-content">
                  {item.content.split('\n').map((line, lineIdx) => (
                    <p key={lineIdx} className="poetry-line">
                      {line}
                    </p>
                  ))}
                </div>

                {item.date && (
                  <footer className="poetry-footer">
                    <span className="poetry-date">
                      {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                  </footer>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      <style>{`
        .shayari-header {
          margin-bottom: 3.5rem;
        }
        .feather-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          margin-bottom: 1.5rem;
        }
        .feather-icon {
          color: var(--primary);
        }
        .shayari-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .shayari-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          font-style: italic;
        }
        .shayari-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.55rem 1.5rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          color: var(--text);
          background: rgba(255, 255, 255, 0.03);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          cursor: pointer;
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
        .poetry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .poetry-card {
          padding: 2.5rem 2rem;
          border-radius: 1.75rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          position: relative;
        }
        .poetry-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
        }
        .poetry-card-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .poetry-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.25rem 0.65rem;
          border-radius: 0.5rem;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }
        .copy-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text-muted);
          border-radius: 0.5rem;
          padding: 0.35rem 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .copy-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }
        .copied-text {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary);
          font-weight: 600;
        }
        .poetry-title {
          font-size: 1.75rem;
          color: var(--text);
          margin-bottom: 1.5rem;
          font-family: 'Outfit', sans-serif;
        }
        .poetry-content {
          margin-bottom: 2rem;
          width: 100%;
        }
        .poetry-line {
          font-size: 1.25rem;
          line-height: 2.2rem;
          color: var(--text);
          opacity: 0.9;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          margin: 0.25rem 0;
        }
        .poetry-footer {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
          width: 100%;
        }
        .poetry-date {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .shayari-header {
            margin-bottom: 2.5rem;
          }
          .shayari-title {
            font-size: 2.75rem;
          }
          .shayari-filters {
            gap: 0.75rem;
            margin-bottom: 2.5rem;
          }
          .filter-btn {
            padding: 0.45rem 1.2rem;
            font-size: 0.85rem;
          }
          .poetry-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .poetry-card {
            padding: 2rem 1.5rem;
          }
          .poetry-line {
            font-size: 1.15rem;
            line-height: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Shayari;
