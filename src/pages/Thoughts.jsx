import React from 'react';

const Thoughts = () => {
  const thoughts = [
    { text: "Code is poetry that executes.", author: "Prince Bhalse" },
    { text: "The best way to predict the future is to build it.", author: "Alan Kay" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Architecture is where science and art meet.", author: "Unknown" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  ];

  return (
    <div className="container section-padding">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>Daily Musings</h1>
      
      <div style={{ 
        columnCount: window.innerWidth > 768 ? 2 : 1, 
        columnGap: '2rem' 
      }}>
        {thoughts.map((thought, idx) => (
          <div key={idx} className="glass" style={{ 
            padding: '2.5rem', 
            marginBottom: '2rem', 
            breakInside: 'avoid',
            display: 'inline-block',
            width: '100%'
          }}>
            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.4' }}>
              "{thought.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '30px', height: '2px', background: 'var(--primary)' }} />
              <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>{thought.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
