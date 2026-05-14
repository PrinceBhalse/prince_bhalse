import React, { useState } from 'react';

const ArtWork = () => {
  const [filter, setFilter] = useState('All');

  const artItems = [
    { title: 'Golden Hour', category: 'Paintings', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600' },
    { title: 'Cyberpunk City', category: 'Digital Art', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600' },
    { title: 'Soul Sketch', category: 'Sketches', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Abstract Flow', category: 'Paintings', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600' },
    { title: 'Neon Dream', category: 'Digital Art', img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=600' },
    { title: 'Mountain Line', category: 'Sketches', img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600' },
  ];

  const filteredItems = filter === 'All' ? artItems : artItems.filter(item => item.category === filter);

  return (
    <div className="container section-padding">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', textAlign: 'center' }}>Exhibition Hall</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
        {['All', 'Paintings', 'Digital Art', 'Sketches'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            style={{ 
              padding: '0.5rem 1.5rem', 
              borderRadius: '2rem', 
              background: filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              transition: 'var(--transition)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        {filteredItems.map((item, idx) => (
          <div key={idx} className="glass art-card" style={{ padding: '1rem', overflow: 'hidden' }}>
            <div style={{ overflow: 'hidden', borderRadius: '1rem' }}>
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '1', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
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
        .art-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ArtWork;
