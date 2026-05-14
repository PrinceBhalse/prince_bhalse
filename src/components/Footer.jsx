import React from 'react';
import { 
  Link,
  Share2, 
  BookOpen, 
  Globe, 
  ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const socials = [
    { name: 'Instagram', icon: <Share2 size={20} />, url: '#' },
    { name: 'X', icon: <Share2 size={20} />, url: '#' },
    { name: 'Reddit', icon: <Share2 size={20} />, url: '#' },
    { name: 'Quora', icon: <ArrowUpRight size={20} />, url: '#' },
    { name: 'Medium', icon: <BookOpen size={20} />, url: '#' },
    { name: 'LinkedIn', icon: <Link size={20} />, url: '#' },
    { name: 'Pinterest', icon: <Globe size={20} />, url: '#' },
  ];

  return (
    <footer style={{ padding: '4rem 0', marginTop: '4rem', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          © 2026 Prince Bhalse. All rights reserved.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .social-icon {
          color: var(--text-muted);
          transition: var(--transition);
        }
        .social-icon:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
