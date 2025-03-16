import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <> 
      <Navbar />
      <main>
        <Intro />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
