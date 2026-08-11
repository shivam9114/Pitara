import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* Top */}

        <div className="footerTop">

          <div className="newsletter">

            <span className="footerTag">
              II Quarterly Dispatch
            </span>

            <h2>

              Four letters a year.

              <br />

              <em>Nothing more.</em>

            </h2>

            <form>

              <input
                type="email"
                placeholder="Your email"
              />

              <button>

                Subscribe →

              </button>

            </form>

          </div>

          <div className="footerLinks">

            <div>

              <h4>Navigate</h4>

              <Link to="/retreats">Retreats</Link>

              <Link to="/teacher-training">
                Teacher Training
              </Link>

              <Link to="/philosophy">
                Philosophy
              </Link>

              <Link to="/journal">
                Journal
              </Link>

            </div>

            <div>

              <h4>Elsewhere</h4>

              <a href="#">Instagram</a>

              <a href="#">YouTube</a>

              <a href="#">WhatsApp</a>

            </div>

          </div>

        </div>

        <div className="footerDivider"></div>

        {/* Bottom */}

        <div className="footerBottom">

          <div>

            <small>Studio</small>

            <p>

              Tapovan · Rishikesh

              <br />

              Uttarakhand 249137, India

            </p>

          </div>

          <div className="copyright">

            <small>

              © 2011–2026 SATTVA YĀTRĀ

              <br />

              Yoga Alliance RYS 200 · 300 · 500

            </small>

          </div>

        </div>

      </div>

      {/* Huge Brand */}

      <div className="footerBrand">

        <span className="brandWhite">

          Sattva

        </span>

        <span className="brandOrange">

          Yātrā

        </span>

      </div>

    </footer>
  );
}