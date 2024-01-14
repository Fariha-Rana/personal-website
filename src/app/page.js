import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  
  return (
    <div className="z-10 ">
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
};

export default Home;
