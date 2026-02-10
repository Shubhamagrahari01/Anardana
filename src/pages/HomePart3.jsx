import React from "react";

/* ================= IMAGE IMPORTS ================= */
/* Adjust path if your folder differs */
import {
  signatureDishes
} from "../assets/anardana/images/signature-dishes";

const Homepart3 = () => {
  const dishes = [
    {
      id: 1,
      name: "Chicken Kurchan Bao Taco",
      description:
        "Steamed bao filled with smoky chicken khurchan, laced with garlic yoghurt tahini...",
      image: signatureDishes[0].image,
      tags: ["Non-Veg", "Special"],
      signature: true,
    },
    {
      id: 2,
      name: "Kunafa Bird Nest",
      description:
        "Crisp kunafa nest topped with rabdi and gulab jamun",
      image: signatureDishes[1].image,
      tags: ["Veg", "Dessert"],
      signature: true,
    },
    {
      id: 3,
      name: "Gulkand Paan Tikki",
      description:
        "Soft patties infused with fragrant betel leaf & sweet gulkand, layered with yogurt and...",
      image: signatureDishes[2].image,
      tags: ["Veg", "Special"],
      signature: true,
    },
    {
      id: 4,
      name: "Bhetki Fish Pollichathu",
      description:
        "Fresh bhetki marinated with Malabar spices, wrapped and pan-seared in banana leaf...",
      image: signatureDishes[3].image,
      tags: ["Non-Veg", "Main"],
      signature: true,
    },
    {
      id: 5,
      name: "Tandoori Momos",
      description:
        "Steamed momos marinated in tandoori spices and grilled to perfection",
      image: signatureDishes[4].image,
      tags: ["Veg", "Special"],
      signature: true,
    },
    {
      id: 6,
      name: "Butter Chicken Kulcha",
      description:
        "Soft kulcha served with rich butter chicken and aromatic spices",
      image: signatureDishes[5].image,
      tags: ["Non-Veg", "Main"],
      signature: true,
    },
    {
      id: 7,
      name: "Paneer Tikka Roll",
      description:
        "Grilled paneer tikka wrapped in soft roomali roti with mint chutney",
      image: signatureDishes[6].image,
      tags: ["Veg", "Special"],
      signature: true,
    },
    {
      id: 8,
      name: "Malai Kebab Platter",
      description:
        "Tender chicken malai kebabs served with fresh salad and dips",
      image: signatureDishes[7].image,
      tags: ["Non-Veg", "Main"],
      signature: true,
    },
  ];

  const getTagClass = (tag) => {
    switch (tag.toLowerCase()) {
      case "non-veg":
        return "tag-nonveg";
      case "veg":
        return "tag-veg";
      case "special":
        return "tag-special";
      case "dessert":
        return "tag-dessert";
      case "main":
        return "tag-main";
      default:
        return "tag-default";
    }
  };

  return (
    <>
      <style>{`
        /* ================= HOME PART 3 ================= */

        .homepart3-container {
          width: 100%;
          padding: 80px 40px;
          background: linear-gradient(to bottom, #f8f8f8 0%, #ffffff 100%);
        }

        .homepart3-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .homepart3-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          font-family: 'Playfair Display', serif;
        }

        .homepart3-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
          font-family: 'Inter', sans-serif;
        }

        .homepart3-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dish-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .dish-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .signature-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #ffb800;
          color: #111;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          z-index: 2;
        }

        .dish-image-wrapper {
          height: 280px;
          overflow: hidden;
        }

        .dish-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .dish-card:hover .dish-image {
          transform: scale(1.1);
        }

        .dish-content {
          padding: 24px;
        }

        .dish-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .dish-description {
          font-size: 14px;
          color: #666;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .dish-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .dish-tag {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .tag-nonveg { background: #ffe8e8; color: #d32f2f; }
        .tag-veg { background: #e8f5e9; color: #2e7d32; }
        .tag-special { background: #f3e5f5; color: #7b1fa2; }
        .tag-dessert { background: #fce4ec; color: #c2185b; }
        .tag-main { background: #ffebee; color: #c62828; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dish-card:nth-child(1){animation-delay:.1s}
        .dish-card:nth-child(2){animation-delay:.2s}
        .dish-card:nth-child(3){animation-delay:.3s}
        .dish-card:nth-child(4){animation-delay:.4s}
        .dish-card:nth-child(5){animation-delay:.5s}
        .dish-card:nth-child(6){animation-delay:.6s}
        .dish-card:nth-child(7){animation-delay:.7s}
        .dish-card:nth-child(8){animation-delay:.8s}

        @media (max-width: 1200px) {
          .homepart3-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .homepart3-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .homepart3-grid { grid-template-columns: 1fr; }
          .homepart3-title { font-size: 34px; }
        }


        /* ===== View Full Menu Button ===== */

.homepart3-viewall {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.homepart3-menu-btn {
  background: #5a1026;
  color: #ffffff;
  border: none;
  padding: 16px 42px;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 6px 18px rgba(90, 16, 38, 0.35);
  transition: all 0.3s ease;
}

.homepart3-menu-btn span {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.homepart3-menu-btn:hover {
  background: #3d0b1b;
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(90, 16, 38, 0.45);
}

.homepart3-menu-btn:hover span {
  transform: translateX(6px);
}

      `}</style>

      <section className="homepart3-container">
        <div className="homepart3-header">
          <h2 className="homepart3-title">Anardana Original's</h2>
          <p className="homepart3-subtitle">
            Discover our most celebrated creations, crafted with passion and inspired by traditional Indian flavors
          </p>
        </div>

        <div className="homepart3-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              {dish.signature && <div className="signature-badge">Signature</div>}

              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.name} className="dish-image" />
              </div>

              <div className="dish-content">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>

                <div className="dish-tags">
                  {dish.tags.map((tag, i) => (
                    <span key={i} className={`dish-tag ${getTagClass(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="homepart3-viewall">
  <button
    className="homepart3-menu-btn"
    onClick={() => window.location.href = "/menu"}
  >
    View Full Menu <span>→</span>
  </button>
</div>




      </section>
      
    </>
  );
};

export default Homepart3;
