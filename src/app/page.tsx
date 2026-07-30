import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      {/* Placé juste avant le contact : le prospect vient de voir les réalisations,
          la preuve sociale arrive au moment où il décide de prendre contact.
          Ne s'affiche que si des témoignages réels ont été renseignés. */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
