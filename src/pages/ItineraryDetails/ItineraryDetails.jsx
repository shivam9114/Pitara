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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="itineraryHero"
        style={{
          backgroundImage: `url(${itinerary.image})`,
        }}
      >
        <div className="itineraryHeroOverlay">

          <div className="itineraryHeroContent">

            <span className="itineraryHeroLocation">
              {itinerary.location}
            </span>

            <h1>
              {itinerary.title}
            </h1>

            <div className="itineraryHeroMeta">
              <span>{itinerary.duration}</span>
              <span className="heroMetaDot">•</span>
              <span>{itinerary.days.length} Days</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="itineraryIntro">

        <div className="itineraryContainer">

          <div className="introGrid">

            <div className="introHeading">

              <span className="eyebrow">
                THE JOURNEY
              </span>

              <h2>
                {itinerary.title}
              </h2>

            </div>

            <div className="introDescription">

              <p>
                {itinerary.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="itineraryHighlights">

        <div className="itineraryContainer">

          <span className="eyebrow">
            JOURNEY HIGHLIGHTS
          </span>

          <div className="highlightGrid">

            {itinerary.highlights.map((highlight, index) => (
              <div
                className="highlightItem"
                key={highlight}
              >

                <span className="highlightNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="highlightText">
                  {highlight}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ITINERARY
      ===================================================== */}

      <section className="itineraryContent">

        <div className="itineraryContainer">

          <div className="itinerarySectionHeader">

            <div className="itinerarySectionLabel">

              <span className="eyebrow">
                ITINERARY
              </span>

              <span className="itineraryDuration">
                {itinerary.duration}
              </span>

            </div>

            <h2>
              Your journey,
              <br />
              <em>day by day.</em>
            </h2>

          </div>


          {/* JOURNEY TIMELINE */}

          <div className="journeyTimeline">

            <div className="journeyLine" />

            {itinerary.days.map((day, index) => (

              <article
                className="journeyDay"
                key={day.day}
              >

                {/* DAY NUMBER */}

                <div className="journeyDayMarker">

                  <span className="journeyDayDot" />

                  <span className="journeyDayNumber">
                    {day.day}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="journeyDayContent">

                  <div className="journeyDayTop">

                    <span className="journeyDayLabel">
                      DAY {day.day}
                    </span>

                    <span className="journeyDayIndex">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(itinerary.days.length).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>
                    {day.title}
                  </h3>

                  <p>
                    {day.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          END OF JOURNEY
      ===================================================== */}

      <section className="journeyEnd">

        <div className="journeyEndInner">

          <span className="journeyEndLine" />

          <span>
            END OF JOURNEY
          </span>

          <span className="journeyEndLine" />

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="itineraryCTA">

        <div className="itineraryCTAInner">

          <span className="eyebrow">
            READY TO EXPLORE INDIA?
          </span>

          <h2>
            Begin your journey
            <br />
            <em>with Pitara.</em>
          </h2>

          <Link to="/contact">
            Enquire Now
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}