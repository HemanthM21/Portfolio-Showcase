export default function WorkSection({ onOpenModal }) {
  const projectLinks = [
    {
      id: 'project0', emoji: '🧠',
      title: 'MindGrid — AI-Powered Life Operating System',
      desc: 'Built the complete backend architecture for a hackathon project — JWT auth, Google OAuth, OCR-based document intelligence, AI-driven journaling APIs, and MongoDB schema design. Deployed on Render with Vercel frontend integration.',
      tags: ['React', 'AI', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/HemanthM21/MINDGRID',
    },
    {
      id: 'project1', emoji: '🌍',
      title: 'Wanderly - Travel Discovery Platform',
      desc: 'Architected a full-stack Airbnb-inspired platform from scratch — MVC structure, Passport.js auth, Cloudinary image uploads, Mapbox interactive maps, review system, and session-based flash messaging.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
      github: 'https://github.com/HemanthM21/wanderly-project',
    },
    {
      id: 'project2', emoji: '📚',
      title: 'EDVORA - Learning Management System',
      desc: 'Built a dual-role LMS for students and teachers with JWT authentication, role-based access, assignment uploads, Chart.js performance analytics dashboards, and discussion forums.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/HemanthM21/edvora-lms',
    },
    {
      id: 'project3', emoji: '🍽',
      title: 'ComidaCare - Food Donation Platform',
      desc: 'Developed a real-time food-sharing app with Socket.io live notifications, Google Maps geolocation matching, donor/recipient dual roles, and impact tracking. Frontend complete; backend ongoing.',
      tags: ['React', 'Socket.io', 'MongoDB', 'Maps API'],
      github: 'https://github.com/HemanthM21/comidacare',
    },
    {
      id: 'project4', emoji: '🎮',
      title: 'Simon Says - Classic Memory Game',
      desc: 'Recreated the classic Simon memory game in pure JavaScript — sequence generation, validation logic, Audio API sound effects, progressive difficulty, and visual flash animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      github: 'https://github.com/HemanthM21/Simon-game',
    },
    {
      id: 'project6', emoji: '🛒',
      title: 'Phoenix Fresh - Organic Grocery Web App',
      desc: 'Designed and built a fully responsive organic grocery storefront — dynamic product catalog, category filtering, smooth hover interactions, and clean UI optimised for eco-conscious shoppers.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design'],
      github: 'https://github.com/HemanthM21/Phoenix-Fresh',
    },
  ];

  return (
    <section id="work" className="reveal parallax-section">
      <h2 className="section-title">Featured Work</h2>
      <div className="project-grid">

        {projectLinks.map(({ id, emoji, title, desc, tags, github }) => (
          <div key={id} className="project-card" onClick={() => onOpenModal(id)}>
            <div className="project-image">{emoji}</div>
            <div className="project-content">
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="project-tags">
                {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              {/* GitHub link — visible without opening modal */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="project-github-link"
                onClick={(e) => e.stopPropagation()}
              >
                ↗ View on GitHub
              </a>
            </div>
          </div>
        ))}

        {/* Coming Soon */}
        <div
          className="project-card"
          style={{ border: '2px dashed rgba(255,107,53,0.3)', cursor: 'default', background: 'rgba(255,107,53,0.02)' }}
        >
          <div className="project-image" style={{ background: 'rgba(255,107,53,0.1)' }}>🚀</div>
          <div className="project-content">
            <h3>More Projects Coming Soon...</h3>
            <p>Currently working on exciting new projects including AI-powered tools, advanced web applications, and innovative solutions. Stay tuned for updates!</p>
            <div className="project-tags">
              <span className="project-tag">In Progress</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
