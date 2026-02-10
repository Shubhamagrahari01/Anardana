import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Location from "./HomePart2";
import Homepart3 from "./HomePart3";
import Homepart4 from "./HomePart4";
import Homepart5 from "./HomePart5";
import Homepart6 from "./Homepart6";
import Homepart7 from "./Homepart7";

export default function Home() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [flash, setFlash] = useState(false);

  const slides = [
    {
      image: "https://www.anardana.in/2.jpg",
      title: "CRAFT YOUR EXPERIENCE",
      subtitle: "Signature cocktails and culinary excellence",
      button1: "View Our Drinks →",
      button2: "📍 Find Restaurants",
      button1Action: () => navigate("/menu"),
      button2Action: () => navigate("/locations"),
    },
    {
      image: "https://www.anardana.in/3.jpg",
      title: "Progressive Indian Dining",
      subtitle: "Experience authentic flavors with a contemporary twist",
      button1: "Explore Menu →",
      button2: "📍 Find Restaurants",
      button1Action: () => navigate("/menu"),
      button2Action: () => navigate("/locations"),
    },
    {
      image: "https://www.anardana.in/4.jpg",
      title: "Reserve Your Table",
      subtitle: "Book now for an unforgettable culinary journey",
      button1: "Book Now →",
      button2: "📍 Find Restaurants",
      button1Action: () => navigate("/reservations"),
      button2Action: () => navigate("/locations"),
    },
    {
      image: "https://www.anardana.in/5.jpg",
      title: "11 Unique Experiences",
      subtitle:
        "Each outlet with its own distinctive vibe, sumptuous menu and cocktails",
      button1: "Find Your Restaurant",
      button2: "📍 Find Restaurants",
      button1Action: () => navigate("/locations"),
      button2Action: () => navigate("/locations"),
    },
  ];
;

  /* SLIDER LOGIC – FAST & SMOOTH */
  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFlash(false);
      }, 180);
    }, 3800);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="homeHero">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500&display=swap');

          /* HERO */
         .homeHero {
  height: 100vh;
  min-height: 720px;
  margin-top: -80px;
}


          /* SLIDES */
          .homeSlide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transform: scale(1.015);
            transition:
              opacity 0.9s cubic-bezier(0.4,0,0.2,1),
              transform 1.1s cubic-bezier(0.4,0,0.2,1);
            will-change: opacity, transform;
          }

          .homeSlideActive {
            opacity: 1;
            transform: scale(1);
            z-index: 1;
          }

          .homeSlide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* SOFT LIGHT FLASH */
          .homeFlash {
  position: absolute;
  inset: 0;
  background: white;
  opacity: 0;
  z-index: 5;
  pointer-events: none;
}

         .homeFlashActive {
  opacity: 0.45; 
}

          /* OVERLAY */
          .homeOverlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                to right,
                rgba(0,0,0,0.7),
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.15)
              );
            z-index: 2;
          }

          /* CONTENT */
          .homeContentWrap {
            position: absolute;
            inset: 0;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 30%;
            
  
 

          }

          .homeContent {
            max-width: 720px;
            animation: textFade 0.6s ease;
          }

          @keyframes textFade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .homeTitle {
            font-family: 'Fredoka', sans-serif;
            font-size: 4.2rem;
            color: #fff;
            line-height: 1.1;
            margin-bottom: 18px;
            text-shadow: 0 8px 35px rgba(0,0,0,0.6);
          }

          .homeSubtitle {
            font-family: 'Inter', sans-serif;
            font-size: 1.3rem;
            color: rgba(255,255,255,0.92);
            margin-bottom: 42px;
            max-width: 520px;
          }

          /* BUTTONS */
          .homeButtons {
            display: flex;
            gap: 22px;
            flex-wrap: wrap;
          }

          .homeBtnPrimary,
          .homeBtnSecondary {
            padding: 18px 42px;
            border-radius: 12px;
            font-family: 'Inter', sans-serif;
            font-size: 1.05rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
          }

          .homeBtnPrimary {
            background: #5b1a1d;
            color: #fff;
          }

          .homeBtnSecondary {
            background: rgba(255,255,255,0.18);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.35);
            backdrop-filter: blur(12px);
          }

          .homeBtnPrimary:hover,
          .homeBtnSecondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          }

          /* DOTS */
          .homeDots {
            position: absolute;
            bottom: 26px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 14px;
            z-index: 4;
          }

          .homeDot {
            width: 36px;
            height: 4px;
            background: rgba(255,255,255,0.35);
            border-radius: 2px;
            cursor: pointer;
            transition: 0.3s;
          }

          .homeDotActive {
            width: 56px;
            background: #fff;
          }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .homeTitle { font-size: 3.8rem; }
            .homeContentWrap { padding-left: 6%; }
          }

          @media (max-width: 768px) {
            .homeTitle { font-size: 3rem; }
            .homeSubtitle { font-size: 1.15rem; }
            .homeContentWrap { padding-left: 5%; }
            .homeButtons { flex-direction: column; }
          }

          @media (max-width: 480px) {
            .homeTitle { font-size: 2.4rem; }
            .homeSubtitle { font-size: 1.05rem; }
          }
        `}</style>

        {slides.map((slide, i) => (
          <div
            key={i}
            className={`homeSlide ${
              i === current ? "homeSlideActive" : ""
            }`}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}

        <div className={`homeFlash ${flash ? "homeFlashActive" : ""}`} />
        <div className="homeOverlay" />

        <div className="homeContentWrap">
          <div key={current} className="homeContent">
            <h1 className="homeTitle">{slides[current].title}</h1>
            <p className="homeSubtitle">{slides[current].subtitle}</p>

            <div className="homeButtons">
              <button className="homeBtnPrimary">
                {slides[current].button1}
              </button>
              <button className="homeBtnSecondary">
                {slides[current].button2}
              </button>
            </div>
          </div>
        </div>

        <div className="homeDots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`homeDot ${
                i === current ? "homeDotActive" : ""
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      <Location />
      <Homepart3 />
      <Homepart5 />
      <Homepart4 />
      <Homepart6 />
      <Homepart7 />
      
    </>
  );
}