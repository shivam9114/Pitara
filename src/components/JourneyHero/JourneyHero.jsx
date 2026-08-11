import "./JourneyHero.css";
import heroImage from "./hero-bg.webp";

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
              The journey
              <br />
              inward <em>begins</em>
              <br />
              at altitude.
            </h1>

            <p>
              Small-group yoga retreats and teacher training across the
              Himalayas, Kerala backwaters, and the Arabian coast — hosted
              by Sattva Yātrā since 2011.
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