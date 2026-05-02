
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SkillsSection from "./skill/page";
import ProjectsPage from "./projects/page";
import About from "./about/page";
import ContactPage from "./contact/page";




export default function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <ProjectsPage/>
    <SkillsSection/>
    <ContactPage/>
    <Footer/>
    </>
  );
}
