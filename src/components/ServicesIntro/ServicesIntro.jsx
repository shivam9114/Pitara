import "./ServicesIntro.css";

import introImage from "../../assets/img/travel.jpg";

export default function ServicesIntro() {
  const services = [
    {
      icon: "♧",
      title: "India Travel Programmes",
      subtitle: "& Customised Itineraries",
    },
    {
      icon: "◎",
      title: "International Travel",
      subtitle: "Programmes",
    },
    {
      icon: "◉",
      title: "Yoga Retreats &",
      subtitle: "Wellness Holidays",
    },
    {
      icon: "♧",
      title: "Yoga Groups &",
      subtitle: "Yoga Travel",
    },
    {
      icon: "□",
      title: "Corporate &",
      subtitle: "Special Interest Groups",
    },
    {
      icon: "⌁",
      title: "Adventure & Activity-",
      subtitle: "Based Groups",
    },
    {
      icon: "♜",
      title: "Cultural, Spiritual &",
      subtitle: "Pilgrimage Journeys",
    },
    {
      icon: "♧",
      title: "Family &",
      subtitle: "Private Tours",
    },
    {
      icon: "♧",
      title: "Group Tours &",
      subtitle: "Experiential Travel",
    },
    {
      icon: "◌",
      title: "Customised Travel Planning",
      subtitle: "& On-Ground Assistance",
    },
  ];

  return (
    <section className="servicesIntro">

      {/* =====================================
          INTRO
      ===================================== */}

      <div className="servicesIntroTop">

        <div className="servicesIntroText">

          <div className="servicesIntroLabel">
            ABOUT PITARA
            <span></span>
          </div>

          <h2>
            Travel. Yoga. Experiences.
            <br />
            Crafted with <em>Heart.</em>
          </h2>

          <p>
            At PITARA, we create meaningful journeys filled
            with discovery, wellness, adventure and beautiful
            memories. From customised travel programmes to
            Yoga Retreats and Groups, we bring together travel
            and well-being in a unique and soulful way.
          </p>

          <div className="servicesIntroStatement">

            <span className="servicesLeaf">
              ♧
            </span>

            <div>
              <strong>
                TRAVEL WITH PURPOSE.
              </strong>

              <strong>
                EXPERIENCE WITH HEART. AND CREATE
              </strong>

              <strong>
                MEMORIES THAT LAST A LIFETIME.
              </strong>
            </div>

          </div>

        </div>


        <div className="servicesIntroImage">

          <img
            src={introImage}
            alt="PITARA yoga experience"
          />

        </div>


        <div className="servicesIntroDecoration">
          ♧
        </div>

      </div>


      {/* =====================================
          SERVICES
      ===================================== */}

      <div className="servicesList">

        <div className="servicesListHeading">
          OUR SERVICES
        </div>

        <div className="servicesGrid">

          {services.map((service, index) => (

            <div
              className="serviceItem"
              key={index}
            >

              <div className="serviceIcon">
                {service.icon}
              </div>

              <h3>
                {service.title}
                <br />
                {service.subtitle}
              </h3>

            </div>

          ))}

        </div>


        <p className="servicesBottomText">
          Whether you are looking for a peaceful Yoga
          Retreat in India, an inspiring cultural journey,
          <br className="desktopOnly" />
          an adventure-filled group experience, or a
          customised international holiday, PITARA is
          here to plan and organise it for you.
        </p>


        <div className="servicesBottomOrnament">
          ◇
        </div>

      </div>

    </section>
  );
}