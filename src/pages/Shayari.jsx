import React, { useState } from 'react';
import poetryItems from '../data/shayari.json';

const Shayari = () => {
  const [filter, setFilter] = useState('All');


  const filteredItems = filter === 'All' ? poetryItems : poetryItems.filter(item => item.category === filter);

  return (
    <div className="container section-padding" style={{ textAlign: 'center' }}>
      <header className="shayari-header">
        <h1 className="shayari-title">The Inkwell</h1>
        <p className="shayari-subtitle">Echoes of the soul in words.</p>
      </header>

      {/* Category Filters */}
      <div className="shayari-filters">
        {['All', 'Shayari', 'Sher', 'Poem', 'Gazal', 'Nazm', 'Geet'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="filter-btn"
            style={{
              background: filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              borderColor: filter === cat ? 'var(--primary)' : 'var(--border)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Poetry Grid */}
      <div className="poetry-grid">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="glass poetry-card">
            <span className="poetry-category">{item.category}</span>
            <h2 className="poetry-title">{item.title}</h2>
            <p className="poetry-content">
              {item.content.split('\n').map((line, lineIdx) => (
                <span key={lineIdx} style={{ display: 'block', marginBottom: '0.5rem' }}>
                  {line}
                </span>
              ))}
            </p>
            <button className="explore-btn">
              Explore More <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .shayari-header {
          margin-bottom: 3rem;
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
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          color: var(--text);
          font-weight: 500;
          transition: var(--transition);
          cursor: pointer;
        }
        .filter-btn:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-2px);
        }
        .poetry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .poetry-card {
          padding: 3rem 2.5rem;
          border-radius: 1.5rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
        }
        .poetry-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }
        .poetry-category {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .poetry-title {
          font-size: 1.75rem;
          color: var(--text);
          margin-bottom: 1.5rem;
        }
        .poetry-content {
          font-size: 1.3rem;
          line-height: 2.4rem;
          color: var(--text-muted);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          margin-bottom: 2rem;
        }
        .explore-btn {
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }
        .explore-btn .arrow {
          transition: transform 0.3s ease;
        }
        .explore-btn:hover .arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .shayari-header {
            margin-bottom: 2.5rem;
          }
          .shayari-title {
            font-size: 2.75rem;
          }
          .shayari-filters {
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
          .filter-btn {
            padding: 0.4rem 1.2rem;
            font-size: 0.9rem;
          }
          .poetry-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .poetry-card {
            padding: 2rem 1.5rem;
          }
          .poetry-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .poetry-content {
            font-size: 1.15rem;
            line-height: 2rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Shayari;
