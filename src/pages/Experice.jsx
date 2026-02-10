import React, { useState, useEffect, useRef } from 'react';

export default function WhyChooseAnardana() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: '🍲',
      title: 'Authentic Flavors',
      description: 'Traditional Indian recipes reimagined with modern techniques and premium ingredients',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
    },
    {
      id: 2,
      icon: '👨‍🍳',
      title: 'Hero Chefs of Anardana',
      description: 'Award-winning culinary team with decades of combined experience in Indian cuisine',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 3,
      icon: '👥',
      title: '11 Unique Restaurants',
      description: 'Each location offers its own distinctive ambiance, vibe, and specially curated menu',
      gradient: 'linear-gradient(135deg, #db2777 0%, #be185d 100%)'
    },
    {
      id: 4,
      icon: '🏆',
      title: 'Award-Winning',
      description: 'Recognized for excellence in food quality, service, and dining experience',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 5,
      icon: '🎉',
      title: 'Private Events',
      description: 'Customized catering and event spaces for your special celebrations',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    },
    {
      id: 6,
      icon: '❤️',
      title: 'Guest Satisfaction',
      description: 'Consistently rated 4.5+ stars with thousands of happy diners across all restaurants',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    }
  ];

  const stats = [
    { id: 1, value: 11, suffix: '', label: 'Unique Restaurants' },
    { id: 2, value: 150, suffix: '+', label: 'Menu Items' },
    { id: 3, value: 1, suffix: 'M+', label: 'Happy Customers' },
    { id: 4, value: 7, suffix: '+', label: 'Years of Excellence' }
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

    const duration = 2000; // 2 seconds
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
    <div className="why-choose-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .why-choose-section {
          background: linear-gradient(180deg, 
            #fdf2f8 0%, 
            #fce7f3 25%, 
            #fbcfe8 50%, 
            #fce7f3 75%, 
            #fdf2f8 100%
          );
          padding: 120px 60px;
          position: relative;
          overflow: hidden;
        }

        .why-choose-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(251, 207, 232, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .content-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .badge {
          display: inline-block;
          padding: 10px 24px;
          background: white;
          border-radius: 30px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a2e;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .main-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .title-highlight {
          background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          color: #6c757d;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 80px;
        }

        .feature-card {
          background: white;
          border-radius: 24px;
          padding: 48px 36px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(124, 45, 18, 0.02) 0%, rgba(153, 27, 27, 0.02) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          z-index: 1;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.2) rotate(10deg);
        }

        .feature-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .feature-description {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .stats-section {
          background: white;
          border-radius: 32px;
          padding: 60px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(251, 207, 232, 0.3) 0%, rgba(253, 242, 248, 0.3) 100%);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
          position: relative;
          z-index: 1;
        }

        .stat-item {
          text-align: center;
          position: relative;
        }

        .stat-item::after {
          content: '';
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #e5e7eb, transparent);
        }

        .stat-item:last-child::after {
          display: none;
        }

        .stat-value {
          font-family: 'Fredoka', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #be185d 0%, #9f1239 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 16px;
          display: block;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #6c757d;
          font-weight: 500;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-item.animated .stat-value {
          animation: countUp 0.6s ease-out;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            gap: 40px;
          }
        }

        @media (max-width: 900px) {
          .why-choose-section {
            padding: 80px 40px;
          }

          .main-title {
            font-size: 3rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .stat-item::after {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .why-choose-section {
            padding: 60px 24px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .feature-card {
            padding: 36px 28px;
          }

          .stats-section {
            padding: 40px 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .stat-value {
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="content-wrapper">
        <div className="section-header">
          <div className="badge">OUR EXCELLENCE</div>
          <h2 className="main-title">
            Why Choose <span className="title-highlight">Anardana</span>
          </h2>
          <p className="subtitle">
            More than just a restaurant - we're a celebration of India's culinary heritage
            with a contemporary twist
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="icon-wrapper"
                style={{ background: feature.gradient }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-section" ref={statsRef}>
          <div className="stats-grid">
            {animatedStats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`stat-item ${countersStarted ? 'animated' : ''}`}
              >
                <span className="stat-value">
                  {stat.currentValue}{stat.suffix}
                </span>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}