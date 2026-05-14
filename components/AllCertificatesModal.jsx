import { useEffect } from 'react';
import { extraCertificates } from '@/data/certificates';

export default function AllCertificatesModal({ onClose, onViewCert }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ maxWidth: '900px' }}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>All My Certificates &amp; Achievements</h2>
        </div>
        <div style={{ padding: '2rem 0' }}>
          {extraCertificates.map((cert, index) => (
            <div key={index} className="cert-list-item">
              <div className="cert-list-icon">{cert.icon}</div>
              <div className="cert-list-content">
                <h4>{cert.title}</h4>
                <p>{cert.issuer} • {cert.date}</p>
              </div>
              <button className="cert-view-btn" onClick={() => onViewCert(cert)}>
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
