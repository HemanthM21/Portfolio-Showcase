export default function HeroSection({ onScrollTo }) {
  return (
    <section className="hero" id="home">
      <h1 className="hero-title">
        <span className="highlight"></span>
        <span className="highlight">FULL STACK</span>
        DEVELOPER
      </h1>
      <p className="hero-description">
        Hi, I&apos;m Hemanth. Crafting digital experiences that blend innovation with elegant code. I transform
        complex problems into beautiful, scalable solutions that make an impact.
      </p>
      <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); onScrollTo('contact'); }}>
        Let&apos;s Create Something Amazing
      </a>
    </section>
  );
}
