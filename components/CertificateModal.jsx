import { useEffect } from 'react';

export default function CertificateModal({ cert, onClose, fromExtra, onBackToAll }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') { fromExtra ? onBackToAll() : onClose(); } };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, fromExtra, onBackToAll]);

  if (!cert) return null;

  const handleClose = () => {
    if (fromExtra) onBackToAll();
    else onClose();
  };

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal-content">
        <span className="modal-close" onClick={handleClose}>&times;</span>
        <div className="modal-header">
          <h2>{cert.title}</h2>
        </div>
        <div id="certModalImage" className="modal-image">
          {cert.image
            ? <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px' }} />
            : cert.icon}
        </div>
        {!fromExtra && (
          <div className="modal-details">
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#f7931e', marginBottom: '0.5rem' }}><strong>Issued by:</strong> {cert.issuer}</p>
              <p style={{ fontSize: '1.1rem', color: '#f7931e' }}><strong>Date:</strong> {cert.date}</p>
            </div>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#c4b9a4' }}>{cert.description}</p>
            <h3>Skills Acquired</h3>
            <ul>{cert.skills?.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        )}
        <div className="modal-links">
          {cert.credentialUrl && cert.credentialUrl !== '#' && (
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="modal-btn">View Credential</a>
          )}
        </div>
      </div>
    </div>
  );
}
