import { useEffect, useState } from "react";
import "./Navbar.css";

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

                <div className="logo">
                    Sattva <span>Yātrā</span>
                </div>

                <nav>

                     <a href="/">Home</a>

                    <a href="/about">About Us</a>

                    <a href="/services">Services</a>

                    {/* <a href="/philosophy">Philosophy</a> */}

               

               

                    <a href="/contact">Contact</a>

                </nav>

                <a href="#" className="btnJourney">

                    Begin Journey

                    <span>→</span>

                </a>

            </div>

        </header>

    );

}