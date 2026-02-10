import React, { useState } from 'react';

export default function MenuShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentDrinkSlide, setCurrentDrinkSlide] = useState(0);

  const dishes = [
    {
      id: 1,
      name: 'Chicken Kurchan Bao Taco',
      description: 'Steamed bao filled with smoky chicken khurchan, laced with garlic yoghurt tahini sauce',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Special', color: 'purple' }
      ]
    },
    {
      id: 2,
      name: 'Kunafa Bird Nest',
      description: 'Crisp kunafa nest topped with rabdi and gulab jamun',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Dessert', color: 'pink' }
      ]
    },
    {
      id: 3,
      name: 'Gulkand Paan Tikki',
      description: 'Soft patties infused with fragrant betel leaf & sweet gulkand, layered with yogurt and chutneys',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Special', color: 'purple' }
      ]
    },
    {
      id: 4,
      name: 'Bhetki Fish Polllichathu',
      description: 'Fresh bhetki marinated with Malabar spices, wrapped and pan-seared in banana leaf, served with appam',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Main', color: 'orange' }
      ]
    },
    {
      id: 5,
      name: 'Anardana Shahi Paneer',
      description: 'Paneer simmered in a cashew and tomato gravy, velvety in texture and layered with aromatic spices',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Main', color: 'orange' }
      ]
    },
    {
      id: 6,
      name: 'Bhara-Bhara Veg Kebab Platter',
      description: 'Ricotta Dahi Kebab, Edamame Seekh, Paneer Tikka and Mushroom Galouti, grilled to perfection',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Appetizer', color: 'orange' }
      ]
    },
    {
      id: 7,
      name: 'Tangra Chilli Chicken',
      description: 'Paneer cubes and peppers wok-tossed in a smoky chilli sauce, echoing the fiery spirit of Kolkata',
      image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Appetizer', color: 'orange' }
      ]
    },
    {
      id: 8,
      name: 'Chicken Changezi Cornetto',
      description: 'Crisp warqi paratha cones filled with spiced chicken and paired with a cooling mint dip',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Appetizer', color: 'orange' }
      ]
    }
  ];

  const drinks = [
    {
      id: 1,
      name: 'Limonata Zanzero',
      description: 'Lemon, ginger, mint, soda water',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80'
    },
    {
      id: 2,
      name: 'Imli Ka Boota',
      description: 'Cilantro infused tequila, tamarind cordial, fizz',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80'
    },
    {
      id: 3,
      name: 'Anardana Special Crafted Cocktail',
      description: 'Pomegranate, basil, anardana secret spice, ginger ale',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&q=80'
    },
    {
      id: 4,
      name: 'Kesar Kulfi Martini',
      description: 'Vodka, saffron, cardamom, cream, pistachio',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80'
    },
    {
      id: 5,
      name: 'Masala Chai Old Fashioned',
      description: 'Bourbon, chai spice syrup, bitters, orange',
      image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=1200&q=80'
    }
  ];

  const nextDrink = () => {
    setCurrentDrinkSlide((prev) => (prev + 1) % drinks.length);
  };

  const prevDrink = () => {
    setCurrentDrinkSlide((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  const goToDrink = (index) => {
    setCurrentDrinkSlide(index);
  };

  const getVisibleDrinks = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(drinks[(currentDrinkSlide + i) % drinks.length]);
    }
    return visible;
  };

  return (
    <div className="menu-showcase">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .menu-showcase {
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
        }

        /* Food Section */
        .food-section {
          padding: 100px 60px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          color: #6c757d;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .dishes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1600px;
          margin: 0 auto 60px;
        }

        .dish-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .dish-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .image-container {
          position: relative;
          height: 320px;
          overflow: hidden;
          background: #000;
        }

        .dish-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s ease;
          position: absolute;
          top: 0;
          left: 0;
        }

        .dish-image.main {
          opacity: 1;
          z-index: 1;
        }

        .dish-image.hover {
          opacity: 0;
          z-index: 2;
        }

        .dish-card:hover .dish-image.main {
          opacity: 0;
          transform: scale(1.1);
        }

        .dish-card:hover .dish-image.hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .signature-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
          z-index: 3;
        }

        .card-content {
          padding: 28px;
        }

        .dish-name {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .dish-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .tags-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 6px 16px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .tag.red {
          background: #fee2e2;
          color: #dc2626;
        }

        .tag.green {
          background: #d1fae5;
          color: #059669;
        }

        .tag.purple {
          background: #f3e8ff;
          color: #9333ea;
        }

        .tag.pink {
          background: #fce7f3;
          color: #ec4899;
        }

        .tag.orange {
          background: #ffedd5;
          color: #ea580c;
        }

        .view-menu-btn {
          display: block;
          margin: 0 auto;
          padding: 18px 48px;
          background: linear-gradient(135deg, #5a1f1a 0%, #7d2a24 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(90, 31, 26, 0.3);
        }

        .view-menu-btn:hover {
          background: linear-gradient(135deg, #6b2a24 0%, #8d3a30 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(90, 31, 26, 0.4);
        }

        /* Drinks Section */
        .drinks-section {
          padding: 100px 60px;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
        }

        .drinks-carousel {
          position: relative;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .carousel-track {
          display: flex;
          gap: 32px;
          overflow: hidden;
        }

        .drink-card {
          flex: 0 0 calc(33.333% - 22px);
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .drink-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }

        .drink-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .drink-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
          padding: 32px 24px;
          color: white;
        }

        .drink-name {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 8px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .drink-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          opacity: 0.95;
          line-height: 1.5;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 10;
          font-size: 1.5rem;
          color: #1a1a2e;
        }

        .carousel-nav:hover {
          background: #f8f9fa;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
        }

        .carousel-nav.prev {
          left: 0;
        }

        .carousel-nav.next {
          right: 0;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #5a1f1a;
          width: 32px;
          border-radius: 6px;
        }

        .indicator:hover {
          background: #9ca3af;
        }

        @media (max-width: 1024px) {
          .dishes-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }

          .drink-card {
            flex: 0 0 calc(50% - 16px);
          }
        }

        @media (max-width: 768px) {
          .food-section,
          .drinks-section {
            padding: 60px 24px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .dishes-grid {
            grid-template-columns: 1fr;
          }

          .drinks-carousel {
            padding: 0 60px;
          }

          .drink-card {
            flex: 0 0 100%;
          }

          .carousel-nav {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      {/* Food Section */}
      <div className="food-section">
        <div className="section-header">
          <h2 className="section-title">Anardana Original's</h2>
          <p className="section-subtitle">
            Discover our most celebrated creations, crafted with passion and inspired by
            traditional Indian flavors
          </p>
        </div>

        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="dish-card"
              onMouseEnter={() => setHoveredCard(dish.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="image-container">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-image main"
                />
                <img
                  src={dish.hoverImage}
                  alt={`${dish.name} hover`}
                  className="dish-image hover"
                />
                <div className="signature-badge">Signature</div>
              </div>
              <div className="card-content">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <div className="tags-container">
                  {dish.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-menu-btn">
          View Full Menu →
        </button>
      </div>

      {/* Drinks Section */}
      <div className="drinks-section">
        <div className="section-header">
          <h2 className="section-title">Crafted Drinks</h2>
          <p className="section-subtitle">
            Experience our signature beverages crafted with premium ingredients and
            traditional Indian flavors
          </p>
        </div>

        <div className="drinks-carousel">
          <button className="carousel-nav prev" onClick={prevDrink}>
            ‹
          </button>

          <div className="carousel-track">
            {getVisibleDrinks().map((drink) => (
              <div key={drink.id} className="drink-card">
                <img src={drink.image} alt={drink.name} className="drink-image" />
                <div className="signature-badge">Signature</div>
                <div className="drink-overlay">
                  <h3 className="drink-name">{drink.name}</h3>
                  <p className="drink-description">{drink.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={nextDrink}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {drinks.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentDrinkSlide ? 'active' : ''}`}
              onClick={() => goToDrink(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}