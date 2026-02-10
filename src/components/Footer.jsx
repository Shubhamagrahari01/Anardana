import React, { useState } from 'react';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    { id: 'facebook', icon: '📘', url: '#', label: 'Facebook' },
    { id: 'instagram', icon: '📷', url: '#', label: 'Instagram' },
    { id: 'twitter', icon: '🐦', url: '#', label: 'Twitter' },
    { id: 'youtube', icon: '📺', url: '#', label: 'YouTube' },
    { id: 'linkedin', icon: '💼', url: '#', label: 'LinkedIn' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Our Team', url: '#' },
    { name: 'Careers', url: '#' }
  ];

  const diningLinks = [
    { name: 'Our Restaurants', url: '#' },
    { name: 'Menu', url: '#' },
    { name: 'Reservations', url: '#' },
    { name: 'Gallery', url: '#' },
    { name: 'Private Events', url: '#' }
  ];

  const restaurants = [
    { name: 'Anardana UnityOne Elegante Mall', url: '#' },
    { name: 'Anardana Ambience Mall', url: '#' },
    { name: 'Anardana Pacific Mall', url: '#' },
    { name: 'Anardana Golf Course Road', url: '#' },
    { name: 'Anardana Ranchi', url: '#' },
    { name: 'Anardana Max Square', url: '#' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '#' },
    { name: 'Feedback', url: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Sitemap', url: '#' }
  ];

  return (
    <footer className="footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .footer {
          background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
          color: #e5e7eb;
          padding: 80px 60px 0;
        }

        .footer-main {
          max-width: 1600px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .brand-logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          box-shadow: 0 4px 16px rgba(124, 45, 18, 0.4);
        }

        .brand-name {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          letter-spacing: 0.02em;
        }

        .brand-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #9ca3af;
          margin-bottom: 32px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-icon:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(124, 45, 18, 0.3);
          border-color: rgba(124, 45, 18, 0.5);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          width: fit-content;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #c2410c 0%, #ea580c 100%);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: white;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          color: #f472b6;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .view-all-link:hover {
          color: #ec4899;
          transform: translateX(8px);
        }

        .view-all-link::after {
          background: linear-gradient(90deg, #f472b6 0%, #ec4899 100%);
        }

        .contact-section {
          padding: 40px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-grid {
          max-width: 1600px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }

        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          background: rgba(124, 45, 18, 0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
          border: 1px solid rgba(124, 45, 18, 0.3);
        }

        .contact-details {
          flex: 1;
        }

        .contact-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .contact-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #9ca3af;
          line-height: 1.6;
        }

        .contact-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #ea580c;
        }

        .footer-bottom {
          padding: 32px 0;
        }

        .footer-bottom-content {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .legal-links {
          display: flex;
          gap: 32px;
        }

        .legal-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-link:hover {
          color: white;
        }

        @media (max-width: 1200px) {
          .footer-main {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 40px;
          }

          .footer-section:last-child {
            grid-column: span 2;
          }
        }

        @media (max-width: 900px) {
          .footer {
            padding: 60px 40px 0;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-brand {
            grid-column: span 2;
            max-width: 100%;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 50px 24px 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .section-title {
            font-size: 1rem;
          }

          .legal-links {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>

      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-header">
            <div className="brand-logo">अ</div>
            <h3 className="brand-name">Anardana</h3>
          </div>
          <p className="brand-description">
            Anardana is a modern Indian restaurant that offers a unique dining experience, 
            blending authentic Indian flavors with contemporary cuisine. The restaurant uses 
            fresh, seasonal ingredients and traditional cooking techniques to create dishes 
            that are both delicious and visually stunning. Anardana is the perfect place to 
            enjoy a special occasion meal or simply a casual night out with friends.
          </p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="social-icon"
                onMouseEnter={() => setHoveredSocial(social.id)}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="section-title">Company</h4>
          <div className="footer-links">
            {companyLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer-link"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Dining Section */}
        <div className="footer-section">
          <h4 className="section-title">Dining</h4>
          <div className="footer-links">
            {diningLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer-link"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="footer-section">
          <h4 className="section-title">Our Restaurants</h4>
          <div className="footer-links">
            {restaurants.map((restaurant, index) => (
              <a
                key={index}
                href={restaurant.url}
                className="footer-link"
                onMouseEnter={() => setHoveredLink(restaurant.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {restaurant.name}
              </a>
            ))}
            <a href="#" className="footer-link view-all-link">
              View All Restaurants →
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4 className="section-title">Support</h4>
          <div className="footer-links">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer-link"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <div className="contact-label">Email</div>
              <a href="mailto:hello@anardana.in" className="contact-value contact-link">
                hello@anardana.in
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <div className="contact-label">Phone</div>
              <a href="tel:01204678639" className="contact-value contact-link">
                01204678639
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <div className="contact-label">Headquarter</div>
              <div className="contact-value">
                3, Hargobind Enclave, A G C R Enclave,<br />
                Anand Vihar, Delhi, 110092
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © 2026 Anardana Restaurants Pvt. Ltd.. All rights reserved.
          </div>
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.url} className="legal-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}