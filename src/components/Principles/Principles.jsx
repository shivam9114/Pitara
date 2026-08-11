import "./Principles.css";

const principles = [
  {
    number: "01",
    title: "The land teaches first.",
    description:
      "Every retreat is shaped by its geography — the altitude of Spiti, the humidity of Kerala, the tide of Agonda. We plan the practice around the place, never the reverse.",
  },
  {
    number: "02",
    title: "Practice without spectacle.",
    description:
      "No incense theatre, no imported aesthetics. Hatha, Ashtanga and pranayama taught with rigor and warmth by Indian-trained teachers who have lived the tradition.",
  },
  {
    number: "03",
    title: "Small groups. Long mornings.",
    description:
      "We cap every journey at fourteen guests. Practice runs from before sunrise until the light softens — with slow food, deep rest, and unhurried afternoons.",
  },
];

export default function Principles() {
  return (
    <section className="principles">

      <div className="container">

        <div className="headingRow">

          <div className="leftHeading">

            <span className="chapter">
              II CHAPTER I — PHILOSOPHY
            </span>

            <h2>
              Three principles
              <br />
              we <em>refuse</em> to compromise.
            </h2>

          </div>

          <div className="rightHeading">

            <p>
              After fourteen years of hosting retreats across the
              subcontinent, this is what we know.
            </p>

          </div>

        </div>

        <div className="principleGrid">

          {principles.map((item) => (

            <div className="card" key={item.number}>

              <div className="number">
                {item.number}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}