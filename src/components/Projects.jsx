import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterOptions = ['All Projects', 'Web Apps', 'AI / ML', 'Creative Engineering'];

  const projectList = [
    {
      id: 1,
      title: 'RudCode',
      description:
        'A friendly AI-powered code explainer for beginners. Paste any code and get clear, beginner-friendly explanations with syntax highlighting and step-by-step breakdowns.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCNv-LNInEcOmVZqfAwQBJTOpr1Sa2rkCHXQQatbvUBBk-lQwINPwtVmaKX6GFEu66AarW4fa3TNT0VvBDo9PcIwwkRbwCbvfGmqEEWvmXge-IAsHBWtS4JSRvyoqy3ohYLkZvWQoCWgEpUkwgd1N7WSDn61s23ah6Eoudmt70_wD708Qors4LY--1qaZkQU-Z7p2U-4R60Z7VH5coljYAzmOvt-6FYvuBnFRcDbZoo7kjGJ2O0GutgGk1yeBHeCB4wZv0nUppTXajq',
      categories: ['Web Apps', 'AI / ML'],
      tech: ['React', 'Vite', 'Gemini AI'],
      link: 'https://rud-code.vercel.app/',
      featured: true,
      colSpan: 8,
      imageHeight: '400px',
    },
    {
      id: 2,
      title: 'Portfolio v1',
      description: 'My first portfolio iteration — a clean, minimal showcase of projects and skills.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA_6x7tuOY8C8QFtk4V2BecLSaKbHE90DRUqbZM7bxWM2HXOZm5MrJe_ccQJEuckLQhq98cnm7-uTRs4071kNybkz86y3AzxYNvuIN8s9p7gG64-x4JCunRtTMpSsEt4UDahCDsOdbmxytDG6eALemqoyYuQwhpwHvfpnHflAwcUOq3AQHJdI2LIttzyUoxOINnsHszCWgALybQ5tlD7DMyF3oOi0TUA9dr3E1sN7mpOIo_BRdV5iS8cuhw6DK7J1q9f5LS-c689veR',
      categories: ['Web Apps', 'Creative Engineering'],
      tech: ['Next.js', 'Tailwind'],
      link: '#',
      featured: false,
      colSpan: 4,
      imageHeight: '250px',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather with beautiful visualizations and location-based forecasts.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA3b8e7tIPyi3QFYRE6pHVfUAB3fubSmaL_r86fLcL4P1KP1WB_aBwHx28xxjTnGSJyQzThwgr-mr9ZCtEVz8pSnqdQ8Ub4U5FsoXbBCWaM-5tVuBFXAzx8gkL-Yse-cMOGdDtpuPD4DRKGHCArwkZR99OfO7wvIz_bzm_E8gY2DXDh2M9ncIezrtQuf4zz0DhdSxHtG3MtZRhAFZFXNKZ2rGSXklHlhOdb-eb94gAm_-5WX9fEJe4GdNW7znDKN5vH1gcWRzj1e4lO',
      categories: ['Web Apps'],
      tech: ['API', 'JavaScript'],
      link: 'https://rud-weather.vercel.app/',
      featured: false,
      colSpan: 4,
      imageHeight: '200px',
    },
    {
      id: 4,
      title: 'Task Flow',
      description:
        'A full-stack task management app with drag-and-drop boards, real-time collaboration, and beautiful glass UI.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA3wGsz7aQi2HEut1lSMS5ERjDezIEjjPKPsF0y46NJl-UwpoLXrK6XI6g4LoWZD9B8NPMo2lXtD2j5ePO9j8sTy6pnBH7tn-ZP_Yk85RZCmr5IeO9-dmzhdLGr-L-qtysOitnaP8cV39QYwiQ08HPNecCuj6R7r4htZzBQp4A9MsD9B7OrAx4d4mH60SdJxY3F_LOtGt_dJhI0fEOCFeR-Das58TKAzBvWlaw_Z8NZk5YQ50-86VaB7FFmyVyMm2-NMUCeOzXswpI_',
      categories: ['Web Apps', 'Creative Engineering'],
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://taskflows.org/',
      featured: false,
      colSpan: 8,
      horizontal: true,
    },
  ];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projectList
      : projectList.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="container section-gap">
      <div className="projects-header reveal visible">
        <div>
          <h2 className="font-display text-display">
            Selected <span style={{ color: 'var(--primary)' }}>Works</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', marginTop: '8px' }}>
            A playground where engineering meets empathy.
          </p>
        </div>
      </div>

      <div className="filter-chips reveal visible">
        {filterOptions.map((filter) => (
          <span
            key={filter}
            className={`chip ${activeFilter === filter ? 'chip-active' : ''}`}
            style={{
              cursor: 'pointer',
              padding: '10px 24px',
              fontSize: '14px',
              backgroundColor: activeFilter === filter ? 'var(--primary)' : 'rgba(255,255,255,0.45)',
              borderColor: activeFilter === filter ? 'transparent' : 'rgba(107, 56, 212, 0.2)',
              color: activeFilter === filter ? 'white' : 'var(--on-surface-variant)',
            }}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          if (project.horizontal) {
            return (
              <div
                key={project.id}
                className="project-card glass-card reveal visible"
                style={{ gridColumn: `span ${project.colSpan}` }}
              >
                <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                  <div className="project-image" style={{ width: '40%', minHeight: '280px' }}>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div
                    className="project-info"
                    style={{
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      {project.tech.map((t) => (
                        <span key={t} className="chip chip-mint" style={{ fontSize: '12px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-headline text-headline-lg" style={{ marginBottom: '12px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--on-surface-variant)', marginBottom: '20px' }}>
                      {project.description}
                    </p>
                    <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                      Case Study <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={project.id}
              className="project-card glass-card reveal visible"
              style={{ gridColumn: `span ${project.colSpan}` }}
            >
              <div className="project-image" style={{ height: project.imageHeight }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                {project.featured && (
                  <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
                    <span
                      className="chip chip-mint"
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        fontWeight: 700,
                        background: 'var(--tertiary-container)',
                        color: 'white',
                        borderColor: 'transparent',
                      }}
                    >
                      🔥 Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="chip chip-purple" style={{ fontSize: '12px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline text-headline-lg" style={{ marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: '20px' }}>{project.description}</p>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA within projects */}
      <div className="cta-section glass-strong reveal visible" style={{ marginTop: 'var(--section-gap)' }}>
        <div
          className="blob-bg"
          style={{
            top: 0,
            right: 0,
            width: '256px',
            height: '256px',
            background: 'var(--secondary-fixed)',
            opacity: 0.3,
            transform: 'translate(50%, -50%)',
          }}
        ></div>
        <div
          className="blob-bg"
          style={{
            bottom: 0,
            left: 0,
            width: '384px',
            height: '384px',
            background: 'var(--tertiary-fixed)',
            opacity: 0.3,
            transform: 'translate(-33%, 33%)',
          }}
        ></div>
        <h2 className="font-display text-display" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
          Have a <span style={{ color: 'var(--secondary)' }}>Vision?</span>
        </h2>
        <p
          className="text-body-lg"
          style={{
            color: 'var(--on-surface-variant)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          I'm currently accepting new projects. Let's collaborate and build something that's both technically superior
          and visually stunning.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', position: 'relative', zIndex: 1 }}>
          <a className="btn-primary" href="#contact" style={{ padding: '18px 40px', fontSize: '17px' }}>
            Start a Project
          </a>
          <a className="btn-glass" href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: '18px 40px', fontSize: '17px' }}>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
