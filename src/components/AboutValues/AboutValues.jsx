import "./AboutValues.css";

import founderImage from "../../assets/img/1.jpeg";

import meeraImage from "../../assets/img/1.jpeg";
import arjunImage from "../../assets/img/2.avif";
import kavyaImage from "../../assets/img/1.jpeg";
import devImage from "../../assets/img/2.avif";


const values = [
  {
    icon: "✧",
    title: "Authenticity",
    text: "We stay true to the roots of yoga and the essence of each place we visit.",
  },
  {
    icon: "♧",
    title: "Sustainability",
    text: "We travel mindfully, support local communities, and protect what we love.",
  },
  {
    icon: "♢",
    title: "Integrity",
    text: "We believe in honest relationships, transparency, and mindful experiences.",
  },
  {
    icon: "♡",
    title: "Transformation",
    text: "We create space for inner growth, healing, and meaningful change.",
  },
];


const teachers = [
  {
    image: meeraImage,
    name: "Meera",
    role: "Yoga Teacher",
  },
  {
    image: arjunImage,
    name: "Arjun",
    role: "Meditation Guide",
  },
  {
    image: kavyaImage,
    name: "Kavya",
    role: "Philosophy Teacher",
  },
  {
    image: devImage,
    name: "Dev",
    role: "Travel Host",
  },
];


export default function AboutValues() {
  return (
    <section className="aboutValues">


      {/* =====================================
          VALUES
      ===================================== */}

      <div className="valuesSection">

        <div className="valuesIntro">

          <span className="aboutValuesLabel">
            Our Values
          </span>

          <h2>
            Rooted in <em>Sattva.</em>
            <br />
            Guided by values.
          </h2>

        </div>


        <div className="valuesGrid">

          {values.map((value, index) => (

            <div
              className="valueItem"
              key={index}
            >

              <div className="valueIcon">
                {value.icon}
              </div>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

            </div>

          ))}

        </div>

      </div>



      {/* =====================================
          FOUNDERS
      ===================================== */}

      <div className="founderSection">

        <div className="founderImage">

          <img
            src={founderImage}
            alt="Sattva Yatra founder by the Ganges"
          />

        </div>


        <div className="founderContent">

          <span className="aboutValuesLabel">
            A Note From Our Founders
          </span>

          <div className="founderQuoteMark">
            “
          </div>

          <blockquote>
            We started Sattva Yātrā to share the places
            <br className="desktopOnly" />
            and practices that transformed our own lives.
            <br className="desktopOnly" />
            Our hope is that they transform yours too.
          </blockquote>


          <div className="founders">

            <div className="founderPerson">

              <div className="founderAvatar">
                AS
              </div>

              <div>
                <strong>Aishwarya</strong>
                <span>Co-founder</span>
              </div>

            </div>


            <div className="founderPerson">

              <div className="founderAvatar">
                VK
              </div>

              <div>
                <strong>Vikram</strong>
                <span>Co-founder</span>
              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================
          TEAM
      ===================================== */}

      <div className="teamSection">

        <div className="teamHeading">

          <div>

            <span className="aboutValuesLabel">
              Meet Our Guides
            </span>

            <h2>
              Hearts that hold the space.
            </h2>

          </div>


          <p>
            Our teachers and hosts are the soul of our journeys.
            <br />
            They are practitioners, seekers, and lifelong students.
          </p>

        </div>


        <div className="teamGrid">

          {teachers.map((teacher, index) => (

            <div
              className="teamCard"
              key={index}
            >

              <div className="teamImage">

                <img
                  src={teacher.image}
                  alt={teacher.name}
                />

              </div>

              <div className="teamInfo">

                <h3>
                  {teacher.name}
                </h3>

                <span>
                  {teacher.role}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}