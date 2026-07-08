export default function AboutSection() {
  return (
    <section id="about" className="reveal parallax-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          I&apos;m <strong>Mada Hemanth</strong>, a Full Stack Developer and B.Tech CSE student at
          Mohan Babu University, building real-world web applications with the MERN stack —{' '}
          <strong style={{ color: '#ff6b35' }}>MongoDB, Express.js, React, and Node.js</strong>.<br /><br />

          I&apos;ve shipped production-grade projects end-to-end: from JWT &amp; OAuth authentication
          systems and RESTful APIs to real-time Socket.io features, Cloudinary integrations, and
          interactive Chart.js dashboards. My most recent work,{' '}
          <strong style={{ color: '#ff6b35' }}>MindGrid</strong>, is an AI-powered productivity OS
          where I owned the entire backend — auth, OCR pipelines, AI journaling APIs, and
          deployment on Render.<br /><br />

          Beyond web dev, I&apos;m deeply interested in{' '}
          <strong style={{ color: '#ff6b35' }}>DevOps, Cloud &amp; Cybersecurity</strong> — I&apos;ve
          attended workshops at IIT Hyderabad on ethical hacking and an AWS Community Day on
          serverless and RAG pipelines. Currently exploring Docker, Kubernetes, and CI/CD to
          complement my full-stack skills.
        </div>
        <div className="about-image">
          <img src="/images/pic4.jpeg" alt="Hemanth" />
        </div>
      </div>
    </section>
  );
}
