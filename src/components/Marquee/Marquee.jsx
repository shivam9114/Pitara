import "./Marquee.css";

const items = [
  "Yoga",
  "Retreats",
  "Prāṇāyāma",
  "Meditation",
  "Teacher Training",
  "Mindfulness",
];

export default function Marquee() {
  return (
    <section className="marqueeSection">

      <div className="marqueeTrack">

        {[...items, ...items].map((item, index) => (
          <div className="marqueeItem" key={index}>
            <h2>{item}</h2>

            <svg
              className="star"
              width="58"
              height="58"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30 2
                C30 18 42 30 58 30
                C42 30 30 42 30 58
                C30 42 18 30 2 30
                C18 30 30 18 30 2Z"
                stroke="#444"
                strokeWidth="1.4"
              />
            </svg>

          </div>
        ))}

      </div>

    </section>
  );
}