import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Ambient Mouse Parallax Effect for Background Blobs
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.008;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.008;

      const blobs = document.querySelectorAll('.blob-bg');
      blobs.forEach((blob, index) => {
        const factor = (index + 1) * 3;
        blob.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* AMBIENT BACKGROUND BLOBS */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <div
          className="blob-bg animate-pulse-blob"
          style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'var(--primary-fixed)' }}
        ></div>
        <div
          className="blob-bg animate-pulse-blob"
          style={{
            bottom: '10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            background: 'var(--secondary-fixed)',
            animationDelay: '-4s',
          }}
        ></div>
        <div
          className="blob-bg animate-pulse-blob"
          style={{
            top: '40%',
            left: '60%',
            width: '350px',
            height: '350px',
            background: 'var(--tertiary-fixed-dim)',
            animationDelay: '-8s',
          }}
        ></div>
        <div
          className="blob-bg animate-float"
          style={{
            top: '70%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'var(--primary-fixed-dim)',
            animationDelay: '-3s',
          }}
        ></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
