import React from 'react';
import { Link, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      title: 'Project Nebula', 
      desc: 'A decentralized cloud storage solution with end-to-end encryption.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
      live: '#',
      github: '#'
    },
    { 
      title: 'Zenith CRM', 
      desc: 'Modern customer relationship management tool built for high-performance teams.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      live: '#',
      github: '#'
    },
    { 
      title: 'Flux Editor', 
      desc: 'A browser-based code editor with real-time collaboration features.',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
      live: '#',
      github: '#'
    },
  ];

  return (
    <div className="container section-padding">
      <h1 style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>Software Lab</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass" style={{ 
            display: 'flex', 
            flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            gap: '4rem',
            padding: '3rem',
            overflow: 'hidden'
          }}>
            <div style={{ flex: 1 }}>
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  borderRadius: '1rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }} 
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{project.title}</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                {project.desc}
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={project.live} className="project-link">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href={project.github} className="project-link github">
                  <Link size={20} /> Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: var(--primary);
          border-radius: 0.8rem;
          font-weight: 600;
          transition: var(--transition);
        }
        .project-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -10px var(--primary);
        }
        .project-link.github {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
        }
        .project-link.github:hover {
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
};

export default Projects;
