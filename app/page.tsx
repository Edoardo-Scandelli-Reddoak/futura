import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import HorizontalShowcase from "./components/sections/HorizontalShowcase";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import NavyBand from "./components/sections/NavyBand";
import Certifications from "./components/sections/Certifications";
import Values from "./components/sections/Values";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <HorizontalShowcase />
      <FeaturedProjects />
      <NavyBand />
      <Certifications />
      <Values />
      <CTA />
    </>
  );
}
