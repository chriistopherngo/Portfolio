import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TypingComponent from './TypingComponent/TypingComponent'

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
                <TypingComponent/>
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
                <Link
                  to=""
                  className={activeLink === "dashboard" ? "active" : ""}
                >
                  Link 1
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to=""
                  className={activeLink === "manageusers" ? "active" : ""}
                >
                  Link 2
                </Link>
              </li>
            </>
            <>
              <li onClick={toggleMenu}>
                <Link
                  to=""
                  className={activeLink === "maingame" ? "active" : ""}
                >
                  Link 3
                </Link>
              </li>
            </>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
