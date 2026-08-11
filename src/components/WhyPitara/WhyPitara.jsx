import "./WhyPitara.css";

const reasons = [
  {
    icon: "♧",
    title: "Curated",
    title2: "Just for You",
    text: "We create personalised journeys based on your dreams, interests, pace and purpose.",
  },
  {
    icon: "◎",
    title: "From India",
    title2: "to the World",
    text: "Discover the soul of India or explore incredible destinations beyond borders.",
  },
  {
    icon: "♧",
    title: "Travel That",
    title2: "Nourishes You",
    text: "Experience Yoga Retreats, Wellness Journeys and Yoga Groups—where travel becomes a journey within.",
  },
  {
    icon: "◎",
    title: "Experiences",
    title2: "Beyond Sightseeing",
    text: "Immerse in culture, spirituality, adventure, nature and local experiences that make every journey memorable.",
  },
  {
    icon: "♧",
    title: "Groups That Feel",
    title2: "Like Communities",
    text: "We bring people together through Yoga, Wellness, Adventure and Special-Interest Groups.",
  },
  {
    icon: "♡",
    title: "We Take Care of",
    title2: "Every Detail",
    text: "From planning and coordination to your on-ground experience, we handle the details.",
  },
  {
    icon: "☼",
    title: "Travel With",
    title2: "Meaning",
    text: "We don't just plan where you go. We care about how you feel when you return.",
  },
];

export default function WhyPitara() {
  return (
    <section className="whyPitara">

      <div className="whyPitaraHeading">
        <span>WHY PITARA?</span>

        <p>
          Because your journey deserves to be extraordinary.
        </p>
      </div>

      <div className="whyPitaraGrid">

        {reasons.map((reason, index) => (
          <article
            className="whyPitaraItem"
            key={index}
          >

            <div className="whyPitaraIcon">
              {reason.icon}
            </div>

            <h3>
              {reason.title}
              <br />
              <em>{reason.title2}</em>
            </h3>

            <p>
              {reason.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}