export default function ContactSection() {
  return (
    <section id="contact" className="contact reveal parallax-section">
      <div className="contact-content">
        <h2 className="contact-title">Let&apos;s Work Together</h2>
        <p className="contact-text">
          Have a project in mind? I&apos;m always open to discussing new opportunities, creative ideas, or
          partnerships. Let&apos;s create something amazing together!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:mhemanth212@gmail.com">mhemanth212@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>Phone</span>
            <a href="tel:+917661022620">+91 76610 22620</a>
          </div>
        </div>
        <div className="contact-links">
          <a href="mailto:mhemanth212@gmail.com" className="contact-link">Email Me</a>
          <a
            href="/assets/Hemanth FullStack CV.pdf"
            className="contact-link"
            download="Hemanth_FullStack_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/HemanthM21" target="_blank" rel="noreferrer" title="GitHub">GH</a>
          <a href="https://linkedin.com/in/mada-hemanth-0774892ab" target="_blank" rel="noreferrer" title="LinkedIn">IN</a>
        </div>
      </div>
    </section>
  );
}
