import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Skills from "./components/skills/Skills.jsx";
import ContactForm from "./components/contact/ContactForm.jsx";
import Pied from "./components/Pied/Pied.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <ContactForm/>
      <Pied/>
      
      
    </div>
  );
};

export default App;
