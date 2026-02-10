import React, { useState } from "react";

const testimonials = [
  {
    text: `Celebrated our anniversary at the M3M outlet. The private dining experience was magical. Exceptional food, elegant ambiance, and outstanding service. The craft cocktails are creative and delicious!`,
    name: "Vikram Singh",
    location: "Gurugram · M3M IFC",
    rating: 5,
  },
  {
    text: `An unforgettable dining experience. Every dish was thoughtfully prepared and the service was impeccable. Highly recommended for special occasions.`,
    name: "Ananya Sharma",
    location: "New Delhi · Vasant Kunj",
    rating: 5,
  },
  {
    text: `Loved the ambience and the hospitality. The cocktails were top-notch and the food truly represents modern Indian cuisine.`,
    name: "Rahul Mehta",
    location: "Noida · Max Square",
    rating: 5,
  },
];

const Homepart6 = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <>
      <style>{`
/* ================= HOME PART 6 ================= */

.homepart6 {
  padding: 110px 24px 130px;
  background: radial-gradient(
      1200px 600px at 50% 0%,
      rgba(255,255,255,0.04),
      transparent
    ),
    linear-gradient(180deg, #0B1220 0%, #0E1628 100%);
  color: #fff;
  text-align: center;
}

.hp6-title {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 14px;
}

.hp6-subtitle {
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  margin-bottom: 70px;
}

.hp6-wrapper {
  position: relative;
  max-width: 920px;
  margin: 0 auto;
}

.hp6-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(14px);
  border-radius: 22px;
  padding: 48px 64px 52px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  transition: all 0.6s ease;
}

.hp6-quote {
  position: absolute;
  top: 18px;
  left: 22px;
  font-size: 52px;
  color: rgba(255,255,255,0.15);
}

.hp6-stars {
  margin-bottom: 26px;
}

.hp6-stars span {
  color: #FFD233;
  font-size: 22px;
  margin: 0 2px;
}

.hp6-text {
  font-size: 20px;
  line-height: 1.7;
  font-style: italic;
  color: rgba(255,255,255,0.9);
  margin-bottom: 36px;
}

.hp6-name {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
}

.hp6-location {
  font-size: 14px;
  color: rgba(255,255,255,0.65);
}

/* Arrows */
.hp6-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  font-size: 22px;
}

.hp6-arrow:hover {
  background: rgba(255,255,255,0.25);
}

.hp6-arrow.left {
  left: -70px;
}

.hp6-arrow.right {
  right: -70px;
}

/* Dots */
.hp6-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 42px;
}

.hp6-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.hp6-dot.active {
  width: 30px;
  background: #E91E63;
}

/* Responsive */
@media (max-width: 768px) {
  .hp6-card {
    padding: 40px 28px 44px;
  }

  .hp6-text {
    font-size: 17px;
  }

  .hp6-arrow.left {
    left: -10px;
  }

  .hp6-arrow.right {
    right: -10px;
  }
}
      `}</style>

      <section className="homepart6">
        <h2 className="hp6-title">What Our Guests Say</h2>
        <p className="hp6-subtitle">
          Read authentic reviews from our valued patrons across all restaurants
        </p>

        <div className="hp6-wrapper">
          <div className="hp6-arrow left" onClick={prev}>
            ‹
          </div>

          <div className="hp6-card">
            <div className="hp6-quote">“</div>

            <div className="hp6-stars">
              {Array.from({ length: testimonials[active].rating }).map(
                (_, i) => (
                  <span key={i}>★</span>
                )
              )}
            </div>

            <p className="hp6-text">{testimonials[active].text}</p>

            <div className="hp6-name">{testimonials[active].name}</div>
            <div className="hp6-location">
              {testimonials[active].location}
            </div>
          </div>

          <div className="hp6-arrow right" onClick={next}>
            ›
          </div>
        </div>

        <div className="hp6-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`hp6-dot ${i === active ? "active" : ""}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepart6;
