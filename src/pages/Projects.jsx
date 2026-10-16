import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import projects from '../data/projects.json';
import LazyImage from '../components/LazyImage';
import AnimatedSection from '../components/AnimatedSection';
import { usePageSEO } from '../hooks/usePageSEO';

const Projects = () => {
  usePageSEO({
    title: 'Software Lab & Open Source Projects | Prince Bhalse',
    description: 'Explore software engineering projects, web applications, and technical lab experiments built by Prince Bhalse.',
    keywords: 'Prince Bhalse Projects, Prince Bhalse Portfolio, Software Engineer Prince Bhalse, Web Developer, Full Stack'
  });

  return (
    <div className="container section-padding animate-fade-in">
      <header className="projects-header">
        <h1 className="projects-title">Software Lab</h1>
        <p className="projects-subtitle">Production applications, developer tools, and architecture experiments.</p>
      </header>
      
      <div className="projects-list">
        {projects.map((project, idx) => (
          <AnimatedSection key={project.title || idx}>
            <article className={`glass project-card ${idx % 2 === 0 ? 'row-normal' : 'row-reverse'}`}>
              <div className="project-image-container">
                <LazyImage 
                  src={project.thumbnail} 
                  alt={`Screenshot of project ${project.title}`} 
                  aspectRatio="16 / 10"
                  className="project-thumbnail"
                />
              </div>
              
              <div className="project-details">
                <span className="project-badge">Lab Experiment</span>
                <h2 className="project-name">{project.title}</h2>
                <p className="project-desc">
                  {project.desc}
                </p>
                
                <div className="project-actions">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link live"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Code2 size={18} /> Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <style>{`
        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .projects-title {
          font-size: 3.5rem;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .projects-subtitle {
          color: var(--text-muted);
          font-size: 1.15rem;
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .project-card {
          display: flex;
          align-items: center;
          gap: 4rem;
          padding: 3rem;
          border-radius: 2rem;
          overflow: hidden;
          transition: var(--transition);
        }
        .project-card:hover {
          border-color: var(--primary);
          box-shadow: 0 20px 45px rgba(var(--primary-rgb), 0.15);
        }
        .project-card.row-normal {
          flex-direction: row;
        }
        .project-card.row-reverse {
          flex-direction: row-reverse;
        }
        .project-image-container {
          flex: 1.1;
          width: 100%;
          border-radius: 1.25rem;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          background: var(--bg-secondary);
        }
        .project-thumbnail {
          width: 100%;
          display: block;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-thumbnail {
          transform: scale(1.03);
        }
        .project-details {
          flex: 1;
        }
        .project-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.25rem 0.65rem;
          border-radius: 0.5rem;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          margin-bottom: 1rem;
        }
        .project-name {
          font-size: 2.25rem;
          margin-bottom: 1.25rem;
          color: var(--text);
        }
        .project-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .project-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
          text-decoration: none;
          cursor: pointer;
        }
        .project-link.live {
          background: var(--primary);
          color: #ffffff;
        }
        .project-link.live:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.35);
        }
        .project-link.github {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text);
        }
        .project-link.github:hover {
          background: rgba(var(--primary-rgb), 0.1);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
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
            font-size: 1.05rem;
          }
        }

        @media (max-width: 768px) {
          .projects-header {
            margin-bottom: 2.5rem;
          }
          .projects-title {
            font-size: 2.5rem;
          }
          .projects-list {
            gap: 2.5rem;
          }
          .project-card.row-normal,
          .project-card.row-reverse {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .project-name {
            font-size: 1.6rem;
            margin-bottom: 0.75rem;
          }
          .project-desc {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          .project-actions {
            flex-direction: column;
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
