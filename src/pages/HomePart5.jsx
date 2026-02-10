import React, { useState, useEffect, useRef } from 'react';
// import './Homepart5.css';
import { signatureDrinks } from '../assets/anardana/images/signature-drinks/index';

const Homepart5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const drinks = [
    {
      id: 1,
      image: signatureDrinks[0].image,
      name: "Limonata Zanzero",
      description: "Lemon, ginger, mint, soda water",
      signature: true
    },
    {
      id: 2,
      image: signatureDrinks[1].image,
      name: "Imli Ka Boota",
      description: "Cilantro infused tequila, tamarind cordial, fizz",
      signature: true
    },
    {
      id: 3,
      image: signatureDrinks[2].image,
      name: "Anardana Special Crafted Cocktail",
      description: "Pomegranate, basil, anardana secret spice, ginger ale",
      signature: true
    },
    {
      id: 4,
      image: signatureDrinks[3].image,
      name: "Kanpai",
      description: "Sake, yuzu, elderflower, sparkling wine",
      signature: true
    },
    {
      id: 5,
      image: signatureDrinks[4].image,
      name: "Plum Kulukki",
      description: "Plum wine, lemon, mint, soda water",
      signature: true
    }
  ];

  const itemsPerView = 3;
  const maxIndex = drinks.length - itemsPerView;

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= maxIndex) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return ( <>
      <style>{`
/* ================= HOME PART 4 ================= */


/* Homepart5.css */

.homepart5-container {
  width: 100%;
  padding: 80px 40px;
  background: #FFFFFF;
  overflow: hidden;
}

.homepart5-header {
  text-align: center;
  margin-bottom: 60px;
}

.homepart5-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.5px;
}

.homepart5-subtitle {
  font-size: 17px;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.carousel-container {
  overflow: hidden;
  border-radius: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.drink-card {
  flex: 0 0 33.333%;
  padding: 0 12px;
  box-sizing: border-box;
}

.drink-signature-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #FFB800;
  color: #1a1a1a;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 600;
  z-index: 10;
  font-family: 'Inter', Arial, sans-serif;
  text-transform: capitalize;
  box-shadow: 0 4px 12px rgba(255, 184, 0, 0.4);
}

.drink-image-wrapper {
  position: relative;
  width: 100%;
  height: 440px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
}

.drink-image-wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.drink-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.drink-image-wrapper:hover .drink-image {
  transform: scale(1.1);
}

.drink-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%);
  padding: 32px 24px;
  transform: translateY(0);
  transition: all 0.4s ease;
}

.drink-image-wrapper:hover .drink-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.1) 100%);
}

.drink-name {
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.3;
  letter-spacing: -0.3px;
}

.drink-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 400;
}

/* Carousel Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FFFFFF;
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  color: #1a1a1a;
}

.carousel-arrow:hover {
  background: #1a1a1a;
  color: #FFFFFF;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-arrow svg {
  width: 24px;
  height: 24px;
}

.carousel-arrow-left {
  left: 0;
}

.carousel-arrow-right {
  right: 0;
}

/* Carousel Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #D1D5DB;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot:hover {
  background: #9CA3AF;
  transform: scale(1.2);
}

.carousel-dot.active {
  background: #1a1a1a;
  width: 32px;
  border-radius: 5px;
}

/* Animation for cards on load */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-wrapper {
  animation: fadeIn 0.8s ease-out;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .drink-card {
    flex: 0 0 50%;
  }

  .carousel-wrapper {
    padding: 0 50px;
  }

  .drink-image-wrapper {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .homepart5-container {
    padding: 60px 20px;
  }

  .homepart5-title {
    font-size: 36px;
  }

  .homepart5-subtitle {
    font-size: 16px;
  }

  .carousel-wrapper {
    padding: 0 40px;
  }

  .drink-card {
    flex: 0 0 100%;
  }

  .drink-image-wrapper {
    height: 460px;
  }

  .drink-name {
    font-size: 22px;
  }

  .drink-description {
    font-size: 14px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
  }

  .carousel-arrow svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .homepart5-container {
    padding: 40px 16px;
  }

  .homepart5-title {
    font-size: 32px;
  }

  .homepart5-subtitle {
    font-size: 15px;
  }

  .carousel-wrapper {
    padding: 0 35px;
  }

  .drink-image-wrapper {
    height: 420px;
  }

  .drink-overlay {
    padding: 24px 20px;
  }

  .drink-name {
    font-size: 20px;
  }

  .drink-description {
    font-size: 13px;
  }

  .drink-signature-badge {
    top: 16px;
    right: 16px;
    padding: 6px 16px;
    font-size: 12px;
  }

  .carousel-arrow {
    width: 36px;
    height: 36px;
  }

  .carousel-arrow svg {
    width: 18px;
    height: 18px;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Prevent text selection on rapid clicks */
.carousel-arrow,
.carousel-dot {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Focus styles for accessibility */
.carousel-arrow:focus,
.carousel-dot:focus {
  outline: 2px solid #FFB800;
  outline-offset: 2px;
}

/* Loading state (optional) */
.drink-image {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.drink-image[src] {
  background: none;
  animation: none;
}
      `}</style>
  



  <div className="homepart5-container">
      <div className="homepart5-header">
        <h1 className="homepart5-title">Crafted Drinks</h1>
        <p className="homepart5-subtitle">
          Experience our signature beverages crafted with premium ingredients and
          traditional Indian flavors
        </p>
      </div>

      <div className="carousel-wrapper">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={handlePrev}
          aria-label="Previous drinks"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {drinks.map((drink) => (
              <div key={drink.id} className="drink-card">
                {drink.signature && (
                  <div className="drink-signature-badge">Signature</div>
                )}
                <div className="drink-image-wrapper">
                  <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="drink-image"
                  />
                  <div className="drink-overlay">
                    <h3 className="drink-name">{drink.name}</h3>
                    <p className="drink-description">{drink.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={handleNext}
          aria-label="Next drinks"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {[...Array(maxIndex + 1)].map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  
  </>
    
  );
};

export default Homepart5;