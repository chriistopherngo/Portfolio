import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="wrapper">
      <div className="intro_container">
        <div className="intro_text">
          <h1>
            Hi, I'm <span class="gradient_name">Christopher Ngo</span>.
          </h1>
          {/* <p>Web Development Student at NTNU Gjøvik.</p> */}
          <p> I'm a <span className="gradient_name">Full-stack Web Developer</span> based in Gjøvik, Norway. I turn ideas into real applications.</p>
        </div>
        {/* <div className="intro_image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            // src="/img/me3.png"
            alt="Me"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
