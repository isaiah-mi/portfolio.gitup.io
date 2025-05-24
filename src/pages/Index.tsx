
import { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activeSection={activeSection} onSetActive={handleSetActive} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
