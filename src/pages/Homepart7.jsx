import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Homepart7 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Email sending function using EmailJS
  const sendWelcomeEmail = async (subscriberEmail) => {
    try {
      // Option 1: Using EmailJS (Recommended for frontend-only solution)
      // Sign up at https://www.emailjs.com/ and get your credentials
      
      const templateParams = {
        to_email: subscriberEmail,
        subscriber_email: subscriberEmail,
        restaurant_name: 'Anardana',
        subject: 'Welcome to Anardana Family! 🍽️',
        message: `
          Dear Valued Guest,

          Thank you for subscribing to Anardana's newsletter!

          We're thrilled to have you as part of our family. You'll now receive:
          
          ✨ Exclusive offers and promotions
          🍽️ New menu updates and seasonal specials
          🎉 Special event invitations
          📍 News from all our restaurant locations
          
          As a welcome gift, enjoy 10% off your next visit at any Anardana location!
          Simply show this email to your server.

          Visit us at any of our locations:
          • Ambience Mall, Vasant Kunj
          • UnityOne Elegante Mall, Netaji Subhash Palace
          • Pacific Mall, Faridabad
          • Golf Course Road, Gurugram
          • Ranchi, Jharkhand
          • Max Square, Noida

          We look forward to serving you soon!

          Warm regards,
          The Anardana Team

          ---
          Questions? Contact us at hello@anardana.in
          You can unsubscribe anytime by clicking here.
        `,
      };

      // EmailJS configuration
      const serviceID = 'service_yfwgppl'; // Replace with your EmailJS service ID
      const templateID = 'template_k1upwu6'; // Replace with your EmailJS template ID
      const publicKey = 'f8FKnTYPht3Ws_2p_'; // Replace with your EmailJS public key

      
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      return response.status === 200;

      // For demo purposes, simulate success
      console.log('Email would be sent to:', subscriberEmail);
      console.log('Template params:', templateParams);
      return true;

    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  // Alternative: Send to your backend API
  const sendToBackend = async (subscriberEmail) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscriberEmail,
          timestamp: new Date().toISOString(),
          source: 'website_newsletter',
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending to backend:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('shubhamagrahari01@gmail.com');
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    
    try {
      // Send welcome email
      const emailSent = await sendWelcomeEmail(email);
      
      // Optionally also send to backend
      // await sendToBackend(email);

      if (emailSent) {
        setMessage('🎉 Thank you for subscribing! Check your email for a welcome message.');
        setEmail('');
        
        // Clear success message after 5 seconds
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage('Subscription successful! You will receive updates soon.');
        setEmail('');
        
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
/* Homepart7.css */

.homepart7-container {
  width: 100%;
  padding: 100px 40px;
  background: linear-gradient(135deg, #8B5A3C 0%, #A0704B 50%, #8B5A3C 100%);
  position: relative;
  overflow: hidden;
}

/* Add subtle texture/pattern overlay */
.homepart7-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.homepart7-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.newsletter-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  color: #FFFFFF;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.newsletter-icon svg {
  width: 40px;
  height: 40px;
}

.newsletter-title {
  font-size: 52px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 20px;
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.newsletter-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  line-height: 1.7;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  gap: 16px;
  max-width: 650px;
  margin: 0 auto 20px;
  align-items: stretch;
}

.newsletter-input {
  flex: 1;
  padding: 20px 28px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  background: #FFFFFF;
  color: #1a1a1a;
  font-family: 'Inter', Arial, sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.newsletter-input::placeholder {
  color: #9CA3AF;
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.newsletter-button {
  padding: 20px 48px;
  font-size: 17px;
  font-weight: 600;
  color: #FFFFFF;
  background: #1F2937;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Inter', Arial, sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
}

.newsletter-button:hover {
  background: #111827;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.newsletter-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.newsletter-button:disabled {
  background: #4B5563;
  cursor: not-allowed;
  transform: none;
}

.newsletter-message {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  margin-bottom: 16px;
  animation: slideDown 0.3s ease-out;
}

.newsletter-message.success {
  background: rgba(16, 185, 129, 0.2);
  color: #FFFFFF;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.newsletter-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #FFFFFF;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.newsletter-privacy {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 400;
  margin-top: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .homepart7-container {
    padding: 80px 24px;
  }

  .newsletter-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;
  }

  .newsletter-icon svg {
    width: 35px;
    height: 35px;
  }

  .newsletter-title {
    font-size: 40px;
  }

  .newsletter-subtitle {
    font-size: 17px;
    margin-bottom: 32px;
  }

  .newsletter-form {
    flex-direction: column;
    gap: 12px;
  }

  .newsletter-input {
    padding: 18px 24px;
    font-size: 15px;
  }

  .newsletter-button {
    padding: 18px 40px;
    font-size: 16px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .homepart7-container {
    padding: 60px 20px;
  }

  .newsletter-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }

  .newsletter-icon svg {
    width: 32px;
    height: 32px;
  }

  .newsletter-title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .newsletter-subtitle {
    font-size: 16px;
    margin-bottom: 28px;
  }

  .newsletter-input {
    padding: 16px 20px;
    font-size: 15px;
  }

  .newsletter-button {
    padding: 16px 36px;
    font-size: 15px;
  }

  .newsletter-privacy {
    font-size: 14px;
    margin-top: 16px;
  }
}

/* Animation for content on load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.homepart7-content {
  animation: fadeInUp 0.8s ease-out;
}

/* Focus styles for accessibility */
.newsletter-input:focus,
.newsletter-button:focus {
  outline: 3px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
}

/* Loading animation for button */
.newsletter-button:disabled::after {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
      `}</style>
      
      <div className="homepart7-container">
        <div className="homepart7-content">
          <div className="newsletter-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
            </svg>
          </div>

          <h1 className="newsletter-title">Stay Updated with Anardana</h1>
          
          <p className="newsletter-subtitle">
            Subscribe to receive exclusive offers, new menu updates, and special event invitations
            from all our restaurants
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="newsletter-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <div className={`newsletter-message ${message.includes('🎉') || message.includes('Thank you') || message.includes('successful') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepart7;