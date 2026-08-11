import "./ContactSection.css";

export default function ContactSection() {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted");
    };

    return (

        <section className="contactSection">

            <div className="container">

                <div className="contactGrid">

                    {/* LEFT */}

                    <div className="contactLeft">

                        <span className="sectionTag">
                            II Chapter V — Begin
                        </span>

                        <h2>

                            Write to us.

                            <br />

                            <em>Slowly.</em>

                        </h2>

                        <p>

                            Every reply is written by hand by our host team
                            in Rishikesh. Tell us who you are, what you seek,
                            and what season would suit you — we'll respond
                            within 48 hours.

                        </p>

                        <div className="divider"></div>

                        <div className="contactInfo">

                            <small>Reach us directly</small>

                            <h3>hello@sattvayatra.in</h3>

                        </div>

                        <div className="contactInfo">

                            <small>Whatsapp</small>

                            <h3>+91 99999 99999</h3>

                        </div>

                        <div className="contactInfo">

                            <small>Studio</small>

                            <h3>
                                Tapovan · Rishikesh
                                <br />
                                Uttarakhand 249137, India
                            </h3>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <form
                        className="contactForm"
                        onSubmit={handleSubmit}
                    >

                        <div className="inputGrid">

                            <div className="field">

                                <label>Name</label>

                                <input
                                    type="text"
                                    placeholder="Your full name"
                                />

                            </div>

                            <div className="field">

                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                />

                            </div>

                            <div className="field">

                                <label>Phone (Optional)</label>

                                <input
                                    type="text"
                                    placeholder="+91 99999 99999"
                                />

                            </div>

                            <div className="field">

                                <label>Travellers</label>

                                <input
                                    type="number"
                                    defaultValue={1}
                                />

                            </div>

                            <div className="field">

                                <label>Journey of Interest</label>

                                <select>

                                    <option>Select One</option>

                                    <option>Retreat</option>

                                    <option>Teacher Training</option>

                                    <option>Private Journey</option>

                                </select>

                            </div>

                            <div className="field">

                                <label>Preferred Start</label>

                                <input
                                    type="date"
                                />

                            </div>

                        </div>

                        <div className="field textarea">

                            <label>
                                What draws you here?
                            </label>

                            <textarea
                                rows="4"
                                placeholder="A few lines about your practice, intentions or questions."
                            ></textarea>

                        </div>

                        <div className="formBottom">

                            <p>

                                By enquiring you agree to receive a personal
                                reply. We never add you to marketing lists.

                            </p>

                            <button>

                                Send Enquiry →

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    );

}