import "./Retreats.css";

import { Link } from "react-router-dom";

import itineraries from "../../data/itineraries";

export default function Retreats() {
  return (
    <section className="retreats">

      <div className="retreatContainer">

        <div className="retreatHeader">

          <div>
            <h2>
              Journeys across India.
              <br />
              <em>Curated for you.</em>
            </h2>
          </div>

          <p>
            Thoughtfully designed journeys through India's heritage,
            spirituality, landscapes and living culture.
          </p>

        </div>

        <div className="retreatGrid">

          {itineraries.map((item) => (

            <article
              key={item.id}
              className="retreatCard"
            >

              <Link
                to={`/itineraries/${item.slug}`}
                className="retreatCardLink"
              >

                <div className="imageBox">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span className="badge">
                    {item.number}
                  </span>

                </div>

                <div className="cardInfo">

                  <small>
                    {item.location}
                  </small>

                  <div className="titleRow">

                    <h3>
                      {item.title}
                    </h3>

                    <div className="price">

                      <span>
                        {item.duration}
                      </span>

                    </div>

                  </div>

                  <p>
                    {item.shortDescription}
                  </p>

                  <div className="itineraryLink">
                    View itinerary <span>→</span>
                  </div>

                </div>

              </Link>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}