import "./AboutStory.css";

import travelImage from "../../assets/img/travel.jpg";
import yogaImage from "../../assets/img/yoga.jpg";

export default function AboutStory() {
  return (
    <section className="aboutStory">

      {/* =========================
          PURPOSE
      ========================= */}

      <div className="aboutStoryRow purposeRow">

        <div className="aboutStoryText purposeText">

          <span className="aboutStoryLabel">
            Our Purpose
          </span>

          <h2>
            We create journeys that
            <br />
            bring you home to <em>yourself.</em>
          </h2>

        </div>

        <div className="aboutStoryText purposeDescription">

          <p>
            Sattva Yātrā was born from a simple belief — that travel
            can be meaningful, and yoga can be lived beyond the mat.
            We design experiences that weave conscious travel with
            authentic yoga practices in the world's most sacred and
            beautiful places.
          </p>

        </div>

      </div>


      {/* =========================
          TRAVEL
      ========================= */}

      <div className="aboutStoryRow travelRow">

        <div className="aboutStoryImage">

          <img
            src={travelImage}
            alt="Travellers walking through the mountains"
          />

        </div>

        <div className="aboutStoryText travelText">

          <span className="aboutStoryLabel">
            Travel With Intention
          </span>

          <h2>
            We travel <em>slowly.</em>
            <br />
            with respect and curiosity.
          </h2>

          <p>
            Our journeys are crafted to connect you with local cultures,
            nature, and communities. We partner with people who share
            our values and support places we visit.
          </p>

          <a href="/retreats" className="aboutStoryLink">
            Explore Retreats
            <span>→</span>
          </a>

        </div>

      </div>


      {/* =========================
          YOGA
      ========================= */}

      <div className="aboutStoryRow yogaRow">

        <div className="aboutStoryText yogaText">

          <span className="aboutStoryLabel">
            Practice With Depth
          </span>

          <h2>
            Yoga is not an activity.
            <br />
            It is a way of <em>living.</em>
          </h2>

          <p>
            From daily asana and meditation to philosophy and reflection,
            our offerings are rooted in tradition and guided by experienced
            teachers who walk the path.
          </p>

          <a
            href="/teacher-training"
            className="aboutStoryLink"
          >
            View Teacher Training
            <span>→</span>
          </a>

        </div>

        <div className="aboutStoryImage">

          <img
            src={yogaImage}
            alt="Yoga practice beside the river"
          />

        </div>

      </div>


      {/* =========================
          STATS
      ========================= */}

      <div className="aboutStats">

        <div className="aboutStat">

          <strong>12+</strong>

          <span>
            Years of Experience
          </span>

        </div>

        <div className="aboutStat">

          <strong>25+</strong>

          <span>
            Yoga Teachers
          </span>

        </div>

        <div className="aboutStat">

          <strong>50+</strong>

          <span>
            Destinations
          </span>

        </div>

        <div className="aboutStat">

          <strong>3000+</strong>

          <span>
            Happy Travellers
          </span>

        </div>

      </div>

    </section>
  );
}