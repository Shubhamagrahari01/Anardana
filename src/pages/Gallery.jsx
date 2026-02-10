import React, { useState } from "react";

/* ========= IMAGE IMPORTS ========= */
// OUTLETS (Ambiance)
import vasantKunj from "../assets/anardana/images/outlets/vasant-kunj/v.webp";
import nsp from "../assets/anardana/images/outlets/nsp/nsp.webp";
import gcr from "../assets/anardana/images/outlets/gcr/g.webp";
import faridabad from "../assets/anardana/images/outlets/faridabad/f.webp";
import noida from "../assets/anardana/images/outlets/noida/n.webp";
import ranchi from "../assets/anardana/images/outlets/ranchi/r.webp";

// SIGNATURE DISHES
import d1 from "../assets/anardana/images/signature-dishes/DSC00028-Edit.JPG";
import d2 from "../assets/anardana/images/signature-dishes/DSC00240-Edit.JPG";
import d3 from "../assets/anardana/images/signature-dishes/DSC00264-Edit.JPG";
import d4 from "../assets/anardana/images/signature-dishes/DSC00302-Edit.JPG";
import d5 from "../assets/anardana/images/signature-dishes/DSC09852-Edit.JPG";
import d6 from "../assets/anardana/images/signature-dishes/DSC09951-Edit.JPG";

// SIGNATURE DRINKS
import c1 from "../assets/anardana/images/signature-drinks/Anardana-Special-Crafted-Cocktail.jpg";
import c2 from "../assets/anardana/images/signature-drinks/Imli-Ka-Butta-Crafted-Cocktail.jpg";
import c3 from "../assets/anardana/images/signature-drinks/Kanpai-Crafted-Cocktail.jpg";
import c4 from "../assets/anardana/images/signature-drinks/Limonata-Zanzero-Crafted-Mocktail.jpg";
import c5 from "../assets/anardana/images/signature-drinks/Plum-Kulukki-Crafted-Mocktai.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const galleryImages = [
    // Ambiance
    { src: vasantKunj, type: "Ambiance" },
    { src: nsp, type: "Ambiance" },
    { src: gcr, type: "Ambiance" },
    { src: faridabad, type: "Ambiance" },
    { src: noida, type: "Ambiance" },
    { src: ranchi, type: "Ambiance" },

    // Food
    { src: d1, type: "Food" },
    { src: d2, type: "Food" },
    { src: d3, type: "Food" },
    { src: d4, type: "Food" },
    { src: d5, type: "Food" },
    { src: d6, type: "Food" },

    // Drinks
    { src: c1, type: "Food" },
    { src: c2, type: "Food" },
    { src: c3, type: "Food" },
    { src: c4, type: "Food" },
    { src: c5, type: "Food" },
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.type === filter);

  return (
    <>
      <style>{`
/* ================= GALLERY PAGE ================= */

.gallery-hero {
  background: linear-gradient(90deg, #6b3416, #8c4d15, #995a11, #ab6c0c);
  margin-top: -70px;
    padding: 140px 20px 120px;
  text-align: center;
  color: white;
}

.gallery-hero h1 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 14px;
}

.gallery-hero p {
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 30px 0;
  background: #fff;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}

.gallery-filter-btn {
  padding: 10px 26px;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: #f3f4f6;
  transition: all 0.3s ease;
}

.gallery-filter-btn.active {
  background: #5a1026;
  color: white;
  box-shadow: inset 0 0 0 3px black;
}

/* Masonry grid */
.gallery-grid {
  padding: 80px 40px;
  column-count: 4;
  column-gap: 24px;
}

.gallery-item {
  margin-bottom: 24px;
  break-inside: avoid;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  display: block;
  border-radius: 18px;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.12);
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid { column-count: 3; }
}

@media (max-width: 768px) {
  .gallery-hero h1 { font-size: 42px; }
  .gallery-grid { column-count: 2; padding: 50px 20px; }
}

@media (max-width: 480px) {
  .gallery-grid { column-count: 1; }
}
      `}</style>

      {/* HERO */}
      <section className="gallery-hero">
        <h1>Gallery</h1>
        <p>
          Take a visual journey through our restaurants, dishes, and memorable moments
        </p>
      </section>

      {/* FILTERS */}
      <div className="gallery-filters">
        {["All", "Food", "Ambiance"].map((item) => (
          <button
            key={item}
            className={`gallery-filter-btn ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="gallery-grid">
        {filteredImages.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} alt="Anardana Gallery" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
