import "./AboutHero.css";

import aboutHeroImage from "../../assets/img/1.jpeg";

export default function AboutHero() {
  return (
    <section
      className="aboutHero"
      style={{
        backgroundImage: `url(${aboutHeroImage})`,
      }}
    >
      <div className="aboutHeroOverlay"></div>

      <div className="aboutHeroContent">

        <span className="aboutHeroEyebrow">
          II
        </span>

        <h1>About Us</h1>

        <p>
          JOURNEYS THAT TRANSFORM.
          <br />
          PRACTICES THAT STAY.
        </p>

        <span className="aboutHeroChapter">
          II
        </span>

      </div>
    </section>
  );
}