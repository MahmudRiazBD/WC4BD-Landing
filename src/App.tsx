import React, { useState } from 'react';
import Logo from './Logo';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Inline styles for hamburger animation based on state
  const span1Style = isMenuOpen
    ? { transform: 'rotate(45deg) translate(5px, 5px)' }
    : { transform: 'none' };

  const span2Style = isMenuOpen
    ? { opacity: '0' }
    : { opacity: '1' };

  const span3Style = isMenuOpen
    ? { transform: 'rotate(-45deg) translate(5px, -5px)' }
    : { transform: 'none' };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <a href="#" className="logo" aria-label="WC4BD Home">
            <Logo />
          </a>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
            <ul className="nav-list">
              <li><a href="#features" onClick={closeMenu}>Features</a></li>
              <li><a href="#documentation" onClick={closeMenu}>Documentation</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li>
                <a
                  href="https://wordpress.org/plugins/wc4bd/"
                  className="btn btn-primary btn-sm"
                  onClick={closeMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Plugin
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span style={span1Style}></span>
            <span style={span2Style}></span>
            <span style={span3Style}></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="badge">Version 1.0.0 Available Now</span>
              <h1>Ecommerce Toolkit for <span className="highlight">Bangladesh</span></h1>
              <p className="hero-text">
                Streamline your e-commerce operations with professional Invoice & Shipping
                Label printing. Designed specifically for Bangladeshi businesses.
              </p>
              <div className="hero-buttons">
                <a href="https://wordpress.org/plugins/wc4bd/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download for Free</a>
                <a href="#documentation" className="btn btn-secondary">Read Documentation</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="mockup-window">
                <div className="mockup-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-body">
                  <div className="invoice-preview">
                    <div className="preview-header">INVOICE</div>
                    <div className="preview-lines">
                      <div className="line long"></div>
                      <div className="line short"></div>
                      <div className="line medium"></div>
                    </div>
                    <div className="preview-grid">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose WC4BD?</h2>
              <p>Everything you need to manage your WooCommerce orders efficiently.</p>
            </div>
            <div className="features-grid">
              <article className="feature-card">
                <div className="icon-box" aria-hidden="true">📄</div>
                <h3>Professional Invoices</h3>
                <p>
                  Generate clean, standard invoices automatically. Includes your business logo, address, and
                  order details.
                </p>
              </article>
              <article className="feature-card">
                <div className="icon-box" aria-hidden="true">🏷️</div>
                <h3>Shipping Stickers</h3>
                <p>
                  Print shipping labels optimized for <strong>75x100 mm</strong> thermal stickers. Perfect for
                  courier integration.
                </p>
              </article>
              <article className="feature-card">
                <div className="icon-box" aria-hidden="true">⚡</div>
                <h3>Bulk Actions</h3>
                <p>
                  Save time by printing invoices or stickers for multiple orders at once directly from the
                  order list.
                </p>
              </article>
              <article className="feature-card">
                <div className="icon-box" aria-hidden="true">🚀</div>
                <h3>Lightweight & Fast</h3>
                <p>
                  No bloat. The plugin is designed to be extremely lightweight and won't slow down your
                  website.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="documentation" className="documentation">
          <div className="container">
            <div className="section-header">
              <h2>Quick Start Guide</h2>
              <p>Get up and running in just 3 simple steps</p>
            </div>
            <div className="docs-timeline">
              <div className="doc-step">
                <div className="step-number">
                  <span>1</span>
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon" aria-hidden="true">📦</div>
                    <h3>Installation</h3>
                  </div>
                  <p>
                    Upload the plugin files to the <code>/wp-content/plugins/wc4bd</code> directory, or
                    install the plugin through the WordPress plugins screen directly.
                  </p>
                  <div className="step-actions">
                    <span className="step-badge">Easy Setup</span>
                    <span className="step-time">⏱️ 2 min</span>
                  </div>
                </div>
              </div>

              <div className="doc-step">
                <div className="step-number">
                  <span>2</span>
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon" aria-hidden="true">⚙️</div>
                    <h3>Configuration</h3>
                  </div>
                  <p>
                    Navigate to <strong>WooCommerce → WC4BD Settings</strong>. Upload your business logo, set
                    your business name, address, phone number, and terms & conditions.
                  </p>
                  <div className="step-actions">
                    <span className="step-badge">Customize</span>
                    <span className="step-time">⏱️ 5 min</span>
                  </div>
                </div>
              </div>

              <div className="doc-step">
                <div className="step-number">
                  <span>3</span>
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon" aria-hidden="true">🚀</div>
                    <h3>Start Using</h3>
                  </div>
                  <p>
                    Navigate to the <strong>Orders</strong> page. You'll see new action buttons for "Print
                    Invoice" and "Print Sticker". Use the Bulk Actions dropdown to print for multiple orders
                    at once.
                  </p>
                  <div className="step-actions">
                    <span className="step-badge">Ready to Go!</span>
                    <span className="step-time">⏱️ 1 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="docs-footer">
              <p>
                Need help? <a href="https://wordpress.org/plugins/wc4bd/" target="_blank" rel="noopener noreferrer">Visit our support forum</a>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h2>About WC4BD</h2>
              <p>Powering e-commerce excellence in Bangladesh</p>
            </div>
            <div className="about-grid">
              <div className="about-card developer-card">
                <div className="developer-avatar">
                  <img
                    src="https://unavatar.io/mahmudriaz.bd@gmail.com"
                    alt="Mahmudul Hasan Riaz"
                    className="avatar-image"
                  />
                </div>
                <h3>Mahmudul Hasan Riaz</h3>
                <p className="role">Lead Developer</p>
                <p className="bio">
                  Passionate about building tools that empower Bangladeshi businesses. Dedicated to
                  creating high-quality, user-friendly solutions for the e-commerce ecosystem.
                </p>
                <div className="social-links">
                  <a href="https://riaz.com.bd" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Mahmudul Hasan Riaz Website">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </a>
                  <a href="https://commercians.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Commercians Website">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="about-card stats-card">
                <h3>Plugin Statistics</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-icon icon-version">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">1.0.0</div>
                      <div className="stat-label">Current Version</div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon icon-free">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">Free</div>
                      <div className="stat-label">& Open Source</div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon icon-wp">
                      <img
                        src="https://s.w.org/images/wmark.png"
                        alt="WordPress"
                        width="24"
                        height="24"
                        style={{ display: 'block' }}
                      />
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">WP 5.0+</div>
                      <div className="stat-label">Compatible</div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon icon-bd">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" fill="#006A4E" />
                        <circle cx="9" cy="9" r="4" fill="#F42A41" />
                      </svg>
                    </div>
                    <div className="stat-details">
                      <div className="stat-number">Made for</div>
                      <div className="stat-label">Bangladesh</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-card mission-card">
                <h3>Our Mission</h3>
                <p>
                  To simplify order management and fulfillment for Bangladeshi e-commerce businesses through
                  innovative, locally-focused tools.
                </p>
                <div className="mission-features">
                  <div className="mission-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span>Local market understanding</span>
                  </div>
                  <div className="mission-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span>Optimized for Bangladeshi workflows</span>
                  </div>
                  <div className="mission-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span>Continuous updates & support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <p>&copy; 2025 WC4BD. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>A project by <a href="https://commercians.com" target="_blank" rel="noopener noreferrer">COMMERCIANS</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;