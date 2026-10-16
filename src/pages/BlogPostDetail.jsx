import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Check } from 'lucide-react';
import blogsData from '../data/blogs.json';
import LazyImage from '../components/LazyImage';
import { usePageSEO } from '../hooks/usePageSEO';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Find the post matching the slug
  const post = blogsData.find((b) => b.slug === slug);

  // Dynamic SEO
  usePageSEO({
    title: post ? `${post.title} | Prince Bhalse` : 'Post Not Found | Prince Bhalse',
    description: post?.summary || "A blog post by Prince Bhalse exploring code, design, and literature.",
    keywords: post?.tags ? post.tags.join(', ') : 'Prince Bhalse Blog',
    ogImage: post?.image
  });

  // Scroll to top on mount & track scroll progress
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.summary,
          url: url,
        });
      } catch {
        // Fallback to clipboard
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            border-radius: 1.5rem;
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
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Back Navigation & Share */}
      <div className="navigation-header">
        <Link to="/blog" className="back-button" aria-label="Return to writings list">
          <ArrowLeft size={18} />
          <span>Back to Writings</span>
        </Link>
        <button 
          onClick={handleShare}
          className="share-button"
          aria-label="Share this essay"
        >
          {copied ? <Check size={16} color="var(--primary)" /> : <Share2 size={16} />}
          <span>{copied ? 'Link Copied!' : 'Share'}</span>
        </button>
      </div>

      <article className="blog-post-detail">
        {/* Post Metadata Header */}
        <header className="post-header">
          <div className="post-category-badge">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta-container">
            <div className="meta-item">
              <Calendar size={15} aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <div className="meta-divider" aria-hidden="true">•</div>
            <div className="meta-item">
              <Clock size={15} aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {post.image && (
          <div className="post-hero-image">
            <LazyImage 
              src={post.image} 
              alt={post.title} 
              aspectRatio="16 / 9"
              className="hero-img" 
            />
          </div>
        )}

        {/* Main Content */}
        <div className="post-content-container">
          {post.content.map((paragraph, index) => {
            const text = paragraph.trim();
            if (!text) return null;

            // 1. Check for standard markdown image: ![alt text](url)
            const mdImageMatch = text.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (mdImageMatch) {
              const [, alt, src] = mdImageMatch;
              return (
                <div key={index} className="blog-scene-image">
                  <LazyImage src={src} alt={alt} aspectRatio="16 / 9" className="scene-img" />
                </div>
              );
            }

            // 2. Check for bracket image: [image: url] or [image: url|alt]
            const bracketImageMatch = text.match(/^\[image:\s*(.*?)(?:\|(.*?))?\]$/i);
            if (bracketImageMatch) {
              const [, src, alt = "Blog Detail Image"] = bracketImageMatch;
              return (
                <div key={index} className="blog-scene-image">
                  <LazyImage src={src.trim()} alt={alt.trim()} aspectRatio="16 / 9" className="scene-img" />
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
              <Tag size={16} className="tag-icon" aria-hidden="true" />
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
        .reading-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--primary-hover));
          z-index: 1000;
          transition: width 0.1s ease-out;
        }
        .navigation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }
        .back-button, .share-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          padding: 0.5rem 1.25rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
          cursor: pointer;
          text-decoration: none;
        }
        .back-button:hover, .share-button:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.08);
          transform: translateY(-2px);
        }
        .blog-post-detail {
          max-width: 800px;
          margin: 0 auto;
        }
        .post-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .post-category-badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1.25rem;
          padding: 0.35rem 0.9rem;
          border-radius: 1rem;
          background: rgba(var(--primary-rgb), 0.12);
          border: 1px solid rgba(var(--primary-rgb), 0.25);
        }
        .post-title {
          font-size: 3.25rem;
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
          border: 1px solid var(--border);
          border-radius: 1.75rem;
          margin-bottom: 3.5rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          background: var(--bg-secondary);
        }
        .post-content-container {
          font-size: 1.15rem;
          line-height: 1.85;
          color: var(--text);
          opacity: 0.92;
          font-family: 'Inter', sans-serif;
          margin-bottom: 4rem;
        }
        .post-paragraph {
          margin-bottom: 1.75rem;
          text-align: justify;
        }
        .blog-heading {
          font-size: 2rem;
          color: var(--text);
          margin: 3rem 0 1.25rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }
        .blog-subheading {
          font-size: 1.5rem;
          color: var(--primary);
          margin: 2rem 0 1rem;
        }
        .blog-scene-image {
          width: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          margin: 2rem 0;
          border: 1px solid var(--border);
          box-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }
        .post-footer {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          margin-top: 3rem;
        }
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }
        .tag-icon {
          color: var(--primary);
        }
        .tag-badge {
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          padding: 0.35rem 0.85rem;
          border-radius: 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }

        @media (max-width: 768px) {
          .post-title {
            font-size: 2.25rem;
          }
          .post-content-container {
            font-size: 1.05rem;
            line-height: 1.75;
          }
          .post-paragraph {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
