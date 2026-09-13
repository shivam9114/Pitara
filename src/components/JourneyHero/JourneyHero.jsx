import "./JourneyHero.css";
import heroImage from "./banner.jpg";

export default function JourneyHero() {
  return (
    <section
      className="journeyHero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="journeyOverlay"></div>

      <div className="journeyContainer">

        <div className="journeyTop">

          <div className="journeyLabel">
            <span></span>
            <div>
              <p>II CHAPTER 00 — ARRIVAL</p>
              <p>EST. RISHIKESH · INDIA</p>
            </div>
          </div>

        </div>

        <div className="journeyContent">

          <div className="journeyLeft">

            <h1>
             The journey begins
with what you discover.
            </h1>

            <p>
              Customised journeys across India and beyond, bringing together travel, yoga, 
              wellness, culture, adventure, and meaningful experiences — thoughtfully
               planned by PITARA.
            </p>

          </div>

          <div className="journeyRight">

            <a href="#">
              VIEW 2026 RETREATS
              <span>↓</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}