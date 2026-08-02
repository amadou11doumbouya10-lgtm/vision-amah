import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import QuiSuisJe from "@/components/QuiSuisJe";
import Processus from "@/components/Processus";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      {/* Après la proposition de valeur, on humanise : qui est derrière Vision
          Amah, puis comment se déroule concrètement un projet. */}
      <QuiSuisJe />
      <Processus />
      <Projects />
      {/* Placé juste avant le contact : le prospect vient de voir les réalisations,
          la preuve sociale arrive au moment où il décide de prendre contact.
          Ne s'affiche que si des témoignages réels ont été renseignés. */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
