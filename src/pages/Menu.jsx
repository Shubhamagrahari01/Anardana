import React, { useState } from 'react';

export default function AnardanaOriginals() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      ],
      isSignature: true
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
      ],
      isSignature: true
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
      ],
      isSignature: true
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
      ],
      isSignature: true
    },
    {
      id: 5,
      name: 'Butter Chicken Kulcha',
      description: 'Tender chicken in rich tomato gravy served with soft, buttery kulcha bread',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Special', color: 'purple' }
      ],
      isSignature: true
    },
    {
      id: 6,
      name: 'Paneer Tikka Skewers',
      description: 'Marinated cottage cheese cubes grilled to perfection with aromatic spices',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Starter', color: 'blue' }
      ],
      isSignature: true
    },
    {
      id: 7,
      name: 'Galouti Kebab',
      description: 'Melt-in-mouth minced lamb kebabs infused with aromatic spices and saffron',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Special', color: 'purple' }
      ],
      isSignature: true
    },
    {
      id: 8,
      name: 'Rasmalai Tres Leches',
      description: 'Traditional rasmalai reimagined with three milk sponge cake and saffron cream',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Dessert', color: 'pink' }
      ],
      isSignature: true
    },
    {
      id: 9,
      name: 'Tandoori Prawns',
      description: 'Jumbo prawns marinated in yogurt and tandoori spices, char-grilled',
      image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Main', color: 'orange' }
      ],
      isSignature: true
    },
    {
      id: 10,
      name: 'Dal Makhani',
      description: 'Creamy black lentils slow-cooked overnight with butter and aromatic spices',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Main', color: 'orange' }
      ],
      isSignature: true
    },
    {
      id: 11,
      name: 'Biryani Dome',
      description: 'Fragrant basmati rice layered with tender meat, sealed in aromatic pastry',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80',
      tags: [
        { label: 'Non-Veg', color: 'red' },
        { label: 'Special', color: 'purple' }
      ],
      isSignature: true
    },
    {
      id: 12,
      name: 'Gulab Jamun Cheesecake',
      description: 'Fusion dessert combining traditional gulab jamun with creamy New York cheesecake',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
      tags: [
        { label: 'Veg', color: 'green' },
        { label: 'Dessert', color: 'pink' }
      ],
      isSignature: true
    }
  ];

  return (
    <div className="originals-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .originals-section {
          background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
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
          font-weight: 400;
        }

        .dishes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .dish-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
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
        }

        .dish-image.main {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 1;
        }

        .dish-image.hover {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
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
          z-index: 2;
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
          min-height: 60px;
        }

        .dish-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 75px;
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
          text-transform: capitalize;
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

        .tag.blue {
          background: #dbeafe;
          color: #2563eb;
        }

        @media (max-width: 1400px) {
          .dishes-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .originals-section {
            padding: 80px 40px;
          }

          .section-title {
            font-size: 3rem;
          }

          .dishes-grid {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .originals-section {
            padding: 60px 24px;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .dishes-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .image-container {
            height: 280px;
          }

          .dish-name {
            font-size: 1.25rem;
            min-height: auto;
          }

          .dish-description {
            min-height: auto;
          }
        }
      `}</style>

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
                alt={`${dish.name} alternative view`}
                className="dish-image hover"
              />
              {dish.isSignature && (
                <div className="signature-badge">Signature</div>
              )}
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
    </div>
  );
} 