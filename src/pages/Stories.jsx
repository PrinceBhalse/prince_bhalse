import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import storiesData from '../data/stories.json';

const Stories = () => {
  // Sort stories by date descending
  const sortedStories = [...storiesData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate indices for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentStories = sortedStories.slice(indexOfFirstPost, indexOfLastPost);

  // Total pages
  const totalPages = Math.ceil(sortedStories.length / postsPerPage);

  return (
    <div className="container section-padding animate-fade-in">
      <header className="stories-header">
        <h1 className="stories-title">My Stories</h1>
        <p className="stories-subtitle">Tales, narratives, and creative writing.</p>
      </header>

      <div className="stories-list">
        {currentStories.map((story) => (
          <article key={story.id} className="glass story-card">
            <div className="story-post-meta">
              <span className="story-post-category">{story.category}</span>
              <span className="meta-divider">•</span>
              <span className="story-post-date">
                {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="meta-divider">•</span>
              <span className="story-post-readtime">{story.readTime}</span>
            </div>
            <h2 className="story-post-title">{story.title}</h2>
            <p className="story-post-summary">{story.summary}</p>
            <Link to={`/stories/${story.slug}`} className="read-more-btn">
              Read Story <span className="arrow">→</span>
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="page-btn"
              style={{
                background: currentPage === page ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
                borderColor: currentPage === page ? 'var(--primary)' : 'var(--border)',
                color: '#ffffff'
              }}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button 
              onClick={() => setCurrentPage((prev) => prev + 1)} 
              className="page-btn"
              style={{ width: 'auto', padding: '0 1.25rem', borderRadius: '2rem' }}
            >
              Next
            </button>
          )}
        </div>
      )}

      <style>{`
        .stories-header {
          margin-bottom: 4rem;
          text-align: center;
        }
        .stories-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .stories-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
        }
        .stories-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .story-card {
          padding: 2.5rem;
          transition: var(--transition);
        }
        .story-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }
        .story-post-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .story-post-category {
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .meta-divider {
          color: var(--border);
        }
        .story-post-date, .story-post-readtime {
          color: var(--text-muted);
        }
        .story-post-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .story-post-summary {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .read-more-btn {
          font-weight: 600;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .read-more-btn .arrow {
          transition: transform 0.3s ease;
        }
        .read-more-btn:hover {
          color: var(--primary-hover);
        }
        .read-more-btn:hover .arrow {
          transform: translateX(4px);
        }
        .pagination {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .page-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--text);
          background: rgba(255, 255, 255, 0.02);
          font-weight: 500;
          transition: var(--transition);
        }
        .page-btn:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .stories-header {
            margin-bottom: 2.5rem;
          }
          .stories-title {
            font-size: 2.5rem;
          }
          .stories-subtitle {
            font-size: 1.1rem;
          }
          .story-card {
            padding: 1.75rem;
          }
          .story-post-title {
            font-size: 1.6rem;
            margin-bottom: 0.75rem;
          }
          .story-post-summary {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }
          .story-post-meta {
            font-size: 0.8rem;
            gap: 0.5rem;
          }
          .pagination {
            margin-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Stories;
