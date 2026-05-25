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
      <h1 className="thoughts-title">Daily Musings</h1>
      
      <div className="thoughts-grid">
        {thoughts.map((thought, idx) => (
          <div key={idx} className="glass thought-card">
            <p className="thought-text">
              "{thought.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '30px', height: '2px', background: 'var(--primary)' }} />
              <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>{thought.author}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .thoughts-title {
          font-size: 3.5rem;
          margin-bottom: 4rem;
          text-align: center;
        }
        .thoughts-grid {
          column-count: 2;
          column-gap: 2rem;
        }
        .thought-card {
          padding: 2.5rem;
          margin-bottom: 2rem;
          break-inside: avoid;
          display: inline-block;
          width: 100%;
        }
        .thought-text {
          font-size: 1.4rem;
          font-style: 'italic';
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .thoughts-title {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }
          .thoughts-grid {
            column-count: 1;
          }
          .thought-card {
            padding: 1.75rem;
            margin-bottom: 1.5rem;
          }
          .thought-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Thoughts;
