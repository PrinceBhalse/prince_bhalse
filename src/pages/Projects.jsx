import React from 'react';
import { Link, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      title: 'Veritas', 
      desc: 'Veritas is a decentralized, multi-signature document verification system built on the Ethereum blockchain and IPFS that establishes an immutable, zero-trust chain of custody to prevent fraud and ensure mathematical proof of document authenticity.',
      thumbnail: 'https://private-user-images.githubusercontent.com/80117253/597634324-90ff324c-e1f4-4b16-b3ba-9139973fa330.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk3MTA0NzUsIm5iZiI6MTc3OTcxMDE3NSwicGF0aCI6Ii84MDExNzI1My81OTc2MzQzMjQtOTBmZjMyNGMtZTFmNC00YjE2LWIzYmEtOTEzOTk3M2ZhMzMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTI1VDExNTYxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc0ZDljMWIzYTYyYzQ0ODg5MTM2NDFhODRlNjI0ZjliMWNkMDhhMTFlNGU0Y2ZkNzA3Y2FiOGU5MTA4ODI3Y2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.2P0eTJtPz_rkERL42eb4ldPAikJsT1iPu6ra4D9GLC0',
      live: 'https://veritas-gamma-ebon.vercel.app/',
      github: 'https://github.com/PrinceBhalse/secure_doc_workflow'
    },
    { 
      title: 'AI Data Analysis', 
      desc: 'Data Analytics tool which can generate chart based summary.',
      thumbnail: 'https://private-user-images.githubusercontent.com/80117253/597636220-9699fdb6-7157-40a4-b6ae-2684a038a2b8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk3MTExOTUsIm5iZiI6MTc3OTcxMDg5NSwicGF0aCI6Ii84MDExNzI1My81OTc2MzYyMjAtOTY5OWZkYjYtNzE1Ny00MGE0LWI2YWUtMjY4NGEwMzhhMmI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTI1VDEyMDgxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlYmMyMzBmZDRiODU0Njc2NDEzNDI1OWFlNzE4MzVjZDRiY2YxYmMzNjU2M2E1ZGY5MTM2ZTZhNDk5NmI4MWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.0pyv88PDyUMrlsS-llIHnIbZ-nrYg-RxAQaNhRee270',
      live: 'https://ai-data-analysis-kappa.vercel.app/',
      github: 'https://github.com/PrinceBhalse/ai-data-analysis'
    },
    { 
      title: 'Movie Recommendation Systme', 
      desc: 'A collaborative filtering based movie recommendation system based on tmdb dataset.',
      thumbnail: 'https://private-user-images.githubusercontent.com/80117253/597639262-89efb0c5-e3d3-4015-82f9-97d69a5434d3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk3MTEwNTQsIm5iZiI6MTc3OTcxMDc1NCwicGF0aCI6Ii84MDExNzI1My81OTc2MzkyNjItODllZmIwYzUtZTNkMy00MDE1LTgyZjktOTdkNjlhNTQzNGQzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTI1VDEyMDU1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBhNGVmZDU4M2FjZTQ4NDVmZWRiNTc5ZGM3OGVjOTVhM2RjYmJlNTk0MWMyZDJkMDNiYzdkZmI3MzQ2Yzg4YzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.-rWWx1ntdsp2-TOd96Z-GlJZsvGdoTZSeOcX72c2lLg',
      live: 'https://movierecommendationsystem-rlyq.onrender.com/',
      github: 'https://github.com/PrinceBhalse/MovieRecommendationSystem'
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
