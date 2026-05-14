import { useEffect } from 'react';

export default function ProjectModal({ project, onClose, onBack }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>{project.title}</h2>
          {project.note && (
            <p style={{ color: '#f7931e', fontSize: '1rem', textAlign: 'center', marginTop: '0.4rem', fontStyle: 'italic' }}>
              {project.note}
            </p>
          )}
        </div>
        <div id="modalImage" className="modal-image">
          {project.image
            ? <img src={project.image} alt={`${project.title} Screenshot`} />
            : project.icon}
        </div>
        <div className="modal-details">
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#c4b9a4' }}>{project.description}</p>
          <h3>Key Features</h3>
          <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
          <h3>Technologies Used</h3>
          <div className="project-tags" style={{ marginTop: '1.5rem' }}>
            {project.technologies.map((t, i) => <span key={i} className="project-tag">{t}</span>)}
          </div>
          <h3>Challenges &amp; Solutions</h3>
          <p>{project.challenges}</p>
          <h3>My Role</h3>
          <p>{project.role}</p>
        </div>
        <div className="modal-links">
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="modal-btn">Live Demo</a>
          <a href={project.viewCode} target="_blank" rel="noreferrer" className="modal-btn secondary">View Code</a>
        </div>
      </div>
    </div>
  );
}
