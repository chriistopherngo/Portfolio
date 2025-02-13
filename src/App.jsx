import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
    <Routes>
      <Route path=":/projectName" element={<Projects />}></Route>
    </Routes>    
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
