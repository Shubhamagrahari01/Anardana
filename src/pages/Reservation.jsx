import React, { useState } from 'react';

export default function RestaurantReservation() {
  const [formData, setFormData] = useState({
    outlet: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    fullName: 'Rahul Sharma',
    email: 'john@example.com',
    phone: '+91 98765 43210'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f9fafb;
        }

        .container {
          min-height: 100vh;
          background-color: #f9fafb;
        }

        .header {
  margin-top: -80px;
  background: linear-gradient(90deg, #6b3416, #8c4d15, #995a11, #ab6c0c);
  color: white;
  padding: 7rem 1rem;      /* ⬅ increased height */
  min-height: 420px;       /* ⬅ ensures visible height */
  display: flex;
  align-items: center;     /* vertical centering */
  text-align: center;
}


        .header-content {
          max-width: 72rem;
          margin: 0 auto;
        }

        .header-title {
          font-family: 'Comic Sans MS', cursive;
          font-size: 3.75rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-size: 1.5rem;
        }

        .main-content {
          max-width: 88rem;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .label {
          display: block;
          color: #1f2937;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .label-icon {
          display: inline-flex;
          align-items: center;
        }

        .icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.25rem;
        }

        .required {
          color: #dc2626;
          margin-left: 0.25rem;
        }

        .input,
        .select,
        .textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .input:focus,
        .select:focus,
        .textarea:focus {
          outline: none;
          border-color: #581c87;
          box-shadow: 0 0 0 3px rgba(88, 28, 135, 0.1);
        }

        .textarea {
          resize: none;
        }

        .button {
          width: 100%;
          background-color: #581c87;
          color: white;
          font-weight: bold;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
        }

        .button:hover {
          background-color: #6b21a8;
          transform: scale(1.02);
        }

        .disclaimer {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        .terms-card {
          background-color: #fce7f3;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }

        .terms-title {
          font-family: 'Comic Sans MS', cursive;
          font-size: 1.875rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .terms-list {
          list-style: none;
          padding: 0;
        }

        .terms-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: #374151;
        }

        .bullet {
          color: #581c87;
          margin-right: 0.75rem;
          margin-top: 0.25rem;
          font-size: 1.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 4rem;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          cursor: pointer;
        }

        .feature-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateY(-0.25rem);
        }

        .feature-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s;
        }

        .feature-card:hover .feature-icon {
          background-color: #581c87 !important;
          color: white !important;
          transform: scale(1.1);
        }

        .feature-icon.default {
          background-color: #fce7f3;
          color: #581c87;
        }

        .feature-title {
          font-family: 'Comic Sans MS', cursive;
          font-size: 1.25rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: #6b7280;
        }

        @media (max-width: 767px) {
          .header-title {
            font-size: 2.5rem;
          }
         
          .header-subtitle {
            font-size: 1.125rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">Reserve Your Table</h1>
            <p className="header-subtitle">
              Book your dining experience at any of our 11 unique restaurants
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="grid-container">
            {/* Reservation Form */}
            <div className="card">
              <form onSubmit={handleSubmit}>
                {/* Select Outlet */}
                <div className="form-group">
                  <label className="label">
                    Select Outlet <span className="required">*</span>
                  </label>
                  <select
                    name="outlet"
                    value={formData.outlet}
                    onChange={handleChange}
                    className="select"
                    required
                  >
                    <option value="">Choose an outlet</option>
                    <option value="outlet1">Downtown Branch</option>
                    <option value="outlet2">Seaside Location</option>
                    <option value="outlet3">Garden Restaurant</option>
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="form-row form-group">
                  <div>
                    <label className="label">
                      <span className="label-icon">
                        📅 Select Date
                      </span>
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="Choose a date"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-icon">
                        🕐 Select Time
                      </span>
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="Choose a time"
                      className="input"
                      required
                    />
                  </div>
                </div>

                {/* Number of Guests and Occasion */}
                <div className="form-row form-group">
                  <div>
                    <label className="label">
                      <span className="label-icon">
                        👥 Number of Guests
                      </span>
                      <span className="required">*</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="select"
                      required
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      Occasion (Optional)
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="select"
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Full Name and Email */}
                <div className="form-row form-group">
                  <div>
                    <label className="label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="input"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="button">
                  Submit Reservation Request
                </button>

                <p className="disclaimer">
                  By submitting, you agree to our reservation terms and conditions. A representative will contact you to confirm availability.
                </p>
              </form>
            </div>

            {/* Terms and Conditions */}
            <div className="terms-card">
              <h2 className="terms-title">
                Table Reservation Terms & Conditions
              </h2>
              <ul className="terms-list">
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>A representative or manager will contact you shortly to confirm your booking details and discuss availability.</span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>
                    <strong>Submitting a reservation request does not guarantee a confirmed booking.</strong> All reservations are subject to availability at the time of your request.
                  </span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>Reservations may be subject to time limits, depending on peak hours and restaurant policies.</span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>If you do not receive a confirmation call within a reasonable time, please contact us to check the status of your request.</span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>The restaurant reserves the right to modify or cancel reservations due to unforeseen circumstances. In such cases, we will inform you as soon as possible.</span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>
                    <strong>Kindly arrive on time for your reservation.</strong> A grace period of 15 minutes will be given. After this period, the reservation will be considered canceled, and the table may be released to other guests.
                  </span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>Special requests (e.g., seating preferences, dietary requirements) will be accommodated where possible but cannot be guaranteed.</span>
                </li>
                <li className="terms-item">
                  <span className="bullet">•</span>
                  <span>For large group reservations (10+ guests), please contact us directly for customized arrangements and menu options.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="features-grid">
            <FeatureCard
              icon="✓"
              title="Confirmation Call"
              description="Receive a confirmation call from our team to finalize your booking"
            />
            <FeatureCard
              icon="📅"
              title="Flexible Timing"
              description="15-minute grace period for late arrivals to accommodate your schedule"
            />
            <FeatureCard
              icon="👥"
              title="Special Requests"
              description="We'll do our best to accommodate your seating and dietary preferences"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon default">
        <span style={{ fontSize: '2rem' }}>{icon}</span>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}
