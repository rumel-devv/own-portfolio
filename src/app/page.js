import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactHome from "@/components/Contact";
import Education from "@/components/Edu";
import Footer from "@/components/Footer";
import ProjectsHome from "@/components/Project";



export default function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Education/>
    <ProjectsHome/>
    <ContactHome/>
    <Footer/>
    </>
  );
}
