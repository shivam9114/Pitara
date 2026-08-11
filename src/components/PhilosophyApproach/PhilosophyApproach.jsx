import "./PhilosophyApproach.css";

import philosophyImage from "../../assets/img/travel.jpg";

const philosophyPoints = [
  {
    icon: "⌁",
    title: "Explore",
    text: "Discover new destinations, cultures, people and perspectives.",
  },
  {
    icon: "△",
    title: "Experience",
    text: "Go beyond sightseeing and immerse yourself in authentic moments.",
  },
  {
    icon: "♧",
    title: "Connect",
    text: "Build meaningful connections with people, communities, nature and yourself.",
  },
  {
    icon: "☼",
    title: "Evolve",
    text: "Return from every journey with new memories, fresh energy and a renewed perspective.",
  },
];

const approachPoints = [
  {
    icon: "♧",
    title: "Listen",
    text: "We understand your needs, preferences, expectations and purpose of travel.",
  },
  {
    icon: "♡",
    title: "Understand",
    text: "We consider your interests—culture, spirituality, adventure, wellness, yoga, nature, relaxation or quality time.",
  },
  {
    icon: "⌁",
    title: "Create",
    text: "We design a personalised itinerary with the right destinations, experiences, activities, stays and pace.",
  },
  {
    icon: "☷",
    title: "Personalise",
    text: "We make your journey flexible and comfortable with thoughtful details that match your expectations.",
  },
  {
    icon: "♧",
    title: "Support",
    text: "From planning to your journey, we remain connected and help make it smooth and stress-free.",
  },
  {
    icon: "✈",
    title: "Experience",
    text: "You travel, explore, connect, relax and create memories while we take care of the details behind the scenes.",
  },
];

export default function PhilosophyApproach() {
  return (
    <section className="philosophyApproach">

      {/* =====================================
          LEFT IMAGE
      ===================================== */}

      <div className="philosophyImage">
        <img
          src={philosophyImage}
          alt="Travel experience"
        />
      </div>


      {/* =====================================
          CORE PHILOSOPHY
      ===================================== */}

      <div className="corePhilosophy">

        <div className="sectionEyebrow">
          OUR CORE PHILOSOPHY
          <span></span>
        </div>

        <h2>
          Travel Outside.
          <br />
          <em>Transform</em> Within.
        </h2>

        <p className="philosophyIntro">
          We believe every journey has the power to change
          something within us. We bring together travel,
          wellness, yoga, culture, adventure and meaningful
          connections to create experiences that go beyond
          ordinary holidays.
        </p>


        <div className="philosophyGrid">

          {philosophyPoints.map((point, index) => (
            <div
              className="philosophyPoint"
              key={index}
            >

              <div className="philosophyIcon">
                {point.icon}
              </div>

              <h3>
                {point.title}
              </h3>

              <p>
                {point.text}
              </p>

            </div>
          ))}

        </div>


        <p className="philosophyBottom">
          Yoga Retreats, Wellness Journeys, Group Experiences,
          Adventure, Cultural Exploration or International Travel
          Programmes—we create experiences with purpose,
          heart and soul.
        </p>

      </div>


      {/* =====================================
          OUR APPROACH
      ===================================== */}

      <div className="ourApproach">

        <div className="approachContent">

          <div className="sectionEyebrow">
            OUR APPROACH
            <span></span>
          </div>

          <h2>
            Your Journey
            <br />
            Starts <em>With You</em>
          </h2>

          <p className="approachIntro">
            We understand you first. Then, we create a programme
            that is perfectly designed around you.
          </p>


          <div className="approachList">

            {approachPoints.map((point, index) => (
              <div
                className="approachItem"
                key={index}
              >

                <div className="approachIcon">
                  {point.icon}
                </div>

                <div className="approachTitle">
                  {point.title}
                </div>

                <p>
                  {point.text}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* Decorative leaf */}

        <div className="approachDecoration">
          <span>♧</span>
        </div>

      </div>

    </section>
  );
}