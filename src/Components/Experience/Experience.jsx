import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const Experience = () => {
  return (
    <div className="wrapper" id="experienceS">
      <SectionHeading preh2="What I have done" heading="Experience." />
      <div className="experience_container">
        <ExperienceItem
          time="Aug 2024 – Oct 2024"
          title="Internship"
          name="Kodeo AS"
          img="/img/kodeo.jpeg"
          description={[
            "Developed functionalities for client's website",
            "Introduced to Laravel",
            "Full stack development",
          ]}
        />
        <ExperienceItem
          time="Fall 2023"
          title="Teaching Assistant"
          name="NTNU Gjøvik (IDG1292 Web coding)"
          img="/img/ntnu.png"
          description={[
            "Teaching assistent in the labs",
            "Focus on HTML, CSS, responsive design, validating code etc.",
            "Helping and grading student's assignments",
          ]}
        />
        <ExperienceItem
          time="Aug 2023 – Aug 2024"
          title="Member of Web Committee"
          name="Darling Linjeforening"
          img="/img/darling.png"
          description={[
            "Contributed to the development of the website",
            "Maintained the website",
            "Worked with the design and layout",
          ]}
          urlLink="https://www.darlinglinjeforening.org/"
        />
        <ExperienceItem
          time="Aug 2022 – Jun 2025"
          title="Bachelor's Degree in Web Development"
          name="NTNU Gjøvik"
          img="/img/ntnu.png"
          description={[
            "Frontend and backend development",
            "User experience and design",
            "Project management",
            "Web security",
            "Accessibility",
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
