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
      <h1 className="projects-title">Software Lab</h1>
      
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className={`glass project-card ${idx % 2 === 0 ? 'row-normal' : 'row-reverse'}`}>
            <div className="project-image-container">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="project-thumbnail"
              />
            </div>
            
            <div className="project-details">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-desc">
                {project.desc}
              </p>
              
              <div className="project-actions">
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
        .projects-title {
          font-size: 3.5rem;
          margin-bottom: 4rem;
          text-align: center;
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .project-card {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding: 3rem;
          overflow: hidden;
        }
        .project-card.row-normal {
          flex-direction: row;
        }
        .project-card.row-reverse {
          flex-direction: row-reverse;
        }
        .project-image-container {
          flex: 1;
          width: 100%;
        }
        .project-thumbnail {
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          display: block;
        }
        .project-details {
          flex: 1;
        }
        .project-name {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .project-desc {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .project-actions {
          display: flex;
          gap: 1.5rem;
        }
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

        @media (max-width: 1024px) {
          .project-card {
            gap: 2.5rem;
            padding: 2rem;
          }
          .project-name {
            font-size: 2rem;
          }
          .project-desc {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }
          .projects-list {
            gap: 3rem;
          }
          .project-card.row-normal,
          .project-card.row-reverse {
            flex-direction: column;
            gap: 2rem;
            padding: 1.5rem;
          }
          .project-name {
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }
          .project-desc {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          .project-actions {
            flex-direction: column;
            gap: 1rem;
          }
          .project-link {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
