import "./Stats.css";

const stats = [
  {
    value: "14",
    label: "Years Hosting Retreats",
  },
  {
    value: "6.2k",
    label: "Alumni Across 47 Countries",
  },
  {
    value: "14",
    label: "Max Guests Per Journey",
  },
  {
    value: "48h",
    label: "Reply Time On Enquiries",
  },
];

export default function Stats() {
  return (
    <section className="statsSection">

      {/* Background Watermark */}
      <div className="watermark">
        सत
      </div>

      <div className="statsContainer">

        {stats.map((item, index) => (
          <div className="statCard" key={index}>

            <div className="topLine"></div>

            <h2>{item.value}</h2>

            <span>{item.label}</span>

          </div>
        ))}

      </div>

    </section>
  );
}