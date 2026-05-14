export default function CertificatesSection({ onOpenCert, onOpenAll }) {
  const mainCerts = [
    { id: 'cert1', icon: '☁', title: 'Prompt Design in Vertex AI', desc: "Introductory skill badge in Machine Learning & AI, focusing on prompt engineering and Google's Vertex AI platform", date: 'October 2025' },
    { id: 'cert2', icon: '🏆', title: 'Quests Of Wonders - 3rd Place', desc: 'Certificate of Appreciation for securing 3rd place in technical quiz competition', date: 'August 2024' },
    { id: 'cert3', icon: '🥇', title: 'Web Development Hackathon - Runner Up', desc: 'Runner Up position in YuvaRang-2K25 Web Development Hackathon organized by Tech-Nova Club, CETA', date: 'March 2025' },
    { id: 'cert4', icon: '💻', title: 'Code Verse Hack Fest 2K24', desc: 'Participated in innovation hackathon by MBU, IBM iDEALab focusing on AI/ML', date: 'April 2024' },
    { id: 'cert5', icon: '🔐', title: 'Cyber Security with Ethical Hacking', desc: '2-day workshop on ethical hacking and penetration testing at IIT Hyderabad', date: 'January 2025' },
    { id: 'cert6', icon: '☁', title: 'AWS Student Community Day - Tirupati', desc: 'Certificate of Participation for attending AWS Student Community Day at Mohan Babu University', date: 'November 2025' },
  ];

  return (
    <section id="certificates" className="reveal parallax-section">
      <h2 className="section-title">Certificates &amp; Achievements</h2>
      <div className="certificates-grid">
        {mainCerts.map((c) => (
          <div key={c.id} className="certificate-card" onClick={() => onOpenCert(c.id)}>
            <div className="certificate-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <p className="certificate-date">{c.date}</p>
          </div>
        ))}

        {/* Explore All */}
        <div className="certificate-card certificate-card-special" onClick={onOpenAll}>
          <div className="certificate-icon">📜</div>
          <h3>Explore All My Certificates</h3>
          <p>View my complete collection of certifications and achievements</p>
          <p className="certificate-date">Click to View All →</p>
        </div>

        {/* Coming Soon */}
        <div className="certificate-card" style={{ border: '2px dashed rgba(255,107,53,0.3)', cursor: 'default', background: 'rgba(255,107,53,0.02)' }}>
          <div className="certificate-icon">📚</div>
          <h3>More Certificates Coming Soon</h3>
          <p>Continuously expanding my skillset through various courses, workshops, and certifications in cutting-edge technologies</p>
          <p className="certificate-date">2026</p>
        </div>
      </div>
    </section>
  );
}
