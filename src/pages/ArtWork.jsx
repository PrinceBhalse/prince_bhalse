import React, { useState } from 'react';
import artItems from '../data/artwork.json';

const ArtWork = () => {
  const [filter, setFilter] = useState('All');


  const filteredItems = filter === 'All' ? artItems : artItems.filter(item => item.category === filter);

  return (
    <div className="container section-padding">
      <title>Art Gallery & Exhibition | Prince Bhalse</title>
      <meta name="description" content="View sketches, paintings, digital art, and creative exhibitions designed and crafted by Prince Bhalse." />
      <meta name="keywords" content="Prince Bhalse Art, Digital Art Prince Bhalse, sketches, paintings, exhibition hall" />
      <h1 className="artwork-title">Exhibition Hall</h1>
      
      <div className="artwork-filters">
        {['All', 'Paintings', 'Digital Art', 'Sketches'].map((cat) => (
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

      <div className="artwork-grid">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="glass art-card" style={{ padding: '1rem', overflow: 'hidden' }}>
            <div style={{ overflow: 'hidden', borderRadius: '1rem' }}>
              <img 
                src={item.img} 
                alt={item.title} 
                className="art-img"
              />
            </div>
            <div style={{ padding: '1.5rem 1rem 0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .artwork-title {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .artwork-filters {
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
        }
        .filter-btn:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-2px);
        }
        .artwork-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .art-img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .art-card:hover .art-img {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .artwork-title {
            font-size: 2.5rem;
          }
          .artwork-filters {
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
          .filter-btn {
            padding: 0.4rem 1.2rem;
            font-size: 0.9rem;
          }
          .artwork-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtWork;
