export default function Hero() {
  return (
    <section id="hero" className="container">
      <div className="hero-status glass animate-float">
        <span className="hero-status-dot"></span>
        <span
          className="font-code text-label-code"
          style={{
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          Available for Creative Challenges
        </span>
      </div>
      <h1 className="font-display text-hero hero-title">
        Bridging Logic <br />& <span className="accent">Imagination</span>
      </h1>
      <p className="font-body text-body-lg hero-subtitle">
        Computer Science engineer by day, digital artist by night. I craft immersive digital experiences where high-performance code meets avant-garde aesthetics.
      </p>
      <div className="hero-actions">
        <a className="btn-primary" href="#projects">
          View Portfolio
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
        <a className="btn-glass" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Curriculum Vitae
        </a>
      </div>
    </section>
  );
}
