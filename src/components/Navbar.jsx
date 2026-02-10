import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function AnardanaHeader() {
  const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cinzel:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        /* ===== Wrapper (Sticky + floating) ===== */
        .navbar-wrapper {
        height: 72px;
          position: sticky;
          top: 16px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          /* REMOVED margin-bottom: 24px; */
        }

        /* ===== Main Navbar ===== */
        .anardana-header {
          width: calc(100% - 80px);
          max-width: 1400px;
          padding: 16px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 22px;
          background: rgba(25, 20, 18, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
          transition: all 0.35s ease;
        }

        /* ===== On Scroll Effect ===== */
        .navbar-wrapper.scrolled .anardana-header {
          background: rgba(43, 24, 16, 0.75);
          backdrop-filter: blur(18px);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.65);
        }

        /* ===== Logo ===== */
        .logo {
          font-family: 'Cinzel', serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
        }

        /* ===== Navigation ===== */
        nav {
          display: flex;
          gap: 34px;
        }

        .nav-link {
          font-family: 'Baskervville', serif;
          color: #e8dcc4;
          text-decoration: none;
          position: relative;
          padding-bottom: 6px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #f2c94c;
          border-radius: 2px;
        }

        /* ===== Buttons ===== */
        .action-buttons {
          display: flex;
          gap: 14px;
        }

        .btn {
          padding: 10px 22px;
          border-radius: 999px;
          font-family: 'Baskervville', serif;
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .btn-find {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .btn-find:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .btn-book {
          background: #6d0f2b;
          color: #fff;
        }

        .btn-book:hover {
          background: #8b1538;
        }

        /* ===== Responsive ===== */
        @media (max-width: 900px) {
          nav {
            display: none;
          }
        }
      `}</style>

      <div className="anardana-header">
        <div className="logo">अNARDAना</div>

        <nav>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          <NavLink to="/locations" className="nav-link">Restaurants</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
           <NavLink to="/reservations" className="nav-link">Reservations</NavLink>
        </nav>

        <div className="action-buttons">
          <button className="btn btn-find"
           onClick={() => navigate("/locations")}
          
          >📍 Find Outlet</button>
          <button
            className="btn btn-book"
            onClick={() => navigate("/reservations")}
          >
            Book Table
          </button>
        </div>
      </div>
    </header>
  );
}