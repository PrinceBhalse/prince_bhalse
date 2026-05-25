import React from 'react';

const Blog = () => {
  const blogs = [
    { id: 1, title: 'The Future of Agentic AI', summary: 'Exploring how autonomous agents are reshaping the software landscape.' },
    { id: 2, title: 'Minimalism in Digital Design', summary: 'Why less is often more when it comes to user interfaces.' },
    { id: 3, title: 'The Art of Modern Poetry', summary: 'Bridging the gap between traditional verse and digital mediums.' },
    { id: 4, title: 'Architecture of Scale', summary: 'Building systems that grow with your user base.' },
    { id: 5, title: 'Sustainable Coding Practices', summary: 'How to write efficient code that lasts a lifetime.' },
  ];

  return (
    <div className="container section-padding">
      <header className="blog-header">
        <h1 className="blog-title">Most Viewed Blogs</h1>
        <p className="blog-subtitle">Insights, tutorials, and stories.</p>
      </header>

      <div className="blog-list">
        {blogs.map((blog) => (
          <article key={blog.id} className="glass blog-card">
            <h2 className="blog-post-title">{blog.title}</h2>
            <p className="blog-post-summary">{blog.summary}</p>
            <button className="read-more-btn">
              Read More <span className="arrow">→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Next</button>
      </div>

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
          background: var(--primary);
          border-color: var(--primary);
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
          .pagination {
            margin-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
