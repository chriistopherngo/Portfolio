import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ title, description, img, githubCode, liveSite }) => {
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
            </div>

            <div className="project_links">
              <div className="project_links_div">
                <a href={githubCode} target="_blank">
                  Code
                </a>
                <a href={liveSite} target="_blank">
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
