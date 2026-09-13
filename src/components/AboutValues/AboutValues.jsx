import "./AboutValues.css";

import founderImage from "../../assets/img/1.jpeg";

import meeraImage from "../../assets/img/1.jpeg";
import arjunImage from "../../assets/img/2.avif";
import kavyaImage from "../../assets/img/1.jpeg";
import devImage from "../../assets/img/2.avif";


const values = [
  {
    icon: "✧",
    title: "Curiosity",
    text: "We believe every journey begins with curiosity — to discover new places, cultures, people, and perspectives.",
  },
  {
    icon: "♧",
    title: "Meaningful Travel",
    text: "We create experiences that go beyond sightseeing and connect you with the heart and soul of every destination.",
  },
  {
    icon: "♢",
    title: "Personalisation",
    text: "Every traveller is different. We design journeys around your interests, pace, purpose, and expectations.",
  },
  {
    icon: "♡",
    title: "Connection",
    text: "We bring people, places, cultures, communities, and experiences together to create memories that truly last.",
  },
];


const teachers = [
  {
    image: meeraImage,
    name: "Meera",
    role: "Yoga & Wellness",
  },
  {
    image: arjunImage,
    name: "Arjun",
    role: "Travel Experience Host",
  },
  {
    image: kavyaImage,
    name: "Kavya",
    role: "Culture & Experiences",
  },
  {
    image: devImage,
    name: "Dev",
    role: "Travel Coordinator",
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
            Travel with <em>purpose.</em>
            <br />
            Experience with heart.
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
            alt="PITARA travel experience"
          />

        </div>


        <div className="founderContent">

          <span className="aboutValuesLabel">
            A Note From PITARA
          </span>

          <div className="founderQuoteMark">
            “
          </div>

          <blockquote>
            We created PITARA to bring together the joy
            <br className="desktopOnly" />
            of travel, the depth of experiences, and the
            <br className="desktopOnly" />
            connections that make every journey meaningful.
          </blockquote>


          <div className="founders">

            <div className="founderPerson">

              <div className="founderAvatar">
                PI
              </div>

              <div>
                <strong>PITARA</strong>
                <span>Travel & Experiences</span>
              </div>

            </div>


            <div className="founderPerson">

              <div className="founderAvatar">
                TY
              </div>

              <div>
                <strong>PITARA</strong>
                <span>Travel & Yoga</span>
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
              Meet Our Team
            </span>

            <h2>
              People who make journeys happen.
            </h2>

          </div>


          <p>
            Our team brings together travel planners,
            <br />
            experience hosts, yoga practitioners, and coordinators.
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