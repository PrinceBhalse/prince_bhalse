import React from 'react';
import { BookOpen, Star, Bookmark } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';

const BOOKS = [
  {
    title: 'Clean Architecture',
    subtitle: 'A Craftsman’s Guide to Software Structure and Design',
    author: 'Robert C. Martin',
    status: 'Essential Reading',
    tag: 'Architecture',
    notes: 'The foundational principles of separation of concerns, boundaries, and domain-centric design.',
    rating: 5,
  },
  {
    title: 'The Pragmatic Programmer',
    subtitle: 'Your Journey to Mastery',
    author: 'David Thomas & Andrew Hunt',
    status: 'Recommended',
    tag: 'Craftsmanship',
    notes: 'Practical wisdom on code craftsmanship, orthogonality, tracer bullets, and continuous improvement.',
    rating: 5,
  },
  {
    title: 'Atomic Habits',
    subtitle: 'Tiny Changes, Remarkable Results',
    author: 'James Clear',
    status: 'Life Changing',
    tag: 'Mindset',
    notes: 'Systems over goals: how marginal 1% gains compound into extraordinary career and personal results.',
    rating: 5,
  },
  {
    title: 'Deep Work',
    subtitle: 'Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    status: 'Philosophy',
    tag: 'Productivity',
    notes: 'The superpower of uninterrupted focus in an era of notifications, feeds, and fragmented attention.',
    rating: 5,
  },
  {
    title: 'Designing Data-Intensive Applications',
    subtitle: 'The Big Ideas Behind Reliable, Scalable Systems',
    author: 'Martin Kleppmann',
    status: 'Technical Depth',
    tag: 'Distributed Systems',
    notes: 'An indispensable guide to data storage, replication, partitioning, consistency, and streaming.',
    rating: 5,
  },
  {
    title: 'Letters to a Young Poet',
    subtitle: 'Rainer Maria Rilke',
    author: 'Rainer Maria Rilke',
    status: 'Literary Muse',
    tag: 'Poetry & Art',
    notes: 'A quiet contemplation on solitude, creation, love, and the deep discipline of artistic truth.',
    rating: 5,
  }
];

const Books = () => {
  usePageSEO({
    title: 'Reading Shelf & Library | Prince Bhalse',
    description: "Discover books and literature that shaped Prince Bhalse's perspective on software engineering, architecture, poetry, and philosophy.",
    keywords: 'Prince Bhalse Books, Reading Shelf, Software Engineering Books, Clean Architecture, Atomic Habits, Poetry'
  });

  return (
    <div className="container section-padding animate-fade-in">
      <header className="books-header">
        <div className="book-icon-wrapper" aria-hidden="true">
          <BookOpen size={28} className="book-icon" />
        </div>
        <h1 className="books-title">The Reading Shelf</h1>
        <p className="books-subtitle">
          Volumes that have shaped my philosophy on systems architecture, prose, discipline, and thought.
        </p>
      </header>
      
      <AnimatedSection>
        <div className="books-grid">
          {BOOKS.map((book, idx) => (
            <article key={idx} className="glass book-card">
              <div className="book-card-top">
                <span className="book-tag">{book.tag}</span>
                <span className="book-status">
                  <Bookmark size={13} style={{ marginRight: '0.25rem' }} />
                  {book.status}
                </span>
              </div>
              
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">by {book.author}</p>
              
              {book.subtitle && (
                <p className="book-subtitle-text">{book.subtitle}</p>
              )}
              
              <p className="book-notes">"{book.notes}"</p>
              
              <div className="book-card-footer">
                <div className="book-rating" aria-label={`Rating: ${book.rating} out of 5 stars`}>
                  {Array.from({ length: book.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <style>{`
        .books-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .book-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          margin-bottom: 1.5rem;
        }
        .book-icon {
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
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .book-card {
          padding: 2.25rem;
          border-radius: 1.75rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .book-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
        }
        .book-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .book-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.65rem;
          border-radius: 0.5rem;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }
        .book-status {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
        }
        .book-title {
          font-size: 1.6rem;
          color: var(--text);
          margin-bottom: 0.35rem;
          font-family: 'Outfit', sans-serif;
        }
        .book-author {
          color: var(--primary);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .book-subtitle-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-style: italic;
        }
        .book-notes {
          color: var(--text);
          opacity: 0.88;
          font-size: 0.95rem;
          line-height: 1.65;
          margin-top: auto;
          margin-bottom: 1.5rem;
        }
        .book-card-footer {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .book-rating {
          display: flex;
          gap: 0.25rem;
        }

        @media (max-width: 768px) {
          .books-header {
            margin-bottom: 2.5rem;
          }
          .books-title {
            font-size: 2.5rem;
          }
          .books-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .book-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Books;
