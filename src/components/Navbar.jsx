import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor scroll for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // ScrollSpy to track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="navbar"
      id="navbar"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-150%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <a className="nav-logo" href="#hero">
        Rudra Nishad
      </a>
      <div
        className="nav-links"
        id="navLinks"
        style={
          isMobileMenuOpen
            ? {
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '70px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '1rem',
                padding: '24px',
                gap: '16px',
                boxShadow: '0 16px 48px rgba(107, 56, 212, 0.15)',
                width: '200px',
                zIndex: 200,
              }
            : {}
        }
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeLink === link.href ? 'active' : ''}
            onClick={() => {
              setActiveLink(link.href);
              setIsMobileMenuOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>
    </nav>
  );
}
