import "./ContactHero.css";

import contactHeroImage from "../../assets/img/4.avif";



export default function ContactHero() {
  return (
    <section
      className="contactHero"
      style={{
        backgroundImage: `url(${contactHeroImage})`,
      }}
    >
      <div className="contactHeroOverlay"></div>

      <div className="contactHeroContent">

        <span className="contactHeroEyebrow">
          II &nbsp; WE'D LOVE TO HEAR FROM YOU
        </span>

        <h1>
          Contact Us
        </h1>

        <p>
          Whether you're seeking a retreat, a teacher
          <br className="desktopBreak" />
          training, or simply guidance — we're here to
          <br className="desktopBreak" />
          help you take the next step.
        </p>

      </div>

    </section>
  );
}