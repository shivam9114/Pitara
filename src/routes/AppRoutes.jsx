import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ItineraryDetails from "../pages/ItineraryDetails/ItineraryDetails";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/itineraries/:slug"
          element={<ItineraryDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}