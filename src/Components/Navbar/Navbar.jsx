import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TypingComponent from "../TypingComponent/TypingComponent";
import githubIcon from "../../assets/svg/github.svg";
import mailtoIcon from "../../assets/svg/mailto.svg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/dashboard/manageusers")) {
      setActiveLink("manageusers");
    } else if (path.startsWith("/dashboard")) {
      setActiveLink("dashboard");
    } else if (path.startsWith("/main-game")) {
      setActiveLink("maingame");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
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
              {/* <li onClick={toggleMenu}>
                <Link
                  to=""
                  className={activeLink === "manageusers" ? "active" : ""}
                >
                  Skills
                </Link>
              </li> */}

              <li onClick={toggleMenu}>
                <a href="#abouT">About</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#experienceS">Experience</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#projectS">Projects</a>
              </li>
              <li className="navbar_divider" onClick={toggleMenu}></li>
            </>
            <li>
              <ul className="contact_container">
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
