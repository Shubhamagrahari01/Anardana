import React, { useState, useEffect, useRef } from "react";

const Homepart4 = () => {
  const [counters, setCounters] = useState({
    restaurants: 0,
    menuItems: 0,
    customers: 0,
    years: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "Authentic Flavors",
      description:
        "Traditional Indian recipes reimagined with modern techniques and premium ingredients",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      icon: "🍲",
    },
    {
      id: 2,
      title: "Hero Chefs of Anardana",
      description:
        "Award-winning culinary team with decades of combined experience in Indian cuisine",
      gradient: "linear-gradient(135deg, #F7931E, #FDB913)",
      icon: "👨‍🍳",
    },
    {
      id: 3,
      title: "11 Unique Restaurants",
      description:
        "Each location offers its own distinctive ambiance, vibe, and specially curated menu",
      gradient: "linear-gradient(135deg, #E91E8C, #D91C8B)",
      icon: "🏬",
    },
    {
      id: 4,
      title: "Award-Winning",
      description:
        "Recognized for excellence in food quality, service, and dining experience",
      gradient: "linear-gradient(135deg, #F7931E, #FDB913)",
      icon: "🏆",
    },
    {
      id: 5,
      title: "Private Events",
      description:
        "Customized catering and event spaces for your special celebrations",
      gradient: "linear-gradient(135deg, #E91E8C, #D91C8B)",
      icon: "🎉",
    },
    {
      id: 6,
      title: "Guest Satisfaction",
      description:
        "Consistently rated 4.5+ stars with thousands of happy diners across all restaurants",
      gradient: "linear-gradient(135deg, #E84855, #D63447)",
      icon: "❤️",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1800;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = progress * (2 - progress);

      setCounters({
        restaurants: Math.floor(11 * ease),
        menuItems: Math.floor(150 * ease),
        customers: Math.floor(1 * ease),
        years: Math.floor(7 * ease),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <>
      <style>{`
/* ================= HOME PART 4 ================= */

.homepart4-container {
  padding: 90px 40px;
  background: linear-gradient(180deg, #FFF3E8, #FFF9F1, #FFFFFF);
}

/* ---------- HEADER ---------- */

.homepart4-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 70px;
}

.homepart4-subtitle {
  display: inline-block;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 600;
  background: #fff;
  color: #7B1231;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  margin-bottom: 18px;
}

.homepart4-title {
  font-size: 48px;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 18px;
}

.title-highlight {
  background: linear-gradient(135deg, #7B1231, #C17A3D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.homepart4-description {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
}

/* ---------- FEATURES ---------- */

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto 80px;
}

.feature-card {
  background: #fff;
  border-radius: 24px;
  padding: 44px 36px;
  text-align: center;
  box-shadow: 0 10px 32px rgba(0,0,0,0.08);
  transition: all .35s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 42px rgba(0,0,0,0.14);
}

.feature-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  margin: 0 auto 22px;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 15px;
  color: #475569;
  line-height: 1.65;
}

/* ---------- STATS ---------- */

.stats-container {
  background: #fff;
  border-radius: 30px;
  padding: 56px 48px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  box-shadow: 0 12px 38px rgba(0,0,0,0.08);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 54px;
  font-weight: 800;
  background: linear-gradient(135deg, #7B1231, #C2185B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 14px;
  color: #475569;
}

/* ---------- RESPONSIVE ---------- */

@media(max-width:1024px){
  .features-grid{grid-template-columns:repeat(2,1fr)}
  .stats-container{grid-template-columns:repeat(2,1fr)}
}

@media(max-width:600px){
  .features-grid{grid-template-columns:1fr}
  .stats-container{grid-template-columns:1fr}
  .homepart4-title{font-size:34px}
}
      `}</style>

      <section className="homepart4-container">
        <div className="homepart4-header">
          <p className="homepart4-subtitle">OUR EXCELLENCE</p>
          <h2 className="homepart4-title">
            Why Choose <span className="title-highlight">Anardana</span>
          </h2>
          <p className="homepart4-description">
            More than just a restaurant – we’re a celebration of India’s culinary
            heritage with a contemporary twist
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon" style={{ background: f.gradient }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-description">{f.description}</p>
            </div>
          ))}
        </div>

        <div ref={sectionRef}>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">{counters.restaurants}</div>
              <div className="stat-label">Unique Restaurants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.menuItems}+</div>
              <div className="stat-label">Menu Items</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.customers}M+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepart4;
