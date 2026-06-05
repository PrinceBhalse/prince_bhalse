import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogPostDetail = () => {
  const { slug } = useParams();
  
  // Find the post matching the slug
  const post = blogsData.find((b) => b.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container section-padding error-container">
        <div className="glass error-card">
          <h2>Post Not Found</h2>
          <p>The writing you are looking for has returned to the digital void.</p>
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} /> Return to Blog
          </Link>
        </div>
        <style>{`
          .error-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 60vh;
            text-align: center;
          }
          .error-card {
            padding: 3rem;
            max-width: 500px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .error-card h2 {
            font-size: 2.25rem;
            color: var(--text);
          }
          .error-card p {
            color: var(--text-muted);
            line-height: 1.6;
          }
          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary);
            font-weight: 600;
            transition: var(--transition);
          }
          .back-link:hover {
            color: var(--primary-hover);
            transform: translateX(-4px);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container section-padding animate-fade-in">
      <title>{`${post.title} | Prince Bhalse's Blog`}</title>
      <meta name="description" content={post.summary || "A blog post by Prince Bhalse."} />
      {post.tags && post.tags.length > 0 && (
        <meta name="keywords" content={post.tags.join(', ')} />
      )}
      {/* Back Navigation */}
      <div className="navigation-header">
        <Link to="/blog" className="back-button">
          <ArrowLeft size={18} />
          <span>Back to Writings</span>
        </Link>
      </div>

      <article className="blog-post-detail">
        {/* Post Metadata Header */}
        <header className="post-header">
          <div className="post-category-badge">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta-container">
            <div className="meta-item">
              <Calendar size={15} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="meta-divider">•</div>
            <div className="meta-item">
              <Clock size={15} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="post-hero-image">
          {post.image ? (
            <img src={post.image} alt={post.title} className="hero-img" />
          ) : null}
        </div>

        {/* Main Content */}
        <div className="post-content-container">
          {post.content.map((paragraph, index) => {
            // Trim whitespace
            const text = paragraph.trim();
            if (!text) return null;

            // 1. Check for standard markdown image: ![alt text](url)
            const mdImageMatch = text.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (mdImageMatch) {
              const [, alt, src] = mdImageMatch;
              return (
                <div key={index} className="blog-scene-image">
                  <img src={src} alt={alt} className="scene-img" />
                </div>
              );
            }

            // 2. Check for bracket image: [image: url] or [image: url|alt]
            const bracketImageMatch = text.match(/^\[image:\s*(.*?)(?:\|(.*?))?\]$/i);
            if (bracketImageMatch) {
              const [, src, alt = "Blog Detail Image"] = bracketImageMatch;
              return (
                <div key={index} className="blog-scene-image">
                  <img src={src.trim()} alt={alt.trim()} className="scene-img" />
                </div>
              );
            }

            // 3. Check for H3 heading: ### heading
            if (text.startsWith('### ')) {
              return (
                <h3 key={index} className="blog-subheading">
                  {text.replace('### ', '')}
                </h3>
              );
            }

            // 4. Check for H2 heading: ## heading
            if (text.startsWith('## ')) {
              return (
                <h2 key={index} className="blog-heading">
                  {text.replace('## ', '')}
                </h2>
              );
            }

            // Default: regular paragraph
            return (
              <p key={index} className="post-paragraph">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags footer */}
        {post.tags && post.tags.length > 0 && (
          <footer className="post-footer">
            <div className="tags-container">
              <Tag size={16} className="tag-icon" />
              {post.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        )}
      </article>

      <style>{`
        .navigation-header {
          margin-bottom: 3rem;
        }
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 1rem;
          transition: var(--transition);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
        }
        .back-button:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.05);
          transform: translateX(-4px);
        }
        .blog-post-detail {
          max-width: 800px;
          margin: 0 auto;
        }
        .post-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .post-category-badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1.25rem;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        .post-title {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .post-meta-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .meta-divider {
          color: var(--border);
        }
        .post-hero-image {
          width: 100%;
          height: 400px;
          border: 1px solid var(--border);
          border-radius: 2rem;
          margin-bottom: 4rem;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(3, 7, 18, 0.8) 100%);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 2rem;
          transition: transform 0.6s ease;
        }
        .post-hero-image:hover .hero-img {
          transform: scale(1.03);
        }
        .post-content-container {
          font-size: 1.15rem;
          line-height: 1.85;
          color: rgba(249, 250, 251, 0.85);
          font-family: 'Inter', sans-serif;
          margin-bottom: 4rem;
        }
        .post-paragraph {
          margin-bottom: 2rem;
          text-align: justify;
        }
        .blog-scene-image {
          width: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          margin: 1rem 0 2.5rem;
          border: 1px solid var(--border);
          box-shadow: 0 4px 30px rgba(0,0,0,0.4);
          position: relative;
        }
        .scene-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 1.5rem;
          transition: transform 0.6s ease;
        }
        .blog-scene-image:hover .scene-img {
          transform: scale(1.02);
        }
        .blog-heading {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text);
          margin: 3.5rem 0 1.5rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .blog-subheading {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--primary);
          margin: 3rem 0 1.25rem;
          letter-spacing: -0.02em;
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
        }
        .post-paragraph:first-of-type::first-letter {
          font-size: 3.5rem;
          float: left;
          font-weight: 800;
          line-height: 1;
          margin-right: 0.75rem;
          color: var(--primary);
          font-family: 'Outfit', sans-serif;
        }
        .post-footer {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          margin-bottom: 4rem;
        }
        .tags-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .tag-icon {
          color: var(--text-muted);
          margin-right: 0.5rem;
        }
        .tag-badge {
          font-size: 0.9rem;
          color: var(--text-muted);
          padding: 0.35rem 0.85rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .tag-badge:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .blog-post-detail {
            padding: 0 1.25rem;
          }
          .navigation-header {
            margin-bottom: 2rem;
            padding: 0 1.25rem;
          }
          .post-title {
            font-size: 2.25rem;
          }
          .post-hero-image {
            height: 220px;
            margin-bottom: 2.5rem;
            border-radius: 1.25rem;
            overflow: hidden;
          }
          .hero-img {
            border-radius: 1.25rem;
          }
          .post-content-container {
            font-size: 1.1rem;
            line-height: 1.85;
          }
          .post-paragraph {
            margin-bottom: 1.5rem;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
