import "./Testimonials.css";

import user1 from "../../assets/img/4.avif";
import user2 from "../../assets/img/2.avif";

const testimonials = [
  {
    id: 1,
    image: user1,
    name: "Ines Fernández",
    info: "Barcelona · 200H Alumna",
    quote:
      "The week in Rishikesh dismantled every notion I held about what a yoga retreat could be. It was serious, quiet, and slow — and I came home a different person.",
  },
  {
    id: 2,
    image: user2,
    name: "Daniel Weiss",
    info: "Berlin · 500H Immersion",
    quote:
      "Faculty of a caliber I hadn't found in Bali or Ubud. There is no theatre here. Only the practice, the land, and the people who have lived it for decades.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <span className="sectionTag">
          II Voices From The Path
        </span>

        <div className="testimonialGrid">

          {testimonials.map((item, index) => (

            <article
              className={`testimonial ${
                index === 1 ? "lower" : ""
              }`}
              key={item.id}
            >

              <div className="quoteIcon">
                “
              </div>

              <p className="quote">
                {item.quote}
              </p>

              <div className="author">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.info}</span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}