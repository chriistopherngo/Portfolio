import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TypingComponent from "../TypingComponent/TypingComponent";
import githubIcon from "../../assets/svg/github.svg";
import mailtoIcon from "../../assets/svg/mailto.svg";

const Navbar = ({ visible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollWithOffset = (e, targetId) => {
    e.preventDefault(); 
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85
      });
    }
  };

  return (
    <>
      <nav className={`${isScrolled ? "scrolled" : ""} ${visible ? "navbar-visible" : "navbar-hidden"}`}>
        <div className="logo">
          <ul>
            <li onClick={toggleMenu}>
              <TypingComponent />
            </li>
          </ul>
        </div>

        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul>
            <>
            <li onClick={toggleMenu}>
                <a href="#projects" onClick={(e) => handleScrollWithOffset(e, "#projects")}>Projects</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#about" onClick={(e) => handleScrollWithOffset(e, "#about")}>About Me</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#technologies" onClick={(e) => handleScrollWithOffset(e, "#technologies")}>Technologies</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#experiences" onClick={(e) => handleScrollWithOffset(e, "#experiences")}>Experience</a>
              </li>
              <li className="navbar_divider" onClick={toggleMenu}></li>
              {isScrolled && (<li onClick={toggleMenu}><a href="#top">Scroll to top</a></li>)}
            </>
            <li>
              <ul className="contact_container">
              <li onClick={toggleMenu}>
                  <a href="https://www.linkedin.com/in/christopher-ngo-763988265/" target="_blank">
                    <img className="githubIcon" src={"/img/linkedin.png"} alt="" />
                  </a>
                </li>
                <li onClick={toggleMenu}>
                  <a href="https://github.com/chriistopherngo" target="_blank">
                    <img className="githubIcon" src={githubIcon} alt="" />
                  </a>
                </li>
                <li onClick={toggleMenu}>
                  <a href="mailto:ngo.chris@hotmail.com" target="_blank">
                    <img className="githubIcon" src={mailtoIcon} alt="" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
