import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.body.classList.add('theme-blog');
    return () => document.body.classList.remove('theme-blog');
  }, []);

  const blogs = [
    { id: 1, title: 'The Future of Agentic AI', summary: 'Exploring how autonomous agents are reshaping the software landscape.' },
    { id: 2, title: 'Minimalism in Digital Design', summary: 'Why less is often more when it comes to user interfaces.' },
    { id: 3, title: 'The Art of Modern Poetry', summary: 'Bridging the gap between traditional verse and digital mediums.' },
    { id: 4, title: 'Architecture of Scale', summary: 'Building systems that grow with your user base.' },
    { id: 5, title: 'Sustainable Coding Practices', summary: 'How to write efficient code that lasts a lifetime.' },
  ];

  return (
    <div className="container" style={{ padding: '8rem 2rem' }}>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          display: 'inline-block',
          background: 'var(--blog-heading-bg)',
          padding: '0.2rem 1rem',
          marginBottom: '1rem'
        }}>
          Most Viewed 5 Blogs
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Insights, tutorials, and stories.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {blogs.map((blog) => (
          <article key={blog.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{blog.title}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.8 }}>{blog.summary}</p>
            <button style={{ 
              fontWeight: '600', 
              textDecoration: 'underline', 
              textUnderlineOffset: '4px' 
            }}>
              Read More
            </button>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Next</button>
      </div>

      <style>{`
        .page-btn {
          width: 40px;
          height: 40px;
          display: flex;
          alignItems: center;
          justifyContent: center;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          transition: var(--transition);
        }
        .page-btn:hover {
          background: var(--blog-heading-bg);
          border-color: var(--blog-heading-bg);
        }
      `}</style>
    </div>
  );
};

export default Blog;
