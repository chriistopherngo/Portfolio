import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({
  time,
  title,
  name,
  img,
  description = [],
  urlLink,
}) => {
  return (
    <div className="wrapper_experience">
      <div className="experience_item">
        <div className="experience_timeline">
          <img src={img} alt="" />
        </div>

        <div className="experience_details_container">
          <span className="experience_time">{time}</span>
          <div className="experience_details">
            <h3>{title}</h3>
            <h4>{name}</h4>

            <ul>
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}

              {urlLink && (
                <li>
                  <a target="_blank" href={urlLink}>
                    Link to Website
                  </a>
                </li>
              )}
            </ul>
            {/* <div className="gradient_shadowbox">hello</div> */}
          </div>
          <div className="gradient_shadowbox"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
