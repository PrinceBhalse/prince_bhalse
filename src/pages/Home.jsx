import React from 'react';
import HeroCard from '../components/HeroCard';
import profileImg from '../assets/profile.png';

const Home = () => {
  return (
    <div className="container section-padding">
      <HeroCard profileImg={profileImg} />
      
      <div style={{ marginTop: '8rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Latest From The Garden</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Placeholders for home page content */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'left' }}>
              <div style={{ 
                width: '100%', 
                height: '200px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '1rem',
                marginBottom: '1.5rem'
              }} />
              <h3 style={{ marginBottom: '1rem' }}>Featured Entry {i}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                A glimpse into the latest thoughts, projects, or artwork shared in this digital reality.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
