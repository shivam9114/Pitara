import "./Itineraries.css";

const itineraries = [
  {
    number: "01",
    image: "/images/itinerary-1.jpg",
    category: "YOGA • WELLNESS",
    title: "Rishikesh",
    subtitle: "Journey Within",
    duration: "5 Days / 4 Nights",
    location: "Uttarakhand, India",
  },
  {
    number: "02",
    image: "/images/itinerary-2.jpg",
    category: "CULTURE • HERITAGE",
    title: "Rajasthan",
    subtitle: "Colours of the Desert",
    duration: "7 Days / 6 Nights",
    location: "Rajasthan, India",
  },
  {
    number: "03",
    image: "/images/itinerary-3.jpg",
    category: "NATURE • ADVENTURE",
    title: "Himalayas",
    subtitle: "Into the Mountains",
    duration: "6 Days / 5 Nights",
    location: "Himachal Pradesh, India",
  },
  {
    number: "04",
    image: "/images/itinerary-4.jpg",
    category: "WELLNESS • SLOW TRAVEL",
    title: "Kerala",
    subtitle: "Backwaters & Balance",
    duration: "6 Days / 5 Nights",
    location: "Kerala, India",
  },
  {
    number: "05",
    image: "/images/itinerary-5.jpg",
    category: "SPIRITUAL • CULTURAL",
    title: "Varanasi",
    subtitle: "Ancient India",
    duration: "4 Days / 3 Nights",
    location: "Uttar Pradesh, India",
  },
];

export default function Itineraries() {
  return (
    <section className="itinerariesSection">

      <div className="itinerariesHeader">

        <div>
          <span className="itinerariesEyebrow">
            CURATED JOURNEYS
          </span>

          <h2>
            Explore our
            <em> itineraries.</em>
          </h2>
        </div>

        <p>
          Thoughtfully designed journeys that bring together
          travel, culture, wellness and meaningful experiences.
        </p>

      </div>


      <div className="itinerariesTrack">

        {itineraries.map((item) => (

          <article
            className="itineraryCard"
            key={item.number}
          >

            <div className="itineraryImage">

              <img
                src={item.image}
                alt={item.title}
              />

              <span className="itineraryNumber">
                {item.number}
              </span>

              <span className="itineraryCategory">
                {item.category}
              </span>

            </div>


            <div className="itineraryContent">

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.subtitle}
              </h4>

              <div className="itineraryMeta">

                <span>
                  {item.duration}
                </span>

                <span>
                  {item.location}
                </span>

              </div>


              <a href="#">
                Explore Journey
                <span>→</span>
              </a>

            </div>

          </article>

        ))}

      </div>


      <div className="itinerariesFooter">

        <span>
          05 JOURNEYS
        </span>

        <a href="/services">
          View All Journeys
          <span>→</span>
        </a>

      </div>

    </section>
  );
}