import "./ServicesHero.css";

import heroImage from "../../assets/img/3.jpeg";

export default function ServicesHero() {
  return (
    <section className="servicesHero">

      <img
        className="servicesHeroImage"
        src={heroImage}
        alt="Yoga and travel experience"
      />

      <div className="servicesHeroOverlay"></div>

      <div className="servicesHeroContent">

        <div className="servicesHeroEyebrow">
          <span>OUR SERVICES</span>
          <i></i>
        </div>

        <h1>
          Meaningful journeys.
          <br />
          <em>Mindful experiences.</em>
        </h1>

        <p>
          From soulful travels to transformative retreats,
          <br className="desktopBreak" />
          we create personalised journeys that inspire,
          <br className="desktopBreak" />
          nourish and stay with you forever.
        </p>

      </div>

    </section>
  );
}