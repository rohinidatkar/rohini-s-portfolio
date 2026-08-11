import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <SoftSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;