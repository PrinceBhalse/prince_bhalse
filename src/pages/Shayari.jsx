import React from 'react';

const Shayari = () => {
  const sections = [
    { title: 'Shayari', content: 'Dil se jo baat nikalti hai, asar rakhti hai...' },
    { title: 'Gazal', content: 'Suna hai log use aankh bhar ke dekhte hain...' },
    { title: 'Nazm', content: 'Woh jo hum mein tum mein qarar tha...' },
    { title: 'Geet', content: 'Zindagi ki na toote ladi, pyaar kar le...' },
  ];

  return (
    <div className="container section-padding" style={{ textAlign: 'center' }}>
      <header className="shayari-header">
        <h1 className="shayari-title">The Inkwell</h1>
        <p className="shayari-subtitle">Echoes of the soul in words.</p>
      </header>

      <div className="shayari-grid">
        {sections.map((section) => (
          <div key={section.title} className="glass rekhta-card">
            <h2 className="rekhta-title">
              {section.title}
            </h2>
            <p className="rekhta-content">
              "{section.content}"
            </p>
            <button className="explore-btn">
              Explore More <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .shayari-header {
          margin-bottom: 6rem;
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
        .shayari-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 4rem;
        }
        .rekhta-card {
          padding: 3rem;
          border-radius: 1.5rem;
          transition: var(--transition);
        }
        .rekhta-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }
        .rekhta-title {
          font-size: 2.5rem;
          color: var(--text);
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--primary);
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .rekhta-content {
          font-size: 1.5rem;
          line-height: 2.5rem;
          color: var(--text-muted);
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        .explore-btn {
          margin-top: 2rem;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .explore-btn .arrow {
          transition: transform 0.3s ease;
        }
        .explore-btn:hover .arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .shayari-header {
            margin-bottom: 3.5rem;
          }
          .shayari-title {
            font-size: 2.75rem;
          }
          .shayari-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .rekhta-card {
            padding: 2rem;
          }
          .rekhta-title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
          .rekhta-content {
            font-size: 1.25rem;
            line-height: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Shayari;
