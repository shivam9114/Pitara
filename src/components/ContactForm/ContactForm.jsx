import { useState } from "react";
import "./ContactForm.css";

import locationImage from "../../assets/img/1.jpeg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    journey: "",
    startDate: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    // Connect your backend / Web3Forms / PHP here later.
  };

  return (
    <section className="contactFormSection">

      <div className="contactFormContainer">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="contactDetails">

          <h2>
            We respond <em>personally,</em>
            <br />
            within 48 hours.
          </h2>

          <div className="contactAccent">
            ──
          </div>

          <p className="contactIntro">
            Our team in Rishikesh will read your message
            with care and get back to you as soon as
            possible.
          </p>


          {/* EMAIL */}

          <div className="contactDetail">

            <div className="contactIcon">
              ✉
            </div>

            <div>
              <span>EMAIL</span>

              <p>
                hello@sattvayatra.in
              </p>
            </div>

          </div>


          {/* WHATSAPP */}

          <div className="contactDetail">

            <div className="contactIcon">
              ♧
            </div>

            <div>
              <span>WHATSAPP</span>

              <p>
                +91 99999 99999
              </p>
            </div>

          </div>


          {/* STUDIO */}

          <div className="contactDetail">

            <div className="contactIcon">
              ♧
            </div>

            <div>
              <span>STUDIO</span>

              <p>
                Tapovan, Rishikesh,
                <br />
                Uttarakhand 249137, India
              </p>
            </div>

          </div>


          {/* HOURS */}

          <div className="contactDetail">

            <div className="contactIcon">
              ◷
            </div>

            <div>
              <span>HOURS</span>

              <p>
                Mon – Sat&nbsp; | &nbsp;9:00 AM – 6:00 PM IST
              </p>
            </div>

          </div>


          {/* LOCATION CARD */}

          <div className="directionCard">

            <img
              src={locationImage}
              alt="Rishikesh"
            />

            <div className="directionContent">

              <h3>
                Visiting Rishikesh?
              </h3>

              <p>
                You're always welcome to visit
                our studio by the river.
                Let us know in advance.
              </p>

              <a href="#">
                Get Directions
                <span>→</span>
              </a>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="contactFormWrapper">

          <h2>
            Send us a message
          </h2>

          <div className="contactAccent">
            ──
          </div>


          <form onSubmit={handleSubmit}>

            <div className="contactFields">


              {/* NAME */}

              <div className="contactField">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="contactField">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

              </div>


              {/* PHONE */}

              <div className="contactField">

                <label>
                  Phone (Optional)
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 99999 99999"
                />

              </div>


              {/* TRAVELERS */}

              <div className="contactField">

                <label>
                  No. of Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  min="1"
                  value={formData.travelers}
                  onChange={handleChange}
                />

              </div>


              {/* JOURNEY */}

              <div className="contactField">

                <label>
                  Journey of Interest
                </label>

                <select
                  name="journey"
                  value={formData.journey}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select one
                  </option>

                  <option value="retreat">
                    Retreat
                  </option>

                  <option value="teacher-training">
                    Teacher Training
                  </option>

                  <option value="private-journey">
                    Private Journey
                  </option>

                  <option value="yoga">
                    Yoga Experience
                  </option>

                </select>

              </div>


              {/* DATE */}

              <div className="contactField">

                <label>
                  Preferred Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* MESSAGE */}

            <div className="contactMessage">

              <label>
                Tell Us More
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A few lines about your intentions, questions or anything you'd like us to know."
                rows="4"
              />

            </div>


            {/* BOTTOM */}

            <div className="contactFormBottom">

              <label className="consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />

                <span>
                  By enquiring, you agree to receive a personal reply.
                  <br />
                  We never add you to marketing lists.
                </span>

              </label>


              <button
                type="submit"
                className="sendEnquiry"
              >

                Send Enquiry

                <span>
                  →
                </span>

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}