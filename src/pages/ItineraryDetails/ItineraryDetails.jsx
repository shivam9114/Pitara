import { useParams, Link } from "react-router-dom";

import itineraries from "../../data/itineraries";

import "./ItineraryDetails.css";

export default function ItineraryDetails() {

  const { slug } = useParams();

  const itinerary = itineraries.find(
    (item) => item.slug === slug
  );

  if (!itinerary) {
    return (
      <section className="itineraryNotFound">
        <h1>Itinerary not found</h1>

        <Link to="/">
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <main className="itineraryDetails">

      {/* HERO */}

      <section
        className="itineraryHero"
        style={{
          backgroundImage: `url(${itinerary.image})`,
        }}
      >

        <div className="itineraryHeroOverlay">

          <div className="itineraryHeroContent">

            <span>
              {itinerary.location}
            </span>

            <h1>
              {itinerary.title}
            </h1>

            <p>
              {itinerary.duration}
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="itineraryIntro">

        <div className="itineraryIntroInner">

          <div>

            <span className="eyebrow">
              THE JOURNEY
            </span>

            <h2>
              {itinerary.title}
            </h2>

          </div>

          <p>
            {itinerary.shortDescription}
          </p>

        </div>

      </section>


      {/* HIGHLIGHTS */}

      <section className="itineraryHighlights">

        <div className="itineraryContainer">

          <span className="eyebrow">
            JOURNEY HIGHLIGHTS
          </span>

          <div className="highlightGrid">

            {itinerary.highlights.map((highlight) => (

              <div
                className="highlightItem"
                key={highlight}
              >
                {highlight}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FULL CONTENT */}

      <section className="itineraryContent">

        <div className="itineraryContainer">

          <span className="eyebrow">
            ITINERARY
          </span>

          <h2>
            Your journey, day by day.
          </h2>

          {/* FULL ITINERARY WILL GO HERE */}

        </div>

      </section>


      {/* CTA */}

      <section className="itineraryCTA">

        <div>

          <span>
            READY TO EXPLORE INDIA?
          </span>

          <h2>
            Begin your journey with Pitara.
          </h2>

          <Link to="/contact">
            Enquire Now →
          </Link>

        </div>

      </section>

    </main>
  );
}