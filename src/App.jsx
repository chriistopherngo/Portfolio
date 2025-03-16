import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  return (
    <> 
      <Navbar visible={navbarVisible} />
      <main>
        <Intro />
        <Skills />
        <Experience />
        <Projects setNavbarVisible={setNavbarVisible}  />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
