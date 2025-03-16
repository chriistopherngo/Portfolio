import React, { useEffect, useState } from "react";
import "./Intro.css";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); 

  return (
    <div className="wrapper" id="top">
      {!isMobile && (
        <>
          <div className="intro_container">
            <div className="intro_text">
              <h1>
                Hi, I'm <span className="gradient_name">Christopher Ngo</span>.
              </h1>
              <p>
                I'm a <span className="gradient_name">Full-stack Web Developer</span> based in Gjøvik, Norway. I turn ideas into real applications.
              </p>
            </div>
            <div className="intro_image_outer">
              <div className="intro_image_inner">
                <img src="/img/me.jpg" alt="Me" className="image_me" />
              </div>
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <>
          <div className="intro_container">
            <div className="intro_text">
              <h1>
                Hi, I'm <span className="gradient_name">Christopher Ngo</span>.
              </h1>
              <div className="intro_image_outer mobile">
                <div className="intro_image_inner">
                  <img src="/img/me.jpg" alt="Me" className="image_me " />
                </div>
              </div>
            </div>
            <p className="intro_text_mobile">
              I'm a <span className="gradient_name">Full-stack Web Developer</span> based in Gjøvik, Norway. I turn ideas into real applications.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Intro;
