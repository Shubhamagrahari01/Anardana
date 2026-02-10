import React from 'react';

export default function TextMarquee() {
  const text = "Anardana - Anardana is a modern Indian restaurant that offers a unique dining experience, blending authentic Indian flavors with contemporary cuisine. The restaurant uses fresh, seasonal ingredients and traditional cooking techniques to create dishes that are both delicious and visually stunning.";

  return (
    <div className="marquee-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        .marquee-container {
          background: linear-gradient(135deg, #2d1810 0%, #1a0f0a 100%);
          padding: 20px 0;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #2d1810 0%, transparent 100%);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #2d1810 0%, transparent 100%);
        }

        .marquee-wrapper {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          gap: 40px;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-text {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #e5e7eb;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          box-shadow: 0 2px 8px rgba(124, 45, 18, 0.4);
        }

        .separator {
          width: 6px;
          height: 6px;
          background: #7c2d12;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 1rem;
          }

          .marquee-content {
            gap: 30px;
            animation-duration: 25s;
          }

          .logo-icon {
            width: 28px;
            height: 28px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .marquee-container {
            padding: 16px 0;
          }

          .marquee-text {
            font-size: 0.9rem;
          }

          .marquee-content {
            gap: 24px;
          }
        }
      `}</style>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {/* Duplicate the content twice for seamless loop */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="marquee-text">
              <div className="brand-logo">
                <div className="logo-icon">अ</div>
              </div>
              <span>{text}</span>
              <div className="separator"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}