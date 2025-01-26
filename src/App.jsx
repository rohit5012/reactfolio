import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Fields from "./components/Fields";
import SoftSkills from "./components/SoftSkills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <SocialLinks />
        <Fields />
        <SoftSkills />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
