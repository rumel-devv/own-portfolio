import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SkillsSection from "./skill/page";
import ProjectsPage from "./projects/page";
import About from "./about/page";
import ContactPage from "./contact/page";
import Education from "./education/page";

export default function Home() {
  return (
    <>
      {/* ✅ MUST ADD ID WRAPPER */}

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>

       <section id="skills">
        <SkillsSection />
      </section>

       <section id="education">
        <Education/>
      </section>
      
      <section id="contact">
        <ContactPage />
      </section>

      

      <Footer />
    </>
  );
}