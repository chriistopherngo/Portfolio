import React, { useState } from "react";
import "./ProjectItem.css";
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

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
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [modalContainer, setModalContainer] = useState(false);
  const [modal, setModal] = useState(false);

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
  };

  const closeModal = () => {
    setModalContainer(false);
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="wrapper_experience">
        <div className="project_item">
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
              <div className="explore_project">
                <button onClick={() => openProject()}>
                  <div>
                    <span className="gradient_name">
                      Explore <FaArrowRightLong />
                    </span>
                  </div>
                </button>
              </div>
              <div className="project_links">
                <div className="project_links_div">
                  <div className="githubCode">
                    <a href={githubCode} target="_blank">
                      Code
                      <img src="/img/github.png" alt="" />
                    </a>
                  </div>
                  <div className="githubCode">
                    {liveSite ? (
                      <a href={liveSite} target="_blank">
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

      <div className={`modal ${modal ? "modal-active" : "modal-unactive"}`}>
        <div className="inner_modal">
          <div className="modal_close">
            <IoClose color="black" onClick={() => closeModal()} />
          </div>
          <div className="modal_content">
            <div className="figure">
              <figure
                className={`${workFormat == "/img/solo.png" ? "solo" : ""} `}
              >
                <img
                  className={`${workFormat == "/img/solo.png" ? "solo" : ""} `}
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
                <p>{insideProjectDesc}</p>
                <h5>Project process</h5>
                <p>..</p>
              </div>

              <div className="linkane">
                <div className="project_links_div">
                  <div className="githubCode">
                    <a href={githubCode} target="_blank">
                      Code
                      <img src="/img/github.png" alt="" />
                    </a>
                  </div>
                  <div className="githubCode">
                    {liveSite ? (
                      <a href={liveSite} target="_blank">
                        Live <img src="/img/livesite.png" alt="" />
                      </a>
                    ) : (
                      "Live site not available."
                    )}
                  </div>
                </div>
              </div>
              <h5>Screenshots (swipe)</h5>
              <div className="screenshots_container">
                <div className={`screenshots ${insideProjectImg.length == 0 ? "with_images" : ""}`} >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
