import React from 'react';
import { Link } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import profileImg from '../assets/profile.png';

// Import all content data
import blogsData from '../data/blogs.json';
import storiesData from '../data/stories.json';
import shayariData from '../data/shayari.json';
import thoughtsData from '../data/thoughts.json';
import projectsData from '../data/projects.json';
import artworkData from '../data/artwork.json';

const Home = () => {
  // Normalize and merge data
  const normalizedContent = [
    ...blogsData.map(item => ({
      id: `blog-${item.id}-${item.slug}`,
      title: item.title,
      summary: item.summary,
      date: item.date,
      contentType: 'Blog',
      link: `/blog/${item.slug}`,
      meta: item.readTime,
      designType: 'gradient'
    })),
    ...storiesData.map(item => ({
      id: `story-${item.id}-${item.slug}`,
      title: item.title,
      summary: item.summary,
      date: item.date,
      contentType: 'Story',
      link: `/stories/${item.slug}`,
      meta: item.readTime,
      designType: 'gradient'
    })),
    ...shayariData.map(item => ({
      id: `shayari-${item.title}-${item.date}`,
      title: item.title,
      summary: item.content.split('\n')[0] + '...',
      date: item.date,
      contentType: 'Shayari',
      link: `/shayari`,
      meta: item.category,
      designType: 'poetry',
      fullText: item.content
    })),
    ...thoughtsData.map(item => ({
      id: `thought-${item.author}-${item.date}`,
      title: `Thought by ${item.author}`,
      summary: `"${item.text}"`,
      date: item.date,
      contentType: 'Thought',
      link: `/thoughts`,
      meta: 'Musing',
      designType: 'thought'
    })),
    ...projectsData.map(item => ({
      id: `project-${item.title}-${item.date}`,
      title: item.title,
      summary: item.desc,
      date: item.date,
      contentType: 'Project',
      link: `/projects`,
      meta: 'Software Lab',
      thumbnail: item.thumbnail,
      designType: 'media'
    })),
    ...artworkData.map(item => ({
      id: `art-${item.title}-${item.date}`,
      title: item.title,
      summary: `Exhibition piece under ${item.category}`,
      date: item.date,
      contentType: 'Art Work',
      link: `/art-work`,
      meta: item.category,
      thumbnail: item.img,
      designType: 'media'
    }))
  ];

  // Sort by date descending and grab the top 3
  const latestGardenEntries = normalizedContent
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="container section-padding animate-fade-in">
      <HeroCard profileImg={profileImg} />
      
      <div className="home-garden-section">
        <h2 className="home-garden-title">Latest From The Garden</h2>
        <div className="home-garden-grid">
          {latestGardenEntries.map((entry) => (
            <Link to={entry.link} key={entry.id} className="glass garden-card">
              {entry.designType === 'media' && (
                <div 
                  className="garden-card-thumbnail" 
                  style={{ backgroundImage: `url(${entry.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <span className="garden-card-category">{entry.contentType}</span>
                </div>
              )}
              {entry.designType === 'gradient' && (
                <div className="garden-card-thumbnail gradient-bg">
                  <span className="garden-card-category">{entry.contentType}</span>
                </div>
              )}
              {entry.designType === 'poetry' && (
                <div className="garden-card-thumbnail poetry-bg">
                  <span className="garden-card-category">{entry.contentType}</span>
                  <div className="poetry-excerpt">
                    "{entry.fullText.split('\n')[0]}"
                  </div>
                </div>
              )}
              {entry.designType === 'thought' && (
                <div className="garden-card-thumbnail thought-bg">
                  <span className="garden-card-category">{entry.contentType}</span>
                  <div className="quote-mark">“</div>
                </div>
              )}
              
              <div className="garden-card-meta">
                <span>{new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>•</span>
                <span>{entry.meta}</span>
              </div>
              <h3>{entry.title}</h3>
              <p className="garden-card-summary">{entry.summary}</p>
            </Link>
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
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .home-garden-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .garden-card {
          padding: 2rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }
        .garden-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.1);
        }
        .garden-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text);
          transition: var(--transition);
        }
        .garden-card:hover h3 {
          color: var(--primary);
        }
        .garden-card-summary {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .garden-card-thumbnail {
          width: 100%;
          height: 160px;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .garden-card-thumbnail::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: var(--transition);
          top: 0;
          left: 0;
        }
        .garden-card:hover .garden-card-thumbnail::before {
          opacity: 1;
        }
        .gradient-bg {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%), rgba(255,255,255,0.01);
        }
        .poetry-bg {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%), rgba(255,255,255,0.01);
        }
        .poetry-excerpt {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--text-muted);
          text-align: center;
          padding: 0 1rem;
          line-height: 1.5;
          margin-top: 1rem;
          z-index: 1;
        }
        .thought-bg {
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%), rgba(255,255,255,0.01);
        }
        .quote-mark {
          font-size: 5rem;
          font-family: 'Outfit', sans-serif;
          color: rgba(99, 102, 241, 0.15);
          line-height: 0;
          margin-top: 2rem;
          z-index: 1;
        }
        .garden-card-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.75rem;
          border-radius: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          z-index: 1;
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
        }
        .garden-card-meta {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
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
