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
    { name: 'Instagram', icon: <Share2 size={20} />, url: 'https://www.bing.com/ck/a?!&&p=ece1fe8988760f8dbf82c686f9fa94174e5451bf27d1acd6b70ddcf713b8c0feJmltdHM9MTc3ODcxNjgwMA&ptn=3&ver=2&hsh=4&fclid=32f95817-92b3-6c25-0ae4-4f4e93916d7c&psq=instagram%2fprincebhalse92&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcmluY2ViaGFsc2U5Mi8' },
    { name: 'X', icon: <Share2 size={20} />, url: 'https://x.com/princebhalse92' },
    { name: 'Reddit', icon: <Share2 size={20} />, url: 'https://www.reddit.com/user/princebhalse92/' },
    { name: 'Quora', icon: <ArrowUpRight size={20} />, url: 'https://www.quora.com/profile/Prince-2259?ch=3&oid=1593407310&share=cb4f1294&srid=uY3Gm0&target_type=user' },
    { name: 'Medium', icon: <BookOpen size={20} />, url: 'https://medium.com/@princebhalse92' },
    { name: 'LinkedIn', icon: <Link size={20} />, url: 'https://in.linkedin.com/in/prince-bhalse-050470271' },
    { name: 'Pinterest', icon: <Globe size={20} />, url: 'https://pin.it/VcuuMKkbm' },
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
