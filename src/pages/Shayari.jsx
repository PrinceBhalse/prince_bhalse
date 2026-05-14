import React, { useEffect } from 'react';

const Shayari = () => {
  useEffect(() => {
    document.body.classList.add('theme-shayari');
    return () => document.body.classList.remove('theme-shayari');
  }, []);

  const sections = [
    { title: 'Shayari', content: 'Dil se jo baat nikalti hai, asar rakhti hai...' },
    { title: 'Gazal', content: 'Suna hai log use aankh bhar ke dekhte hain...' },
    { title: 'Nazm', content: 'Woh jo hum mein tum mein qarar tha...' },
    { title: 'Geet', content: 'Zindagi ki na toote ladi, pyaar kar le...' },
  ];

  return (
    <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <header style={{ marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '4rem', color: '#b22222', marginBottom: '1rem' }}>The Inkwell</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>Echoes of the soul in words.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {sections.map((section) => (
          <div key={section.title} className="rekhta-card" style={{
            padding: '3rem',
            border: '1px solid rgba(0,0,0,0.05)',
            background: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            borderRadius: '2px'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginBottom: '2rem',
              borderBottom: '2px solid #b22222',
              display: 'inline-block'
            }}>
              {section.title}
            </h2>
            <p style={{ 
              fontSize: '1.5rem', 
              lineHeight: '2.5rem', 
              color: '#555',
              fontFamily: "'Playfair Display', serif"
            }}>
              {section.content}
            </p>
            <button style={{ marginTop: '2rem', color: '#b22222', fontWeight: '600' }}>
              Explore More →
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .rekhta-card {
          transition: var(--transition);
        }
        .rekhta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default Shayari;
