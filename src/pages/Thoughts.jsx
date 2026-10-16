import React, { useState } from 'react';
import { Quote, Copy, Check } from 'lucide-react';
import thoughts from '../data/thoughts.json';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';

const Thoughts = () => {
  usePageSEO({
    title: 'Daily Musings & Philosophical Thoughts | Prince Bhalse',
    description: 'A collection of short thoughts, musings, aphorisms, and quotes on architecture, life, and discipline by Prince Bhalse.',
    keywords: 'Prince Bhalse Thoughts, Prince Bhalse Quotes, Daily Musings, Prince Bhalse Philosophy, Aphorisms'
  });

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, author, idx) => {
    navigator.clipboard.writeText(`"${text}" — ${author}`);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="container section-padding animate-fade-in">
      <header className="thoughts-header">
        <div className="thought-icon-wrapper" aria-hidden="true">
          <Quote size={28} className="thought-icon" />
        </div>
        <h1 className="thoughts-title">Daily Musings</h1>
        <p className="thoughts-subtitle">Fragments of thought, fleeting epiphanies, and notebook margins.</p>
      </header>

      <AnimatedSection>
        <div className="thoughts-grid">
          {thoughts.map((thought, idx) => (
            <article key={idx} className="glass thought-card">
              <div className="thought-card-top">
                <Quote size={24} className="card-quote-mark" aria-hidden="true" />
                <button 
                  onClick={() => handleCopy(thought.text, thought.author, idx)}
                  className="copy-thought-btn"
                  aria-label="Copy thought"
                  title="Copy thought"
                >
                  {copiedIndex === idx ? <Check size={14} color="var(--primary)" /> : <Copy size={14} />}
                </button>
              </div>

              <blockquote className="thought-text">
                "{thought.text}"
              </blockquote>

              <footer className="thought-footer">
                <div className="thought-accent-line" aria-hidden="true" />
                <span className="thought-author">{thought.author}</span>
                {thought.date && (
                  <span className="thought-date">
                    {new Date(thought.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <style>{`
        .thoughts-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .thought-icon-wrapper {
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
        .thought-icon {
          color: var(--primary);
        }
        .thoughts-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .thoughts-subtitle {
          color: var(--text-muted);
          font-size: 1.15rem;
        }
        .thoughts-grid {
          column-count: 2;
          column-gap: 2rem;
        }
        .thought-card {
          padding: 2.5rem;
          margin-bottom: 2rem;
          break-inside: avoid;
          display: inline-block;
          width: 100%;
          border-radius: 1.75rem;
          transition: var(--transition);
        }
        .thought-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(var(--primary-rgb), 0.15);
        }
        .thought-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .card-quote-mark {
          color: var(--primary);
          opacity: 0.6;
        }
        .copy-thought-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text-muted);
          border-radius: 0.5rem;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .copy-thought-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }
        .thought-text {
          font-size: 1.35rem;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          line-height: 1.6;
          color: var(--text);
          margin-bottom: 1.75rem;
        }
        .thought-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .thought-accent-line {
          width: 25px;
          height: 2px;
          background: var(--primary);
          border-radius: 1px;
        }
        .thought-author {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .thought-date {
          margin-left: auto;
          font-size: 0.85rem;
          color: var(--text-muted);
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .thoughts-header {
            margin-bottom: 2.5rem;
          }
          .thoughts-title {
            font-size: 2.5rem;
          }
          .thoughts-grid {
            column-count: 1;
          }
          .thought-card {
            padding: 1.75rem;
            margin-bottom: 1.5rem;
          }
          .thought-text {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Thoughts;
