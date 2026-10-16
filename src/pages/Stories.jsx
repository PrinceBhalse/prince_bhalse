import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';
import storiesData from '../data/stories.json';

const Stories = () => {
  usePageSEO({
    title: 'Stories & Narratives | Prince Bhalse',
    description: 'Explore original stories, narrative thrillers, crime drama, and fiction written by Prince Bhalse.',
    keywords: 'Prince Bhalse Stories, Prince Bhalse Writer, Prince Bhalse Creative Writing, Prince Bhalse Fiction, Short Stories'
  });

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
        <h1 className="stories-title">Stories & Narratives</h1>
        <p className="stories-subtitle">Tales of mystery, crime drama, suspense, and human nature.</p>
      </header>

      <AnimatedSection>
        <div className="stories-list">
          {currentStories.map((story) => (
            <article key={story.id} className="glass story-card">
              <div className="story-post-meta">
                <span className="story-post-category">{story.category}</span>
                <span className="meta-divider" aria-hidden="true">•</span>
                <time className="story-post-date" dateTime={story.date}>
                  {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="meta-divider" aria-hidden="true">•</span>
                <span className="story-post-readtime">{story.readTime}</span>
              </div>
              <h2 className="story-post-title">
                <Link to={`/stories/${story.slug}`} className="story-title-link">
                  {story.title}
                </Link>
              </h2>
              <p className="story-post-summary">{story.summary}</p>
              <Link to={`/stories/${story.slug}`} className="read-more-btn" aria-label={`Read story: ${story.title}`}>
                Read Story <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Stories pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button 
              onClick={() => setCurrentPage((prev) => prev + 1)} 
              className="page-btn next-btn"
              aria-label="Next page"
            >
              Next →
            </button>
          )}
        </nav>
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
          border-radius: 1.5rem;
          transition: var(--transition);
        }
        .story-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
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
        }
        .story-title-link {
          color: var(--text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .story-title-link:hover {
          color: var(--primary);
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
          text-decoration: none;
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
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--text);
          background: rgba(255, 255, 255, 0.03);
          font-weight: 600;
          transition: var(--transition);
          cursor: pointer;
        }
        .page-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }
        .page-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.35);
        }
        .page-btn.next-btn {
          width: auto;
          padding: 0 1.5rem;
          border-radius: 2rem;
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
