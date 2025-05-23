import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/svg/github.svg";
import mailtoIcon from "../../assets/svg/mailto.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>© 2025 Christopher Ngo. All rights reserved.</div>
      {/* <div>Built with <img src="/img/react.svg" alt="" /></div> */}
      <div className="contact_container">
      <a href="https://www.linkedin.com/in/christopher-ngo-763988265/" target="_blank">
          <img className="githubIcon" src={"/img/linkedin.png"} alt="" />
        </a>
        <a href="https://github.com/chriistopherngo" target="_blank">
          <img className="githubIcon" src={githubIcon} alt="" />
        </a>
        <a href="mailto:ngo.chris@hotmail.com" target="_blank">
          <img className="githubIcon" src={mailtoIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
