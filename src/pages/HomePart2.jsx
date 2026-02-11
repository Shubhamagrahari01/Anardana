import React, { useState } from "react";

/* ================= IMAGE IMPORTS ================= */
import vk from "../assets/anardana/images/outlets/vasant-kunj/v.webp";
import nsp from "../assets/anardana/images/outlets/nsp/nsp.webp";
import faridabad from "../assets/anardana/images/outlets/faridabad/f.webp";
import gcr from "../assets/anardana/images/outlets/gcr/g.webp";
import ranchi from "../assets/anardana/images/outlets/ranchi/r.webp";
import noida from "../assets/anardana/images/outlets/noida/n.webp";

export default function HomePart2() {
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = ["All", "New Delhi", "Haryana", "Ranchi", "Uttar Pradesh"];

  const restaurants = [
    {
      id: 1,
      name: "Anardana Ambience Mall",
      city: "New Delhi",
      location: "Vasant Kunj, New Delhi",
      image: vk,
      tags: ["Corporate Events", "Family Dining"],
      description:
        "Located in the prestigious Ambience Mall, our Vasant Kunj outlet is perfect for corporate parties...",
      specialties: ["Signature Thalis", "Craft Cocktails", "Tandoor Specials"],
      isOpen: true,
    },
    {
      id: 2,
      name: "Anardana UnityOne Elegante Mall",
      city: "New Delhi",
      location: "Netaji Subhash Palace, New Delhi",
      image: nsp,
      tags: ["Shopping Mall", "Family Dining"],
      description:
        "Located in the vibrant UnityOne Elegante Mall at Netaji Subhash Palace...",
      specialties: ["Signature Thalis", "Craft Cocktails"],
      isOpen: true,
    },
    {
      id: 3,
      name: "Anardana Pacific Mall",
      city: "Haryana",
      location: "Faridabad, Haryana",
      image: faridabad,
      tags: ["Family Dining", "Shopping Convenience"],
      description:
        "A vibrant dining destination in Pacific Mall, perfect for families...",
      specialties: ["Family Platters", "Sunday Brunch"],
      isOpen: true,
    },
    {
      id: 4,
      name: "Anardana Golf Course Road",
      city: "Haryana",
      location: "Gurugram, Haryana",
      image: gcr,
      tags: ["Corporate Dining", "Business Lunch"],
      description:
        "Strategically located on Golf Course Road, catering to the corporate crowd...",
      specialties: ["Signature Thalis"],
      isOpen: true,
    },
    {
      id: 5,
      name: "Anardana Ranchi",
      city: "Ranchi",
      location: "Ranchi, Jharkhand",
      image: ranchi,
      tags: ["Scenic Views", "Natural Light"],
      description:
        "Beautiful open spaces with natural light, offering a relaxed experience...",
      specialties: ["Craft Cocktails"],
      isOpen: true,
    },
    {
      id: 6,
      name: "Anardana Max Square",
      city: "Uttar Pradesh",
      location: "Noida, Uttar Pradesh",
      image: noida,
      tags: ["Corporate Events", "Business Meetings"],
      description:
        "A modern venue in Max Square, ideal for corporate events...",
      specialties: ["Tandoor Specials"],
      isOpen: true,
    },
  ];

  const filtered =
    selectedCity === "All"
      ? restaurants
      : restaurants.filter((r) => r.city === selectedCity);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .dr-section {
          padding: 110px 24px;
          background: #ffffff;
          text-align: center;
          font-family: 'Inter', sans-serif;
        }

        .dr-title {
          font-family: 'Fredoka', sans-serif;
          font-size: 3.1rem;
          font-weight: 800;
          margin-bottom: 14px;
          color: #1f2937;
        }

        .dr-subtitle {
          max-width: 640px;
          margin: 0 auto 56px;
          color: #6b7280;
          line-height: 1.7;
        }

        .dr-filters {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        .dr-filter-btn {
          padding: 12px 28px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          color: #374151;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dr-filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }

        .dr-filter-btn.active {
          background: #5b1a1d;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(91, 26, 29, 0.3);
        }

        .dr-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        /* ✨ ENHANCED CARD WITH SMOOTH HOVER */
        .dr-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        /* 🎯 CARD POP EFFECT ON HOVER */
        .dr-card:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 0 28px 60px rgba(91, 26, 29, 0.25);
          z-index: 10;
        }

        /* 📸 IMAGE CONTAINER */
        .dr-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        /* 🔍 IMAGE ZOOM ON HOVER */
        .dr-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dr-card:hover .dr-image img {
          transform: scale(1.15);
        }

        /* GRADIENT OVERLAY */
        .dr-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.08),
            transparent
          );
          transition: opacity 0.5s ease;
        }

        .dr-card:hover .dr-image::after {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.12),
            transparent
          );
        }

        /* OPEN BADGE */
        .dr-open {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          color: #22c55e;
          font-size: 12px;
          font-weight: 700;
          z-index: 4;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-open {
          background: rgba(0,0,0,0.75);
          transform: scale(1.05);
        }

        .dr-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px #22c55e;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 10px #22c55e;
          }
          50% {
            box-shadow: 0 0 20px #22c55e, 0 0 30px #22c55e;
          }
        }

        /* TAGS */
        .dr-tags {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          z-index: 4;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-tags {
          transform: translateY(-4px);
        }

        .dr-tag {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.6);
          padding: 6px 14px;
          font-size: 12px;
          border-radius: 999px;
          font-weight: 700;
          color: #1f2937;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-tag {
          background: rgba(255,255,255,1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        /* CONTENT */
        .dr-content {
          padding: 24px 24px 28px;
          text-align: left;
          position: relative;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-content {
          padding-bottom: 32px;
        }

        .dr-name {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #5b1a1d;
          margin-bottom: 6px;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-name {
          color: #7d2629;
          transform: translateX(4px);
        }

        .dr-location {
          font-size: 0.95rem;
          color: #6b7280;
          margin-bottom: 14px;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-location {
          color: #5b1a1d;
        }

        .dr-desc {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.65;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-desc {
          color: #374151;
        }

        .dr-divider {
          height: 1px;
          background: #eee;
          margin-bottom: 14px;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-divider {
          background: #5b1a1d;
          height: 2px;
        }

        .dr-open-now {
          font-size: 0.9rem;
          color: #374151;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-open-now {
          color: #5b1a1d;
          font-weight: 600;
        }

        .dr-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .dr-specialty {
          background: #fde7ec;
          color: #5b1a1d;
          padding: 6px 14px;
          font-size: 0.8rem;
          border-radius: 10px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .dr-card:hover .dr-specialty {
          background: #5b1a1d;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* VIEW ALL BUTTON */
        .dr-view-all {
          margin-top: 70px;
          display: flex;
          justify-content: center;
        }

        .dr-view-all button {
          padding: 16px 46px;
          border-radius: 999px;
          border: none;
          background: #5b1a1d;
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(91, 26, 29, 0.25);
        }

        .dr-view-all button:hover {
          background: #7d2629;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(91, 26, 29, 0.35);
        }

        .dr-view-all button:active {
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .dr-title {
            font-size: 2.2rem;
          }

          .dr-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .dr-card:hover {
            transform: translateY(-12px) scale(1.01);
          }
        }

        /* SMOOTH SCROLL */
        * {
          scroll-behavior: smooth;
        }

        /* PERFORMANCE OPTIMIZATION */
        .dr-image img {
          will-change: transform;
        }

        .dr-card {
          will-change: transform, box-shadow;
        }
      `}</style>

      <section className="dr-section">
        <h2 className="dr-title">Discover Our Restaurants</h2>
        <p className="dr-subtitle">
          Each location offers a unique dining experience with its own distinctive vibe and carefully curated menu
        </p>

        <div className="dr-filters">
          {cities.map((city) => (
            <button
              key={city}
              className={`dr-filter-btn ${selectedCity === city ? "active" : ""}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="dr-grid">
          {filtered.map((r) => (
            <div key={r.id} className="dr-card">
              <div className="dr-image">
                <img src={r.image} alt={r.name} loading="lazy" />

                {r.isOpen && (
                  <div className="dr-open">
                    <span className="dr-dot" /> OPEN
                  </div>
                )}

                <div className="dr-tags">
                  {r.tags.map((t, i) => (
                    <span key={i} className="dr-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="dr-content">
                <div className="dr-name">{r.name}</div>
                <div className="dr-location">📍 {r.location}</div>
                <div className="dr-desc">{r.description}</div>
                <div className="dr-divider" />
                <div className="dr-open-now">🕒 Open Now</div>

                <div className="dr-specialties">
                  {r.specialties.map((s, i) => (
                    <span key={i} className="dr-specialty">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dr-view-all">
          <button onClick={() => (window.location.href = "/locations")}>
            View All Restaurants
          </button>
        </div>
      </section>
    </>
  );
}