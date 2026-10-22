import React from 'react';
import { BookOpen, ExternalLink, Sparkles, Clock, Layers, Globe, Hash, Bookmark, Feather, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';
import booksData from '../data/books.json';

const Books = () => {
  usePageSEO({
    title: "Published Books | Prince Bhalse — The Liar's Game",
    description: "Explore novels and published books authored by Prince Bhalse, featuring debut dark-academia psychological thriller 'The Liar's Game: The Elara Voss Investigations' on Amazon Kindle.",
    keywords: "Prince Bhalse, The Liar's Game, Elara Voss Investigations, Prince Bhalse Books, Author, Amazon Kindle, Psychological Thriller, Dark Academia, Novelist",
    ogImage: '/images/books/the-liars-game.png'
  });

  const featuredBook = booksData[0];

  return (
    <div className="container section-padding animate-fade-in">
      <header className="books-header">
        <div className="books-badge" aria-hidden="true">
          <Feather size={14} className="badge-icon" />
          <span>Authored Works</span>
        </div>
        <h1 className="books-title">Published Books</h1>
        <p className="books-subtitle">
          Long-form literary fiction, thrillers, and published novels authored by Prince Bhalse.
        </p>
      </header>

      {featuredBook && (
        <AnimatedSection>
          <article className="glass featured-book-card" aria-label={`Featured Book: ${featuredBook.title}`}>
            <div className="book-hero-grid">
              {/* Cover visual & Actions */}
              <div className="book-cover-col">
                <div className="book-3d-wrapper">
                  <div className="book-ambient-glow" aria-hidden="true" />
                  <div className="book-3d-frame">
                    <img
                      src={featuredBook.coverImage}
                      alt={`${featuredBook.title} by ${featuredBook.author} - Book Poster`}
                      className="book-cover-img"
                      loading="eager"
                    />
                    <div className="book-spine-shine" aria-hidden="true" />
                  </div>
                  <div className="book-status-pill">
                    <Sparkles size={13} />
                    <span>Debut Novel</span>
                  </div>
                </div>

                <div className="book-action-box">
                  <a
                    href={featuredBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amazon-buy-btn"
                    id="buy-amazon-btn"
                    aria-label={`Buy or read ${featuredBook.title} on Amazon Kindle (opens in a new tab)`}
                  >
                    <span>Read on Amazon Kindle</span>
                    <ExternalLink size={16} />
                  </a>
                  <div className="book-pricing-note">
                    <span className="price-tag">{featuredBook.price}</span>
                    <span className="ku-badge">Kindle Unlimited</span>
                  </div>
                </div>
              </div>

              {/* Book Information & Synopsis */}
              <div className="book-details-col">
                <div className="book-series-banner">
                  <Bookmark size={14} className="series-icon" />
                  <span>{featuredBook.series}</span>
                </div>

                <h2 className="book-main-title">{featuredBook.title}</h2>
                <p className="book-author-credit">by <strong>{featuredBook.author}</strong></p>

                <div className="book-tagline-quote">
                  <span className="tagline-decoration">“</span>
                  <p>{featuredBook.tagline}</p>
                </div>

                <div className="book-pitch-box">
                  <p className="pitch-text">{featuredBook.pitch}</p>
                </div>

                <div className="book-synopsis-section">
                  <h3 className="section-mini-heading">Synopsis</h3>
                  <div className="synopsis-paragraphs">
                    {featuredBook.synopsis.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Specifications Grid */}
                <div className="book-specs-grid">
                  <div className="spec-card">
                    <Layers size={16} className="spec-icon" />
                    <div>
                      <span className="spec-label">Format</span>
                      <span className="spec-value">{featuredBook.format}</span>
                    </div>
                  </div>
                  <div className="spec-card">
                    <Clock size={16} className="spec-icon" />
                    <div>
                      <span className="spec-label">Length</span>
                      <span className="spec-value">{featuredBook.pages}</span>
                    </div>
                  </div>
                  <div className="spec-card">
                    <Globe size={16} className="spec-icon" />
                    <div>
                      <span className="spec-label">Language</span>
                      <span className="spec-value">{featuredBook.language}</span>
                    </div>
                  </div>
                  <div className="spec-card">
                    <Hash size={16} className="spec-icon" />
                    <div>
                      <span className="spec-label">ASIN</span>
                      <span className="spec-value">{featuredBook.asin}</span>
                    </div>
                  </div>
                </div>

                {/* Genre Tags */}
                <div className="book-tags-row">
                  {featuredBook.tags.map((tag, idx) => (
                    <span key={idx} className="genre-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </AnimatedSection>
      )}

      {/* Coming Soon Teaser */}
      <AnimatedSection>
        <div className="glass series-teaser-card">
          <div className="teaser-content">
            <span className="teaser-badge">Forthcoming</span>
            <h3 className="teaser-title">The Elara Voss Investigations — Book Two</h3>
            <p className="teaser-desc">
              The story continues. Prince Bhalse is currently penning the second installment in the Elara Voss saga, delving deeper into the century-old society and the web of secrets that refuse to stay buried.
            </p>
          </div>
          <div className="teaser-aside">
            <ShieldCheck size={28} className="teaser-icon" />
            <span>In Development</span>
          </div>
        </div>
      </AnimatedSection>

      <style>{`
        .books-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .books-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.25);
          margin-bottom: 1.25rem;
        }
        .badge-icon {
          color: var(--primary);
        }
        .books-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .books-subtitle {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Featured Book Card */
        .featured-book-card {
          padding: 3rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }
        .featured-book-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(var(--primary-rgb), 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .book-hero-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        /* Book Cover Column */
        .book-cover-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          position: sticky;
          top: 6rem;
        }
        .book-3d-wrapper {
          position: relative;
          width: 100%;
          max-width: 320px;
          perspective: 1000px;
        }
        .book-ambient-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(ellipse at center, rgba(var(--primary-rgb), 0.3) 0%, transparent 75%);
          filter: blur(25px);
          z-index: 0;
          pointer-events: none;
        }
        .book-3d-frame {
          position: relative;
          z-index: 1;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow:
            -6px 0 15px rgba(0, 0, 0, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transform: rotateY(-3deg) rotateX(1deg);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
        }
        .book-3d-frame:hover {
          transform: rotateY(0deg) rotateX(0deg) translateY(-8px);
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.7),
            0 0 35px rgba(var(--primary-rgb), 0.35),
            0 0 0 1px rgba(var(--primary-rgb), 0.5);
        }
        .book-cover-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 1 / 1.6;
        }
        .book-spine-shine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 28px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          pointer-events: none;
        }
        .book-status-pill {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          color: #fbbf24;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(251, 191, 36, 0.35);
          letter-spacing: 0.04em;
        }

        .book-action-box {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .amazon-buy-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #0b0f19;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.95rem 1.5rem;
          border-radius: 0.85rem;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          text-decoration: none;
          text-align: center;
        }
        .amazon-buy-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: 0 14px 30px rgba(245, 158, 11, 0.45);
        }
        .book-pricing-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
          padding: 0.35rem 0.5rem;
        }
        .price-tag {
          font-weight: 600;
          color: var(--text);
        }
        .ku-badge {
          background: rgba(var(--primary-rgb), 0.12);
          color: var(--primary);
          padding: 0.2rem 0.55rem;
          border-radius: 0.4rem;
          font-weight: 600;
          font-size: 0.75rem;
          border: 1px solid rgba(var(--primary-rgb), 0.25);
        }

        /* Book Details Column */
        .book-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .book-series-banner {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .series-icon {
          color: var(--primary);
        }
        .book-main-title {
          font-size: 2.85rem;
          line-height: 1.15;
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.02em;
        }
        .book-author-credit {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-top: -0.5rem;
        }
        .book-author-credit strong {
          color: var(--text);
        }

        /* Tagline */
        .book-tagline-quote {
          position: relative;
          padding: 0.85rem 1.5rem 0.85rem 2rem;
          border-left: 3px solid #f59e0b;
          background: rgba(245, 158, 11, 0.05);
          border-radius: 0 0.75rem 0.75rem 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 1.25rem;
          color: #fbbf24;
          letter-spacing: 0.04em;
        }
        .tagline-decoration {
          position: absolute;
          left: 0.65rem;
          top: 0.15rem;
          font-size: 2rem;
          line-height: 1;
          opacity: 0.4;
          color: #f59e0b;
        }

        /* Pitch */
        .book-pitch-box {
          background: rgba(var(--primary-rgb), 0.06);
          border: 1px solid rgba(var(--primary-rgb), 0.15);
          padding: 1.15rem 1.4rem;
          border-radius: 1rem;
        }
        .pitch-text {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text);
          font-weight: 500;
        }

        /* Synopsis */
        .book-synopsis-section {
          margin-top: 0.5rem;
        }
        .section-mini-heading {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
          font-weight: 700;
        }
        .synopsis-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .synopsis-paragraphs p {
          color: var(--text);
          opacity: 0.88;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        /* Specs Grid */
        .book-specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border);
        }
        .spec-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 0.85rem;
        }
        .spec-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .spec-label {
          display: block;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .spec-value {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }

        /* Tags Row */
        .book-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .genre-tag {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .genre-tag:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }

        /* Forthcoming Teaser Card */
        .series-teaser-card {
          padding: 2.25rem 2.75rem;
          border-radius: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          border: 1px dashed rgba(var(--primary-rgb), 0.3);
          background: rgba(var(--primary-rgb), 0.03);
        }
        .teaser-content {
          max-width: 700px;
        }
        .teaser-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #a855f7;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.25rem 0.65rem;
          border-radius: 0.4rem;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.25);
          margin-bottom: 0.65rem;
        }
        .teaser-title {
          font-size: 1.4rem;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .teaser-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .teaser-aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          background: rgba(var(--primary-rgb), 0.08);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }
        .teaser-icon {
          color: var(--primary);
        }

        @media (max-width: 960px) {
          .book-hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .book-cover-col {
            position: static;
          }
          .book-3d-wrapper,
          .book-action-box {
            max-width: 280px;
          }
          .featured-book-card {
            padding: 2rem;
          }
          .book-main-title {
            font-size: 2.25rem;
          }
          .series-teaser-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.75rem;
          }
          .teaser-aside {
            align-self: flex-start;
          }
        }

        @media (max-width: 600px) {
          .books-title {
            font-size: 2.4rem;
          }
          .featured-book-card {
            padding: 1.5rem;
            border-radius: 1.25rem;
          }
          .book-specs-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Books;
