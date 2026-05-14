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
      <h1 style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>My Library</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '3rem' 
      }}>
        {books.map((book, idx) => (
          <a key={idx} href={book.link} target="_blank" rel="noopener noreferrer" className="book-card">
            <div className="glass" style={{ 
              padding: '1.5rem', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'var(--transition)'
            }}>
              <img 
                src={book.img} 
                alt={book.title} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '2/3', 
                  objectFit: 'cover', 
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }} 
              />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{book.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{book.author}</p>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .book-card:hover .glass {
          transform: translateY(-10px) rotate(2deg);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default Books;
