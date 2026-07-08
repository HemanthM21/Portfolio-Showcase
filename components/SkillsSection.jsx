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
              {[
                'React.js',
                'Next.js',
                'JavaScript (ES6+)',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'Bootstrap',
                'EJS',
                'Responsive Design'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              {[
                'Node.js',
                'Express.js',
                'REST APIs',
                'JWT Authentication',
                'bcryptjs',
                'Role-Based Access Control',
                'Socket.io',
                'Sequelize ORM'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <div className="skill-tags">
              {[
                'PostgreSQL',
                'MongoDB',
                'MongoDB Atlas',
                'Mongoose ODM'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Deployment</h3>
            <div className="skill-tags">
              {[
                'Git',
                'GitHub',
                'VS Code',
                'Postman',
                'Vercel',
                'Render',
                'Cloudinary',
                'Mapbox'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              {[
                'JavaScript',
                'Java',
                'Python',
                'C'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Currently Learning</h3>
            <div className="skill-tags">
              {[
                'Docker',
                'SIEM',
                'Log Analysis'
              ].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
