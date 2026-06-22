import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Collaboration Inquiry',
    message: '',
    website: '', // Honeypot field (hidden from humans, filled by bots)
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam check: if honeypot field is filled, silently discard the submission
    if (formData.website) {
      console.warn("Spam submission blocked.");
      setStatus('sending');
      setTimeout(() => {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: 'Collaboration Inquiry',
            message: '',
            website: '',
          });
        }, 3000);
      }, 1500);
      return;
    }
    
    const submittedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submittedData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (submittedData.firstName.length > 50 || submittedData.lastName.length > 50) {
      alert("Name exceeds character limit of 50.");
      return;
    }

    if (submittedData.message.length > 2000) {
      alert("Message exceeds character limit of 2000.");
      return;
    }

    setStatus('sending');

    // Simulate safe API request
    setTimeout(() => {
      setStatus('sent');

      setTimeout(() => {
        setStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: 'Collaboration Inquiry',
          message: '',
          website: '',
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="container section-gap">
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto var(--section-gap)' }} className="reveal visible">
        <h2 className="font-display text-display" style={{ marginBottom: '24px' }}>
          Let's build something <span style={{ color: 'var(--primary)' }}>extraordinary.</span>
        </h2>
        <p className="text-body-lg" style={{ color: 'var(--on-surface-variant)' }}>
          Whether you have a technical challenge or a creative vision, I'm here to bridge the gap between engineering
          and digital artistry.
        </p>
      </div>

      <div className="contact-grid reveal visible">
        {/* Contact Info & Socials */}
        <div>
          <div className="glass-card" style={{ padding: 'var(--card-padding)', marginBottom: '40px' }}>
            <h3 className="font-headline text-headline-md" style={{ marginBottom: '32px' }}>
              Get in touch
            </h3>
            <div className="contact-item">
              <div className="contact-icon" style={{ background: 'var(--primary-fixed)', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p
                  className="font-code"
                  style={{
                    color: 'var(--on-surface-variant)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '11px',
                  }}
                >
                  Email
                </p>
                <p style={{ fontWeight: 700 }}>rudraburn2006@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" style={{ background: 'var(--secondary-fixed)', color: 'var(--secondary)' }}>
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p
                  className="font-code"
                  style={{
                    color: 'var(--on-surface-variant)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '11px',
                  }}
                >
                  Based in
                </p>
                <p style={{ fontWeight: 700 }}>Ranchi, Jharkhand, India</p>
              </div>
            </div>
            <div className="contact-item" style={{ marginBottom: 0 }}>
              <div className="contact-icon" style={{ background: 'var(--tertiary-fixed)', color: 'var(--tertiary)' }}>
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p
                  className="font-code"
                  style={{
                    color: 'var(--on-surface-variant)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '11px',
                  }}
                >
                  Availability
                </p>
                <p style={{ fontWeight: 700 }}>Open for Projects</p>
              </div>
            </div>
          </div>

          <h3 className="font-headline text-headline-md" style={{ marginBottom: '16px' }}>
            Follow the journey
          </h3>
          <div className="social-links">
            <a className="social-link glass-card" href="https://www.linkedin.com/in/rudra-nishad-185a142b6" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="material-symbols-outlined">link</span> LinkedIn
            </a>
            <a className="social-link glass-card" href="https://github.com/rudranishad2006-max" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="material-symbols-outlined">terminal</span> GitHub
            </a>
            <a className="social-link glass-card" href="https://www.instagram.com/rudra_bigman/" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="material-symbols-outlined">photo_camera</span> Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form glass" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="TunTun"
                required
                maxLength={50}
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Mosi"
                required
                maxLength={50}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="pagala@example.com"
              required
              maxLength={100}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" value={formData.subject} onChange={handleChange}>
              <option value="Collaboration Inquiry">Collaboration Inquiry</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Technical Consulting">Technical Consulting</option>
              <option value="Saying Hello">Saying Hello</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Whats on your mind bro :D..."
              required
              maxLength={2000}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Honeypot field (hidden from humans) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            style={{
              pointerEvents: status !== 'idle' ? 'none' : 'auto',
              opacity: status === 'sending' ? 0.8 : 1,
              background:
                status === 'sent'
                  ? 'linear-gradient(135deg, #00855b, #4edea3)'
                  : 'linear-gradient(135deg, var(--primary), var(--secondary))',
            }}
          >
            {status === 'idle' && (
              <>
                Send Message <span className="material-symbols-outlined">send</span>
              </>
            )}
            {status === 'sending' && (
              <>
                Sending...{' '}
                <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>
                  sync
                </span>
              </>
            )}
            {status === 'sent' && (
              <>
                Message Sent! <span className="material-symbols-outlined">check_circle</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
