import JourneyHero from "../../components/JourneyHero/JourneyHero";
import Marquee from "../../components/Marquee/Marquee";
import Principles from "../../components/Principles/Principles";
import Stats from "../../components/Stats/Stats";
import Retreats from "../../components/Retreats/Retreats";
import TeacherTraining from "../../components/TeacherTraining/TeacherTraining";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection"; 
import Footer from "../../components/Footer/Footer"; 

export default function Home() {
  return (
    <>
      <JourneyHero />
      <Marquee />
      <Principles />
      <Stats />
      <Retreats />
      <TeacherTraining />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}