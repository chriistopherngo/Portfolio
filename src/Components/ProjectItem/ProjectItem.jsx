import React, { useState, useEffect } from "react";
import "./ProjectItem.css";
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const ProjectItem = ({
  title,
  description,
  img,
  technologies = [],
  githubCode,
  liveSite,
  workFormat,
  insideProjectDesc,
  insideProjectImg = [],
  contributors = [],
  setNavbarVisible,
  processHeadings = [],
  processDescriptions = [],
  processImages = [],
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [modalContainer, setModalContainer] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalOpacity, setModalOpacity] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (modal === false ) {
      navigate("/");
      setNavbarVisible(true);
    }
  }, [modal, navigate, setNavbarVisible]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    setModalOpacity(0);
    const timer = setTimeout(() => {
      setModalOpacity(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ifUserPressEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", ifUserPressEsc);
    
    return () => {
      window.removeEventListener("keydown", ifUserPressEsc);
    };
  }, []);


  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

  const openProject = () => {
    setModalContainer(!modalContainer);
    setModal(!modal);
    document.body.style.overflow = "hidden";
    setNavbarVisible(false);
  };

  const closeModal = () => {
    setModalContainer(false);
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="wrapper_experience">
        <div id={`${title.toLowerCase().replace(/\s+/g, "-")}`} className="project_item">
          <div className="project_details_container">
            <div className="project_image">
              <img src={img} alt="" />
            </div>
            <div className="project_details">
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies_used">
                  {technologies.map((tech, index) => {
                    const techName = tech
                      .split("/")
                      .pop()
                      .replace(/\.(png|webp|svg)$/, "");

                    return (
                      <div key={index} className="tech_item">
                        <img
                          src={tech}
                          alt={techName}
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={handleMouseOut}
                        />
                        {hoverIndex === index && (
                          <div className="tech_hover">{techName}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link to={`/#${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="explore_project">
                <button onClick={() => openProject()}>
                  <div>
                    <span className="gradient_name">
                      Explore <FaArrowRightLong />
                    </span>
                  </div>
                </button>
              </div>
              </Link>
              <div className="project_links">
                <div className="project_links_div">
                  <div className="githubCode">
                    <a
                      href={githubCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                      <img src="/img/github.png" alt="" />
                    </a>
                  </div>
                  <div className="githubCode">
                    {liveSite ? (
                      <a
                        href={liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live <img src="/img/livesite.png" alt="" />
                      </a>
                    ) : (
                      "Live site not available."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalContainer && <div className="modal_container"></div>}

      <div
        className={`modal ${modal ? "modal-active" : "modal-unactive"}`}
        style={{ opacity: modalOpacity }}
      >
        <div className="inner_modal">
          <div className="modal_close">
            <IoClose color="black" onClick={() => closeModal()} />
          </div>
          <div className="modal_content">
            <div className="figure">
              <figure
                className={`${workFormat === "/img/solo.png" ? "solo" : ""} `}
              >
                <img
                  className={`${workFormat === "/img/solo.png" ? "solo" : ""} `}
                  src={workFormat}
                  alt=""
                />
                <figcaption>
                  {workFormat
                    .split("/")
                    .pop()
                    .replace(/\.(png|webp|svg)$/, "")}
                </figcaption>
              </figure>
            </div>

            <div className="innerProject_details">
              <h4>{title}</h4>
              <div className="content">
                <h5>Project description</h5>
                <p className="max-w-[80ch]">{insideProjectDesc}</p>

                <h5>Screenshots (swipe)</h5>
              <div className="screenshots_container">
                <div
                  className={`screenshots ${
                    insideProjectImg.length === 0 ? "with_images" : ""
                  }`}
                >
                  {insideProjectImg.length > 0 ? (
                    insideProjectImg.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Project image ${index + 1}`}
                      />
                    ))
                  ) : (
                    <p>No screenshots found.</p>
                  )}
                </div>
              </div>
                <h5>Technologies used</h5>
                <div className="technologies_used">
                  {technologies.map((tech, index) => {
                    const techName = tech
                      .split("/")
                      .pop()
                      .replace(/\.(png|webp|svg)$/, "");

                    return (
                      <div key={index} className="tech_item">
                        <img
                          src={tech}
                          alt={techName}
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={handleMouseOut}
                        />
                        {hoverIndex === index && (
                          <div className="tech_hover">{techName}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {workFormat === "/img/group.png" ? <h5>Contributors</h5> : null}
                <ul className="contributors">
                  {contributors.length > 0
                    ? contributors.map((contributor, index) => (
                        <li key={index}>{contributor}</li>
                      ))
                    : null}
                </ul>
              </div>
              
              <h5>Github code and live site</h5>
              <div className="linkane">
                <div className="project_links_div">
                  <div className="githubCode">
                    <a
                      href={githubCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                      <img src="/img/github.png" alt="" />
                    </a>
                  </div>
                  <div className="githubCode">
                    {liveSite ? (
                      <a
                        href={liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live <img src="/img/livesite.png" alt="" />
                      </a>
                    ) : (
                      "Live site not available."
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-[2rem]">
                <h5>Process</h5>

                {processHeadings.map((heading, index) => (
                  <div 
                    className={`process_container ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} 
                    key={index}
                  >
                    <div className="process_text">
                      <h6>{heading}</h6>
                      <p>{processDescriptions[index]}</p>
                    </div>
                    
                    <div className="process_images">
                      {processImages[index] && (
                        <img 
                          src={processImages[index]} 
                          alt={`Project: ${heading}`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
