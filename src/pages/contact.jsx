import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "Priya Patel",
    email: "john@example.com",
    phone: "+91 98765 43210",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <style>{`
/* ================= CONTACT PAGE ================= */

.contact-page {
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

/* ===== HERO ===== */
.contact-hero {
  background: linear-gradient(90deg, #7a3b12, #9b540f, #b86d0a);
  margin-top: -80px;
  padding: 120px 20px;
  text-align: center;
  color: #fff;
}

.contact-hero h1 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 12px;
}

.contact-hero p {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

/* ===== LAYOUT ===== */
.contact-wrapper {
  max-width: 1200px;
  margin: -80px auto 80px;
  padding: 0 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
}


/* ===== SIDEBAR ===== */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

/* Info */
.info-row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.info-icon {
  width: 36px;
  height: 36px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-row p {
  color: #475569;
  font-size: 14px;
  line-height: 1.5;
}

/* Quick links */
.quick-links a {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #334155;
  font-weight: 500;
}

.quick-links a:hover {
  color: #7a3b12;
}

/* Follow */
.follow {
  background: linear-gradient(90deg, #7a3b12, #9b540f, #b86d0a);
  color: #fff;
}

.socials {
  display: flex;
  gap: 12px;
}

.social {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* ===== FORM ===== */
.form-card h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1e293b;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 0;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #334155;
}

input, select, textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.5px solid #cbd5e1;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  background: white;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #7a3b12;
  box-shadow: 0 0 0 3px rgba(122, 59, 18, 0.1);
}

input::placeholder, textarea::placeholder {
  color: #94a3b8;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

textarea {
  resize: none;
  min-height: 120px;
  font-size: 15px;
  line-height: 1.5;
}

.message-group {
  margin-bottom: 32px;
}

/* Button */
.submit-btn {
  margin-top: 12px;
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #5a1026 0%, #7a2c30 100%);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(90, 16, 38, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-hero h1 {
    font-size: 44px;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    padding: 80px 20px;
  }
  
  .contact-wrapper {
    margin: -40px auto 40px;
  }
  
  .card {
    padding: 20px;
  }
}
      `}</style>

      <section className="contact-page">
        {/* HERO */}
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-wrapper">
          <div className="contact-grid">
            {/* SIDEBAR */}
            <div className="sidebar">
              <div className="card">
                <h3>Headquarter</h3>

                <div className="info-row">
                  <div className="info-icon">📍</div>
                  <p>
                    Anardana Hospitality Pvt Ltd<br />
                    Anand Vihar, Delhi 110092
                  </p>
                </div>

                <div className="info-row">
                  <div className="info-icon">📞</div>
                  <p>01204678639</p>
                </div>

                <div className="info-row">
                  <div className="info-icon">✉️</div>
                  <p>hello@anardana.in</p>
                </div>
              </div>

              <div className="card quick-links">
                <h3>Quick Links</h3>
                <a href="#">→ Find an Outlet</a>
                <a href="#">→ Make a Reservation</a>
                <a href="#">→ View Menu</a>
                <a href="#">→ Career Opportunities</a>
              </div>

              <div className="card follow">
                <h3>Follow Us</h3>
                <p>Stay updated with our latest dishes and offers</p>
                <div className="socials">
                  <div className="social">f</div>
                  <div className="social">📷</div>
                  <div className="social">🐦</div>
                </div>
              </div>
            </div>

            {/* FORM - Updated to match image */}
            <div className="card form-card">
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      id="email"
                      type="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select 
                      id="subject"
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Catering">Catering</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="message-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  ✈️ Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}