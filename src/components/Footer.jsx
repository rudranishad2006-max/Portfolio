export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div
              className="font-display"
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--primary)',
                marginBottom: '8px',
              }}
            >
              Rudra Nishad
            </div>
            <p style={{ color: 'var(--on-surface-variant)', maxWidth: '300px' }}>
              © 2026 Rudra Nishad. Built with technical playfulness. HAHAHAHA :D
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/rudra-nishad-185a142b6" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/rudranishad2006-max" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/rudra_bigman/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p className="font-code" style={{ color: 'var(--outline)', fontSize: '13px' }}>
              Engineered with ❤️ and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
