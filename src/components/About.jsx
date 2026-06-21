import portrait from '../assets/portrait.jpg';

export default function About() {
  return (
    <section id="about" className="container section-gap reveal visible">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="about-image-glow"></div>
          <div className="about-image glass">
            <img
              src={portrait}
              alt="Rudra Nishad portrait"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="font-headline text-headline-lg" style={{ marginBottom: '24px' }}>
            The Alchemist of <span style={{ color: 'var(--primary)' }}>Pixels</span>
          </h2>
          <p
            className="text-body-lg"
            style={{
              color: 'var(--on-surface-variant)',
              marginBottom: '32px',
              lineHeight: '1.8',
            }}
          >
            Based in a digital-first world, I specialize in translating complex engineering concepts into playful, accessible user interfaces. My journey began in the rigid world of algorithms, but my heart found its rhythm in the fluid dynamics of motion design and creative glassmorphism.
          </p>
          <div className="about-stats">
            <div className="stat-card glass">
              <div className="stat-number" style={{ color: 'var(--primary)' }}>
                10+
              </div>
              <div style={{ color: 'var(--on-surface-variant)' }}>Projects Shipped</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-number" style={{ color: 'var(--secondary)' }}>
                2yr+
              </div>
              <div style={{ color: 'var(--on-surface-variant)' }}>Technical Mastery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
