import React, { useState, useEffect, useRef } from 'react';

export default function OurStoryPage() {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const values = [
    {
      id: 1,
      icon: '🍲',
      title: 'Authenticity',
      description: 'We honor traditional Indian recipes while embracing modern culinary innovation',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)'
    },
    {
      id: 2,
      icon: '❤️',
      title: 'Passion',
      description: 'Every dish is crafted with love and dedication to excellence',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)'
    },
    {
      id: 3,
      icon: '👥',
      title: 'Community',
      description: 'Building connections through shared meals and cultural experiences',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)'
    },
    {
      id: 4,
      icon: '🏆',
      title: 'Excellence',
      description: 'Committed to the highest standards in food quality and service',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)'
    }
  ];

  const stats = [
    { value: 11, label: 'RESTAURANTS' },
    { value: 1, suffix: 'M+', label: 'HAPPY CUSTOMERS' },
    { value: 7, suffix: '+', label: 'YEARS' }
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map(stat => ({ ...stat, currentValue: 0 }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = {
              ...newStats[index],
              currentValue: Math.min(Math.round(increment * currentStep), stat.value)
            };
            return newStats;
          });
        }
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [countersStarted]);

  return (
    <div className="our-story-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .our-story-page {
          background: white;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          margin-top: -100px;
          height: 70vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: slowZoom 20s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          padding: 0 20px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 24px;
          text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
        }

        /* Legacy Section */
        .legacy-section {
          padding: 120px 60px;
          background: white;
        }

        .legacy-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .legacy-content {
          order: 1;
        }

        .section-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 32px;
        }

        .section-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 32px;
          line-height: 1.2;
        }

        .section-text {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .legacy-image-container {
          position: relative;
          order: 2;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .legacy-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .legacy-image-container:hover .legacy-image {
          transform: scale(1.05);
        }

        .stat-badge {
          position: absolute;
          bottom: 32px;
          right: 32px;
          background: linear-gradient(135deg, #7c2d12 0%, #b8693d 100%);
          color: white;
          padding: 32px 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(124, 45, 18, 0.4);
          backdrop-filter: blur(10px);
        }

        .badge-value {
          font-family: 'Fredoka', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
        }

        .badge-label {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          opacity: 0.95;
        }

        /* Values Section */
        .values-section {
          padding: 120px 60px;
          background: linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%);
        }

        .values-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .values-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .value-card {
          background: white;
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .value-card:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .value-card:hover .value-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .value-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .value-description {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 60px;
          background: linear-gradient(135deg, #5a1f1a 0%, #b8693d 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(248, 113, 113, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(251, 146, 60, 0.1) 0%, transparent 50%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 32px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .cta-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 48px;
          line-height: 1.6;
        }

        .cta-highlight {
          font-weight: 700;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .cta-btn {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 18px 48px;
          border-radius: 50px;
          border: 2px solid;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .btn-primary {
          background: white;
          color: #5a1f1a;
          border-color: white;
        }

        .btn-primary:hover {
          background: transparent;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
        }

        .cta-stats {
          display: flex;
          justify-content: center;
          gap: 100px;
          padding-top: 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-stat {
          text-align: center;
        }

        .cta-stat-value {
          font-family: 'Fredoka', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 12px;
        }

        .cta-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 1200px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .legacy-container {
            gap: 60px;
          }
        }

        @media (max-width: 900px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .legacy-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .legacy-image-container {
            height: 400px;
          }

          .cta-stats {
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .legacy-section,
          .values-section,
          .cta-section {
            padding: 80px 24px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .cta-stats {
            flex-direction: column;
            gap: 40px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://www.anardana.in/6.jpg"
          alt="Anardana Restaurant Interior"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-subtitle">
            A journey of flavors, tradition, and innovation since 2019
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="legacy-container">
          <div className="legacy-content">
            <div className="section-icon">🍲</div>
            <h2 className="section-title">The Anardana Legacy</h2>
            <p className="section-text">
              Founded in 2019, Anardana began with a simple vision: To reimagine traditional
              Indian cuisine for the modern palate while honoring culinary heritage. Our name,
              meaning "pomegranate seeds" in Hindi, symbolizes the essence of our philosophy—each
              seed unique, yet part of a greater whole.
            </p>
            <p className="section-text">
              What started as a single outlet in the heart of Delhi has rapidly blossomed into
              a family of 11 distinctive restaurants across Delhi NCR. Each location tells its
              own story, reflecting the local culture while maintaining the core values that
              define Anardana.
            </p>
            <p className="section-text">
              Our chefs, trained in both traditional and contemporary techniques, source the
              finest ingredients to create dishes that honor their heritage while surprising
              and delighting contemporary diners. From street food reimagined to royal Mughlai
              feasts, every menu item is a celebration of India's rich culinary diversity.
            </p>
          </div>

          <div className="legacy-image-container">
            <img
              src="https://www.anardana.in/About-the-brand.jpg"
              alt="Anardana Restaurant Ambiance"
              className="legacy-image"
            />
            <div className="stat-badge">
              <div className="badge-value">7+</div>
              <div className="badge-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
            The principles that guide everything we do
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <div
              key={value.id}
              className="value-card"
              onMouseEnter={() => setHoveredValue(value.id)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div
                className="value-icon"
                style={{ background: value.gradient }}
              >
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={statsRef}>
        <div className="cta-content">
          <div className="cta-icon">❤️</div>
          <h2 className="cta-title">Be Part of Our Story</h2>
          <p className="cta-subtitle">
            Join us for an unforgettable dining experience at any of our{' '}
            <span className="cta-highlight">11 unique restaurants</span> across Delhi NCR
          </p>

          <div className="cta-buttons">
            <button className="cta-btn btn-primary">
              <span>Find an Outlet</span>
              <span>→</span>
            </button>
            <button className="cta-btn btn-secondary">
              <span>Book a Table</span>
              <span>📅</span>
            </button>
          </div>

          <div className="cta-stats">
            {animatedStats.map((stat, index) => (
              <div key={index} className="cta-stat">
                <div className="cta-stat-value">
                  {stat.currentValue}{stat.suffix || ''}
                </div>
                <div className="cta-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}