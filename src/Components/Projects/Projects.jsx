import React from "react";
import "./Projects.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  return (
     <div className="wrapper" id="projectS">
        <SectionHeading preh2="My work" heading="Projects." />

        <div className="project_container">
            <ProjectItem title="Fully Accessible Website" description="As part of the IDG2012 - Web Accessibility, Usability and Ethics course, I developed a fully accessible website for my mom's music lesson school. This website is accessible for users with visual, hearing and mobility impairments." img="src/assets/img/lisas.png" githubCode="https://github.com/chriistopherngo/course-project" liveSite="https://chriistopherngo.github.io/course-project/"/>
            <ProjectItem title="Scrollytelling Project" description="The website is based on the United Nations' Sustainable Development Goal 7, which is to ensure access to affordable, reliable, sustainable, and modern energy for all. Through an engaging and interactive storytelling format, the project aims to raise awareness about the importance of clean and affordable energy and inspire people to take action towards achieving this goal." img="src/assets/img/scrollytelling.png" githubCode="https://github.com/AdvancedCSS2023/assignment-3--scrollytelling-group_2" liveSite="https://advancedcss2023.github.io/assignment-3--scrollytelling-group_2/"/>
            <ProjectItem title="The SUPER Assessor" description="Exam project in IDG2100 - Full-stack web development. The SUPER Assessor Interface empowers educators to create and manage assessment methods through an interactive card game. It facilitates collaboration by allowing educators to save, review, and share their assessment schemes for feedback. Administrators can manage content and user accounts through a dashboard, streamlining the assessment process and boosting creativity in education." img="src/assets/img/thesuperassessor.png" githubCode="https://github.com/ntnu-design/idg2100-2024-exam-achrolansk" liveSite/>
            <ProjectItem title="Sustainability Diary" description="The Digital Sustainability Diary helps students engage with the UN's 17 sustainability goals by journaling their daily activities and reflections. It encourages students to explore how their actions align with these goals, promoting personal growth and a deeper understanding of sustainability. Teachers are the ones to make the tasks. Part of the IDG2671 - Web Project course." img="src/assets/img/journals.png" githubCode="https://github.com/Ninejar/cautious-adventure" liveSite="https://team1.sustainability.it.ntnu.no/"/>
            <ProjectItem title="CSS Game" description="You're a mouse on a mission, slipping past cats as you navigate your way to the cheese. Made through the course IDG1293 - Advanced CSS." img="src/assets/img/mousegame.png" githubCode="https://github.com/AdvancedCSS2023/assignment-2---css-games-group_2" liveSite="https://advancedcss2023.github.io/assignment-2---css-games-group_2/"/>


        </div>
     </div>

);
};

export default Projects;