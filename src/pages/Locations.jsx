import React, { useState, useEffect } from "react";

/* ================= IMAGE IMPORTS ================= */
import vk from "../assets/anardana/images/outlets/vasant-kunj/v.webp";
import nsp from "../assets/anardana/images/outlets/nsp/nsp.webp";
import faridabad from "../assets/anardana/images/outlets/faridabad/f.webp";
import gcr from "../assets/anardana/images/outlets/gcr/g.webp";
import ranchi from "../assets/anardana/images/outlets/ranchi/r.webp";
import noida from "../assets/anardana/images/outlets/noida/n.webp";

export default function DiscoverRestaurantsAdvanced() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [showMap, setShowMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const cities = ["All", "New Delhi", "Haryana", "Ranchi", "Uttar Pradesh"];

  const restaurants = [
    {
      id: 1,
      name: "Anardana Ambience Mall",
      city: "New Delhi",
      location: "Vasant Kunj, New Delhi",
      address: "Third Floor, Ambience Mall, Shop No: T-305, Vasant Kunj, New Delhi, Delhi 110070",
      phone: "9211572900",
      coordinates: { lat: 28.5244, lng: 77.1587 },
      image: vk,
      tags: ["Corporate Events", "Family Dining"],
      description: "Located in the prestigious Ambience Mall, our Vasant Kunj outlet is perfect for corporate parties...",
      specialties: ["Signature Thalis", "Craft Cocktails", "Tandoor Specials"],
      amenities: ["Private Dining", "Bar", "Parking", "WiFi"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
    {
      id: 2,
      name: "Anardana UnityOne Elegante Mall",
      city: "New Delhi",
      location: "Netaji Subhash Palace, New Delhi",
      address: "Shop No. F0-07 Fourth Floor, MRTS Station, opposite Wazirpur District Centre, Netaji Subhash Place, Pitampura, Delhi, 110034",
      phone: "9211572100",
      coordinates: { lat: 28.6958, lng: 77.1514 },
      image: nsp,
      tags: ["Shopping Mall", "Family Dining"],
      description: "Located in the vibrant UnityOne Elegante Mall at Netaji Subhash Palace...",
      specialties: ["Signature Thalis", "Craft Cocktails"],
      amenities: ["Private Dining", "Bar", "Parking", "WiFi"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
    {
      id: 3,
      name: "Anardana Pacific Mall",
      city: "Haryana",
      location: "Faridabad, Haryana",
      address: "2nd Floor, Pacific Mall, Shop No: SH/2F/07, Sector 20B, Faridabad, Haryana 121007",
      phone: "9217089459",
      coordinates: { lat: 28.4089, lng: 77.3178 },
      image: faridabad,
      tags: ["Family Dining", "Shopping Convenience"],
      description: "A vibrant dining destination in Pacific Mall, perfect for families...",
      specialties: ["Family Platters", "Sunday Brunch"],
      amenities: ["Family Friendly", "WiFi", "Parking", "Takeaway"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
    {
      id: 4,
      name: "Anardana Golf Course Road",
      city: "Haryana",
      location: "Gurugram, Haryana",
      address: "Golf Course Road, Sector 42, Gurugram, Haryana 122002",
      phone: "9205600715",
      coordinates: { lat: 28.4508, lng: 77.0618 },
      image: gcr,
      tags: ["Corporate Dining", "Business Lunch"],
      description: "Strategically located on Golf Course Road, catering to the corporate crowd...",
      specialties: ["Signature Thalis"],
      amenities: ["WiFi", "Corporate Packages", "Bar"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
    {
      id: 5,
      name: "Anardana Ranchi",
      city: "Ranchi",
      location: "Ranchi, Jharkhand",
      address: "Main Road, Ranchi, Jharkhand 834001",
      phone: "7366887444",
      coordinates: { lat: 23.3441, lng: 85.3096 },
      image: ranchi,
      tags: ["Scenic Views", "Natural Light"],
      description: "Beautiful open spaces with natural light, offering a relaxed experience...",
      specialties: ["Craft Cocktails"],
      amenities: ["Private Dining", "WiFi"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
    {
      id: 6,
      name: "Anardana Max Square",
      city: "Uttar Pradesh",
      location: "Noida, Uttar Pradesh",
      address: "Max Square, Sector 129, Noida, Uttar Pradesh 201304",
      phone: "9205600716",
      coordinates: { lat: 28.5050, lng: 77.3889 },
      image: noida,
      tags: ["Corporate Events", "Business Meetings"],
      description: "A modern venue in Max Square, ideal for corporate events...",
      specialties: ["Tandoor Specials"],
      amenities: ["Private Dining", "WiFi", "Parking", "Corporate Events"],
      timing: "12:00 PM - 12:30 AM",
      weekendTiming: "12:00 PM - 12:30 AM",
      isOpen: true,
    },
  ];

  const filtered =
    selectedCity === "All"
      ? restaurants
      : restaurants.filter((r) => r.city === selectedCity);

  const generateMultiLocationMapUrl = () => {
    const centerLat = 28.5;
    const centerLng = 77.2;
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224346.45942734927!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890`;
  };

  const handleViewOnMap = () => {
    setShowMap(true);
    setTimeout(() => {
      document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
      setMapLoaded(true);
    }, 100);
  };

  const handleGetDirections = (restaurant) => {
    const { lat, lng } = restaurant.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${restaurant.name}`;
    window.open(url, '_blank');
  };

  const handleViewOnGoogleMaps = (restaurant) => {
    const { lat, lng } = restaurant.coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style>{`
        .dr-section {
          padding: 90px 24px;
          background: #fafafa;
          font-family: Inter, sans-serif;
        }

        .dr-hero {
          text-align: center;
          padding: 60px 24px;
          background: linear-gradient(90deg, #6b3416, #8c4d15, #995a11, #ab6c0c);
          color: white;
          border-radius: 30px;
          margin-bottom: 60px;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
        }

        .dr-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          opacity: 0.3;
        }

        .dr-hero-content {
          position: relative;
          z-index: 1;
        }

        .dr-hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .dr-hero-subtitle {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 30px;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
        }

        .dr-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: white;
          color: #6b3416;
          border: 2px solid white;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dr-map-btn:hover {
          background: transparent;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .dr-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 12px;
          text-align: center;
          color: #1a1a1a;
        }

        .dr-subtitle {
          max-width: 620px;
          margin: 0 auto 48px;
          color: #555;
          line-height: 1.6;
          text-align: center;
        }

        .dr-filters {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }

        .dr-filter-btn {
          padding: 12px 28px;
          border-radius: 999px;
          border: 2px solid #e0e0e0;
          background: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 15px;
          color: #333;
        }

        .dr-filter-btn:hover {
          border-color: #6b3416;
          transform: translateY(-2px);
          color: #6b3416;
        }

        .dr-filter-btn.active {
          background: #6b3416;
          color: #fff;
          border-color: #6b3416;
        }

        .dr-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 36px;
        }

        .dr-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 45px rgba(0,0,0,0.12);
          transition: all 0.4s;
          text-align: left;
        }

        .dr-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(107, 52, 22, 0.2);
        }

        .dr-image {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .dr-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .dr-card:hover .dr-image img {
          transform: scale(1.1);
        }

        .dr-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .dr-open {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          color: #22c55e;
          font-size: 13px;
          font-weight: 700;
          z-index: 2;
        }

        .dr-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px #22c55e; }
          50% { box-shadow: 0 0 16px #22c55e; }
        }

        /* REMOVED TOP RIGHT CARDS - No dr-tags class */

        .dr-content {
          padding: 26px;
        }

        .dr-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: #6b3416;
          margin-bottom: 8px;
        }

        .dr-location {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 12px;
        }

        .dr-full-address {
          font-size: 0.85rem;
          color: #777;
          line-height: 1.5;
          margin-bottom: 12px;
          padding: 12px;
          background: #f8f8f8;
          border-radius: 10px;
          border-left: 3px solid #6b3416;
        }

        .dr-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #6b3416;
          font-weight: 600;
          margin-bottom: 14px;
          cursor: pointer;
          text-decoration: none;
        }

        .dr-phone:hover {
          text-decoration: underline;
        }

        .dr-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .dr-divider {
          height: 1px;
          background: #eee;
          margin-bottom: 14px;
        }

        .dr-timing {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 14px;
        }

        .dr-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .dr-amenity {
          background: #e3f2ff;
          color: #0066cc;
          padding: 6px 12px;
          font-size: 0.75rem;
          border-radius: 12px;
          font-weight: 600;
        }

        .dr-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .dr-specialty {
          background: #fef3e8;
          color: #6b3416;
          padding: 7px 14px;
          font-size: 0.8rem;
          border-radius: 10px;
          font-weight: 600;
          border: 1px solid #fde7ec;
        }

        .dr-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        .dr-btn {
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .dr-btn-primary {
          background: #6b3416;
          color: white;
        }

        .dr-btn-primary:hover {
          background: #8c4d15;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(107, 52, 22, 0.3);
        }

        .dr-btn-secondary {
          background: white;
          color: #6b3416;
          border: 2px solid #6b3416;
        }

        .dr-btn-secondary:hover {
          background: #6b3416;
          color: white;
        }

        .dr-btn-directions {
          background: #1a1a1a;
          color: white;
          grid-column: 1 / -1;
        }

        .dr-btn-directions:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        /* Enhanced Map Section */
        .dr-map-section {
          margin-top: 80px;
          padding: 60px 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          border-radius: 30px;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .dr-map-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          color: #6b3416;
        }

        .dr-map-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .dr-map-container {
          width: 100%;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          margin-bottom: 40px;
        }

        .dr-map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .dr-locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .dr-location-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          border-left: 4px solid #6b3416;
          transition: all 0.3s;
          cursor: pointer;
        }

        .dr-location-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(107, 52, 22, 0.15);
        }

        .dr-location-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #6b3416;
          margin-bottom: 12px;
        }

        .dr-location-address {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .dr-location-phone {
          font-size: 0.9rem;
          color: #6b3416;
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dr-location-actions {
          display: flex;
          gap: 8px;
        }

        .dr-location-btn {
          flex: 1;
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .dr-location-btn-primary {
          background: #6b3416;
          color: white;
        }

        .dr-location-btn-primary:hover {
          background: #8c4d15;
        }

        .dr-location-btn-secondary {
          background: #f0f0f0;
          color: #6b3416;
        }

        .dr-location-btn-secondary:hover {
          background: #e0e0e0;
        }

        @media (max-width: 768px) {
          .dr-hero-title {
            font-size: 2rem;
          }

          .dr-hero-subtitle {
            font-size: 1rem;
          }

          .dr-grid {
            grid-template-columns: 1fr;
          }

          .dr-map-container {
            height: 400px;
          }

          .dr-actions {
            grid-template-columns: 1fr;
          }

          .dr-locations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="dr-section">
        {/* Hero Section */}
        <div className="dr-hero">
          <div className="dr-hero-content">
            <h1 className="dr-hero-title">Our Restaurants</h1>
            <p className="dr-hero-subtitle">
              Discover 6 unique dining experiences across Delhi NCR, Ranchi, and beyond. Each outlet has its own character, vibe, and specially curated menu.
            </p>
            <button className="dr-map-btn" onClick={handleViewOnMap}>
              <span>📍</span>
              View All on Map
            </button>
          </div>
        </div>

        {/* Filters */}
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

        {/* Restaurant Cards */}
        <div className="dr-grid">
          {filtered.map((r) => (
            <div key={r.id} className="dr-card">
              <div className="dr-image">
                <img src={r.image} alt={r.name} />

                {r.isOpen && (
                  <div className="dr-open">
                    <span className="dr-dot" /> OPEN
                  </div>
                )}

                {/* REMOVED WHITE CARDS - No tags displayed */}
              </div>

              <div className="dr-content">
                <div className="dr-name">{r.name}</div>

                <div className="dr-location">
                  📍 {r.location}
                </div>

                <div className="dr-full-address">
                  {r.address}
                </div>

                <a href={`tel:${r.phone}`} className="dr-phone">
                  📞 {r.phone}
                </a>

                <div className="dr-desc">{r.description}</div>

                <div className="dr-divider" />

                <div className="dr-timing">
                  🕒 {r.timing}
                </div>

                <div className="dr-amenities">
                  {r.amenities.map((a, i) => (
                    <span key={i} className="dr-amenity">{a}</span>
                  ))}
                </div>

                <div className="dr-specialties">
                  {r.specialties.map((s, i) => (
                    <span key={i} className="dr-specialty">{s}</span>
                  ))}
                </div>

                <div className="dr-actions">
                  <button 
                    className="dr-btn dr-btn-secondary"
                    onClick={() => handleViewOnGoogleMaps(r)}
                  >
                    View Map
                  </button>
                  <button 
                    className="dr-btn dr-btn-primary"
                    onClick={() => window.location.href = '/reservations'}
                  >
                    Book Table
                  </button>
                  <button 
                    className="dr-btn dr-btn-directions"
                    onClick={() => handleGetDirections(r)}
                  >
                    <span>🧭</span> Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Map Section */}
        {showMap && (
          <div id="map-section" className="dr-map-section">
            <h2 className="dr-map-title">All Locations Across India</h2>
            <p className="dr-map-subtitle">
              Find us across Delhi NCR, Haryana, Ranchi, and Uttar Pradesh - Click on any location to get directions
            </p>

            <div className="dr-map-container">
              <iframe
                src={generateMultiLocationMapUrl()}
                title="Anardana Restaurant Locations Across India"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="dr-locations-grid">
              {restaurants.map((r) => (
                <div key={r.id} className="dr-location-card">
                  <div className="dr-location-name">{r.name}</div>
                  <div className="dr-location-address">{r.address}</div>
                  <div className="dr-location-phone">
                    📞 {r.phone}
                  </div>
                  <div className="dr-location-actions">
                    <button 
                      className="dr-location-btn dr-location-btn-secondary"
                      onClick={() => handleViewOnGoogleMaps(r)}
                    >
                      <span>🗺️</span> View
                    </button>
                    <button 
                      className="dr-location-btn dr-location-btn-primary"
                      onClick={() => handleGetDirections(r)}
                    >
                      <span>🧭</span> Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}