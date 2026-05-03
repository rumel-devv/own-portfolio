import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SkillsSection from "./(skills)/skill/page";

import About from "./(about)/about/page";
import ContactPage from "./(contact)/contact/page";
import Education from "./(education)/education/page";
import ProjectsPage from "./(project)/projects/page";

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
        <ProjectsPage/>
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