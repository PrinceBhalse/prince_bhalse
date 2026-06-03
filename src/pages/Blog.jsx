import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const Blog = () => {
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
      <title>Writings & Insights | Prince Bhalse</title>
      <meta name="description" content="Read blogs, articles, and essays by Prince Bhalse covering technology, design, minimalism, and personal experiences." />
      <meta name="keywords" content="Prince Bhalse Blog, Prince Bhalse Writings, Prince Bhalse Essays, Prince Bhalse Articles" />
      <header className="blog-header">
        <h1 className="blog-title">Most Viewed Blogs</h1>
        <p className="blog-subtitle">Insights, tutorials, and stories.</p>
      </header>

      <div className="blog-list">
        {currentPosts.map((blog) => (
          <article key={blog.id} className="glass blog-card">
            <div className="blog-post-meta">
              <span className="blog-post-category">{blog.category}</span>
              <span className="meta-divider">•</span>
              <span className="blog-post-date">
                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="meta-divider">•</span>
              <span className="blog-post-readtime">{blog.readTime}</span>
            </div>
            <h2 className="blog-post-title">{blog.title}</h2>
            <p className="blog-post-summary">{blog.summary}</p>
            <Link to={`/blog/${blog.slug}`} className="read-more-btn">
              Read More <span className="arrow">→</span>
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
          transition: var(--transition);
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
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
          color: var(--text);
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
