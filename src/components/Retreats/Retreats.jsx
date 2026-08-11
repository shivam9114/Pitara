import "./Retreats.css";

import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.avif";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/4.avif";

const retreats = [
  {
    id: "01",
    image: img1,
    location: "Rishikesh, Uttarakhand",
    title: "Himalayan Silence",
    description:
      "A vipassana-informed hatha immersion above the Ganga.",
    nights: "7 Nights",
    price: "$1,450",
    large: true,
  },
  {
    id: "02",
    image: img2,
    location: "Alleppey, Kerala",
    title: "Backwater Stillness",
    description:
      "Ayurveda, kundalini and houseboat mornings on Vembanad Lake.",
    nights: "10 Nights",
    price: "$2,180",
    large: false,
  },
  {
    id: "03",
    image: img3,
    location: "Agonda, Goa",
    title: "Tidal Ashtanga",
    description:
      "Mysore-style practice at sunrise, ocean floats at dusk.",
    nights: "8 Nights",
    price: "$1,620",
    large: false,
  },
  {
    id: "04",
    image: img4,
    location: "Spiti Valley, Himachal",
    title: "Spiti Altitude",
    description:
      "High-desert pranayama, monastic silence and glacier mornings.",
    nights: "12 Nights",
    price: "$2,950",
    large: true,
  },
];

export default function Retreats() {
  return (
    <section className="retreats">

      <div className="retreatContainer">

        <div className="retreatHeader">

          <div>

            <h2>
              Four retreats.
              <br />
              <em>One subcontinent.</em>
            </h2>

          </div>

          <p>
            Curated seasonal departures for 2026, capped at fourteen guests.
            Reserve your seat with a soft-hold before public release.
          </p>

        </div>

        <div className="retreatGrid">

          {retreats.map((item) => (

            <article
              key={item.id}
              className={`retreatCard ${item.large ? "large" : ""}`}
            >

              <div className="imageBox">

                <img src={item.image} alt={item.title} />

                <span className="badge">
                  {item.id}
                </span>

              </div>

              <div className="cardInfo">

                <small>{item.location}</small>

                <div className="titleRow">

                  <h3>{item.title}</h3>

                  <div className="price">

                    <span>{item.nights} • FROM</span>

                    <strong>{item.price}</strong>

                  </div>

                </div>

                <p>{item.description}</p>

                <a href="#">Enquire →</a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}