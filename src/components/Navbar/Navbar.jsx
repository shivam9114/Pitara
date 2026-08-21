import { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../../assets/img/pitara.png";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="navbar-container">

                <a href="/" className="logo">
                    <img
                        src={logo}
                        alt="PITARA"
                    />
                </a>

                <nav>

                    <a href="/">Home</a>

                    <a href="/about">About Us</a>

                    <a href="/services">Services</a>

                    {/* <a href="/philosophy">Philosophy</a> */}

                    <a href="/contact">Contact</a>

                </nav>

                <a href="/contact" className="btnJourney">
                    Begin Journey
                    <span>→</span>
                </a>

            </div>

        </header>

    );
}