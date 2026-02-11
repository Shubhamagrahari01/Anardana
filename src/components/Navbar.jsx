import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AnardanaHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        @import url('https://fonts.googleapis.com/css2?family=Baskervville&family=Cinzel:wght@400;600;700&display=swap');

        * { box-sizing: border-box; }

        .navbar-wrapper {
          position: sticky;
          top: 10px;
          z-index: 1000;
          display: flex;
          justify-content: center;
        }

        .anardana-header {
          width: 95%;
          max-width: 1400px;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 18px;
          background: rgba(25,20,18,0.65);
          backdrop-filter: blur(14px);
          transition: 0.3s ease;
        }

        .logo {
          font-family: 'Cinzel', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
        }

        nav {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          font-family: 'Baskervville', serif;
          color: #e8dcc4;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav-link:hover { color: white; }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .btn {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
        }

        .btn-find {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .btn-book {
          background: #6d0f2b;
          color: white;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: white;
          border-radius: 3px;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: ${menuOpen ? "0" : "-100%"};
          width: 75%;
          height: 100vh;
          background: #1b120f;
          padding: 80px 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          transition: 0.4s ease;
          z-index: 999;
        }

        .mobile-menu a {
          color: white;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .mobile-buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          nav,
          .action-buttons {
            display: none;
          }

          .hamburger {
            display: flex;
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
        </nav>

        <div className="action-buttons">
          <button className="btn btn-find" onClick={() => navigate("/locations")}>
            📍 Find Outlet
          </button>
          <button className="btn btn-book" onClick={() => navigate("/reservations")}>
            Book Table
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="mobile-menu">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
        <NavLink to="/locations" onClick={() => setMenuOpen(false)}>Restaurants</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

        <div className="mobile-buttons">
          <button className="btn btn-find" onClick={() => navigate("/locations")}>
            📍 Find Outlet
          </button>
          <button className="btn btn-book" onClick={() => navigate("/reservations")}>
            Book Table
          </button>
        </div>
      </div>
    </header>
  );
}
