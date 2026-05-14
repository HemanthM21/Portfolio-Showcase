export default function SkillsSection() {
  return (
    <section id="skills" className="reveal parallax-section">
      <h2 className="section-title">Skills &amp; Expertise</h2>
      <div className="skills-container">
        <div className="skills-intro">
          As a <strong style={{ color: '#ff6b35' }}>Full Stack Developer</strong>, I&apos;ve mastered a diverse range of
          technologies across frontend, backend, and cloud infrastructure.
          Also deeply interested in Networking and Cybersecurity, constantly exploring tools, techniques, and
          real-world applications to strengthen secure and efficient system designs.
          Here&apos;s what I bring to the table:
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              {['HTML5','CSS3','JavaScript','React','Tailwind CSS','Bootstrap','Responsive Design'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              {['Node.js','Express.js','MongoDB','REST APIs','Authentication'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Tools &amp; Technologies</h3>
            <div className="skill-tags">
              {['Git','GitHub','VS Code','Postman','npm'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Cloud &amp; Networking</h3>
            <div className="skill-tags">
              {['Cloud Computing','Networking','Deployment','CI/CD'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Currently Learning</h3>
            <div className="skill-tags">
              {['DevOps','Docker','Kubernetes','AWS','Azure','CI/CD Pipelines','Automation Scripting','Networking','Cybersecurity Tools'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
