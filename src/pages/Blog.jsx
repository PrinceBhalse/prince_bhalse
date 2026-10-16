import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';
import blogsData from '../data/blogs.json';

const Blog = () => {
  usePageSEO({
    title: 'Writings & Technical Essays | Prince Bhalse',
    description: 'Read blogs, articles, and essays by Prince Bhalse covering technology, design, minimalism, and personal experiences.',
    keywords: 'Prince Bhalse Blog, Prince Bhalse Writings, Prince Bhalse Essays, Prince Bhalse Articles, Software Architecture'
  });

  // Sort blogs by date descending
  const sortedBlogs = [...blogsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate indices for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  // Total pages
  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);

  return (
    <div className="container section-padding animate-fade-in">
      <header className="blog-header">
        <h1 className="blog-title">Writings & Insights</h1>
        <p className="blog-subtitle">Essays on technology, architecture, creative philosophy, and life.</p>
      </header>

      <AnimatedSection>
        <div className="blog-list">
          {currentPosts.map((blog) => (
            <article key={blog.id} className="glass blog-card">
              <div className="blog-post-meta">
                <span className="blog-post-category">{blog.category}</span>
                <span className="meta-divider" aria-hidden="true">•</span>
                <time className="blog-post-date" dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="meta-divider" aria-hidden="true">•</span>
                <span className="blog-post-readtime">{blog.readTime}</span>
              </div>
              <h2 className="blog-post-title">
                <Link to={`/blog/${blog.slug}`} className="blog-title-link">
                  {blog.title}
                </Link>
              </h2>
              <p className="blog-post-summary">{blog.summary}</p>
              <Link to={`/blog/${blog.slug}`} className="read-more-btn" aria-label={`Read full essay: ${blog.title}`}>
                Read More <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Blog pagination">
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
        .blog-header {
          margin-bottom: 4rem;
          text-align: center;
        }
        .blog-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .blog-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
        }
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .blog-card {
          padding: 2.5rem;
          border-radius: 1.5rem;
          transition: var(--transition);
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
        }
        .blog-post-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .blog-post-category {
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .meta-divider {
          color: var(--border);
        }
        .blog-post-date, .blog-post-readtime {
          color: var(--text-muted);
        }
        .blog-post-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .blog-title-link {
          color: var(--text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .blog-title-link:hover {
          color: var(--primary);
        }
        .blog-post-summary {
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
          .blog-header {
            margin-bottom: 2.5rem;
          }
          .blog-title {
            font-size: 2.5rem;
          }
          .blog-subtitle {
            font-size: 1.1rem;
          }
          .blog-card {
            padding: 1.75rem;
          }
          .blog-post-title {
            font-size: 1.6rem;
            margin-bottom: 0.75rem;
          }
          .blog-post-summary {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }
          .blog-post-meta {
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

export default Blog;
