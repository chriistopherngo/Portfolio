import React, { useState } from "react";
import "./ProjectItem.css";

const ProjectItem = ({
  title,
  description,
  img,
  technologies = [],
  githubCode,
  liveSite,
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

  return (
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
  );
};

export default ProjectItem;
