import React from 'react';

const Books = () => {
  const books = [
    { title: 'The Clean Architecture', author: 'Robert C. Martin', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400', link: '#' },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400', link: '#' },
    { title: 'Atomic Habits', author: 'James Clear', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400', link: '#' },
    { title: 'Deep Work', author: 'Cal Newport', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400', link: '#' },
  ];

  return (
    <div className="container section-padding">
      <title>Reading Shelf & Library | Prince Bhalse</title>
      <meta name="description" content="Discover the books that shaped Prince Bhalse's perspective on software engineering, clean code, architecture, habits, and life." />
      <meta name="keywords" content="Prince Bhalse Books, Reading List, Software Engineering Books, Clean Architecture, Atomic Habits" />
      <h1 className="books-title">My Library</h1>
      
      {/* Coming Soon Section */}
      <div className="glass coming-soon-card" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text)' }}>Coming Soon</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          I am currently curating a list of books that have influenced my software engineering practices, coding philosophy, and creative projects. Stay tuned!
        </p>
      </div>

      {/* Commented out for now until books are finalized
      <div className="books-grid">
        {books.map((book, idx) => (
          <a key={idx} href={book.link} target="_blank" rel="noopener noreferrer" className="book-card">
            <div className="glass book-card-inner">
              <img 
                src={book.img} 
                alt={book.title} 
                className="book-cover"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
            </div>
          </a>
        ))}
      </div>
      */}

      <style>{`
        .books-title {
          font-size: 3.5rem;
          margin-bottom: 4rem;
          text-align: center;
        }
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 3rem;
        }
        .book-card-inner {
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }
        .book-cover {
          width: 100%;
          aspect-ratio: 2/3;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .book-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .book-author {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-top: auto;
        }
        .book-card:hover .book-card-inner {
          transform: translateY(-10px) rotate(2deg);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .books-title {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }
          .books-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
          }
          .book-card-inner {
            padding: 1.25rem;
          }
          .book-title {
            font-size: 1.1rem;
          }
          .book-card:hover .book-card-inner {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Books;
