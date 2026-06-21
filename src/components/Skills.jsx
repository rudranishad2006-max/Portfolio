import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const coreSkills = [
    'React.js',
    'TypeScript',
    'Node.js',
    'Python',
    'C++',
    'C',
    'Next.js',
    'Web Development',
    'Full Stack',
    'PostgreSQL',
    'Docker',
    'MongoDB',
    'GraphQL',
    'Redis',
  ];

  const progressBars = [
    { label: 'Node.js / Express', value: '95%', color: 'var(--secondary)' },
    { label: 'Python / FastAPI', value: '88%', color: 'var(--secondary)' },
    { label: 'Git & CI/CD', value: '92%', color: 'var(--tertiary)' },
    { label: 'AWS / Vercel', value: '85%', color: 'var(--primary)' },
  ];

  return (
    <section id="skills" className="container section-gap">
      <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal visible">
        <h2 className="font-headline text-headline-lg" style={{ marginBottom: '16px' }}>
          The Technical <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Artistry Matrix</span>
        </h2>
        <p className="text-body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: '0 auto' }}>
          Mapping the intersection of robust Computer Science engineering and high-fidelity digital design.
        </p>
      </div>

      {/* Skills Bento Grid */}
      <div className="skills-grid reveal visible" ref={containerRef}>
        {/* Frontend / Core Development */}
        <div className="glass-card skill-card" style={{ gridColumn: 'span 8' }}>
          <div>
            <div className="skill-icon" style={{ background: 'rgba(107,56,212,0.1)', color: 'var(--primary)' }}>
              <span className="material-symbols-outlined">code</span>
            </div>
            <h3 className="font-headline text-headline-md" style={{ marginBottom: '8px' }}>
              Core Development
            </h3>
            <p style={{ color: 'var(--on-surface-variant)', maxWidth: '480px', marginBottom: '16px' }}>
              Scalable systems and expressive interfaces built with performance at the heart.
            </p>
          </div>
          <div className="skill-tags">
            {coreSkills.map((skill) => (
              <span key={skill} className="chip chip-mint">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  terminal
                </span>{' '}
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Creative Suite */}
        <div className="glass-card skill-card" style={{ gridColumn: 'span 4' }}>
          <div className="skill-icon" style={{ background: 'rgba(180,19,109,0.1)', color: 'var(--secondary)' }}>
            <span className="material-symbols-outlined">palette</span>
          </div>
          <h3 className="font-headline text-headline-md" style={{ marginBottom: '16px' }}>
            Creative Suite
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(180,19,109,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>
                  brush
                </span>
              </div>
              <div>
                <p style={{ fontWeight: 700 }}>Figma & UI Design</p>
                <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Design Systems & Prototyping</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(180,19,109,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>
                  animation
                </span>
              </div>
              <div>
                <p style={{ fontWeight: 700 }}>Motion Design</p>
                <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Framer Motion & GSAP</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(180,19,109,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>
                  3d_rotation
                </span>
              </div>
              <div>
                <p style={{ fontWeight: 700 }}>3D & WebGL</p>
                <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Three.js & Shaders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Systems & DevOps */}
        <div className="glass-card skill-card" style={{ gridColumn: 'span 5' }}>
          <div>
            <div className="skill-icon" style={{ background: 'rgba(0,105,71,0.1)', color: 'var(--tertiary)' }}>
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="font-headline text-headline-md" style={{ marginBottom: '8px' }}>
              Systems & DevOps
            </h3>
            <p style={{ color: 'var(--on-surface-variant)', marginBottom: '24px' }}>
              Structuring robust backends and API architectures that scale.
            </p>
          </div>
          <div className="progress-bar-wrapper">
            {progressBars.map((bar) => (
              <div key={bar.label}>
                <div className="progress-label">
                  <span>{bar.label}</span>
                  <span style={{ color: bar.color }}>{bar.value}</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: inView ? bar.value : '0%',
                      background: bar.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Card */}
        <div
          className="glass-card skill-card"
          style={{
            gridColumn: 'span 7',
            position: 'relative',
            overflow: 'hidden',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '256px',
              height: '256px',
              border: '32px solid rgba(107,56,212,0.05)',
              borderRadius: '50%',
            }}
          ></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="font-display text-headline-lg" style={{ color: 'var(--primary)', marginBottom: '16px' }}>
              Technical Playfulness
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8, maxWidth: '540px' }}>
              "I believe code is a medium for art. Whether it's optimizing a GraphQL query or fine-tuning a spring animation, the goal is always to create moments of delight without sacrificing technical rigor."
            </p>
          </div>
        </div>
      </div>

      {/* Learning Path Timeline */}
      <div style={{ textAlign: 'center', margin: 'var(--section-gap) 0 64px' }} className="reveal visible">
        <h2 className="font-display text-headline-lg" style={{ marginBottom: '16px' }}>
          Continuous Evolution
        </h2>
        <p style={{ color: 'var(--on-surface-variant)' }}>The path of mastery is infinite. Here's what I'm currently exploring.</p>
      </div>

      <div className="timeline reveal visible">
        <div className="timeline-line"></div>

        <div className="timeline-item">
          <div className="timeline-text-left" style={{ textAlign: 'right' }}>
            <span
              className="font-code"
              style={{
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              Currently Mastering
            </span>
            <h4 className="font-headline text-headline-md" style={{ marginTop: '8px' }}>
              Generative AI
            </h4>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>
              Leveraging LLMs to build agentic workflows and creative co-pilot tools.
            </p>
          </div>
          <div className="timeline-dot" style={{ background: 'var(--primary)', boxShadow: '0 0 15px rgba(107,56,212,0.5)' }}></div>
          <div>
            <div className="timeline-icon-box">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '48px', opacity: 0.3 }}>
                psychology
              </span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div>
            <div className="timeline-icon-box">
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '48px', opacity: 0.3 }}>
                cloud
              </span>
            </div>
          </div>
          <div className="timeline-dot" style={{ background: 'var(--secondary)', boxShadow: '0 0 15px rgba(180,19,109,0.5)' }}></div>
          <div className="timeline-text-right">
            <span
              className="font-code"
              style={{
                color: 'var(--secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              Next Milestone
            </span>
            <h4 className="font-headline text-headline-md" style={{ marginTop: '8px' }}>
              Cloud Architecture
            </h4>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>
              Deep diving into microservices, Kubernetes, and serverless patterns.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-text-left" style={{ textAlign: 'right' }}>
            <span
              className="font-code"
              style={{
                color: 'var(--tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              Aspiration
            </span>
            <h4 className="font-headline text-headline-md" style={{ marginTop: '8px' }}>
              Rust & WebAssembly
            </h4>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>
              Bridging the gap between native performance and web portability.
            </p>
          </div>
          <div className="timeline-dot" style={{ background: 'var(--tertiary)', boxShadow: '0 0 15px rgba(0,105,71,0.5)' }}></div>
          <div>
            <div className="timeline-icon-box">
              <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '48px', opacity: 0.3 }}>
                settings_ethernet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
