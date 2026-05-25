import React from 'react';
import HeroCard from '../components/HeroCard';
import profileImg from '../assets/profile.png';

const Home = () => {
  return (
    <div className="container section-padding">
      <HeroCard profileImg={profileImg} />
      
      <div className="home-garden-section">
        <h2 className="home-garden-title">Latest From The Garden</h2>
        <div className="home-garden-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass garden-card">
              <div className="garden-card-thumbnail" />
              <h3 style={{ marginBottom: '1rem' }}>Featured Entry {i}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                A glimpse into the latest thoughts, projects, or artwork shared in this digital reality.
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .home-garden-section {
          margin-top: 8rem;
          text-align: center;
        }
        .home-garden-title {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .home-garden-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .garden-card {
          padding: 2rem;
          text-align: left;
        }
        .garden-card-thumbnail {
          width: 100%;
          height: 200px;
          background: rgba(255,255,255,0.05);
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .home-garden-section {
            margin-top: 5rem;
          }
          .home-garden-title {
            font-size: 2.25rem;
            margin-bottom: 1.5rem;
          }
          .home-garden-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .garden-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
