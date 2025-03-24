import React from "react";
import "./Projects.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = ({setNavbarVisible}) => {
  return (
    <div className="wrapper" id="projectS">
      <div id="cheating">
        <SectionHeading preh2="My work" heading="Projects." />
      </div>

      <div className="project_container">
      <ProjectItem
          title="Fake Reddit"
          description="Forum web application, inspired by Reddit. This platform allows users to create topic-specific categories, make posts, and like posts from others. Users must sign up and log in to access all features. Part of the IDG 2001 Cloud Technologies course."
          insideProjectDesc = "This platform allows users to create topic-specific categories, make posts, and like posts from others. Users must sign up and log in to access all features. The application was developed using a MySQL database, Flask for the API, and React for the frontend. All components are deployed in Docker containers via Docker Compose on a Chameleon Cloud virtual machine."
          img="/img/fakereddit.png"
          technologies={["/img/react.svg", "/img/python.png", "/img/mysql.png", "/img/chameleoncloud.png", "/img/docker.png"]}
          githubCode="https://github.com/AndrChr0/cloud-assignment-2"
          liveSite="http://129.114.27.140/"
          workFormat="/img/group.png"
          insideProjectImg = {['/img/fakereddit.png','/img/fakereddit_1.png', '/img/fakereddit_2.png', '/img/fakereddit_3.png', '/img/fakereddit_4.png', '/img/fakereddit_5.png', '/img/fakereddit_6.png']}
          contributors = {['Ola Nikolai Skjeret', 'Andreas Christiansen']}
          setNavbarVisible={setNavbarVisible}
        />
        <ProjectItem
          title="Fully Accessible Website"
          description="As part of the IDG2012 - Web Accessibility, Usability and Ethics course, I developed a fully accessible (concept) website for my mom's music lesson school. This website is accessible for users with visual, hearing and mobility impairments."
          insideProjectDesc = "As part of the IDG2012 - Web Accessibility, Usability and Ethics course, I developed a fully accessible (concept) website for my mom's music lesson school. This website is accessible for users with visual, hearing and mobility impairments."
          img="/img/lisas.png"
          technologies={["/img/html.png", "/img/css.webp", "/img/javascript.png"]}
          githubCode="https://github.com/chriistopherngo/course-project"
          liveSite="https://chriistopherngo.github.io/course-project/"
          workFormat="/img/solo.png"
          insideProjectImg = {[]}
          setNavbarVisible={setNavbarVisible}
        />
        <ProjectItem
          title="Scrollytelling Project"
          description="The website is based on the United Nations' Sustainable Development Goal 7, which is to ensure access to affordable, reliable, sustainable, and modern energy for all. Through an engaging and interactive storytelling format, the project aims to raise awareness about the importance of clean and affordable energy and inspire people to take action towards achieving this goal."
          insideProjectDesc ="The website is based on the United Nations' Sustainable Development Goal 7, which is to ensure access to affordable, reliable, sustainable, and modern energy for all. Through an engaging and interactive storytelling format, the project aims to raise awareness about the importance of clean and affordable energy and inspire people to take action towards achieving this goal."
          img="/img/scrollytelling.png"
          technologies={["/img/html.png", "/img/sass.png", "/img/javascript.png"]}
          githubCode="https://github.com/AdvancedCSS2023/assignment-3--scrollytelling-group_2"
          liveSite="https://advancedcss2023.github.io/assignment-3--scrollytelling-group_2/"
          workFormat="/img/group.png"
          insideProjectImg ={[]}
          contributors = {['Shnizana Korolova', 'Edgar Dahl']}
          setNavbarVisible={setNavbarVisible}
        />
        <ProjectItem
          title="The SUPER Assessor"
          description="Exam project in IDG2100 - Full-stack web development. The SUPER Assessor Interface empowers educators to create and manage assessment methods through an interactive card game. It facilitates collaboration by allowing educators to save, review, and share their assessment schemes for feedback. Administrators can manage content and user accounts through a dashboard, streamlining the assessment process and boosting creativity in education."
          insideProjectDesc ="Exam project in IDG2100 - Full-stack web development. The SUPER Assessor Interface empowers educators to create and manage assessment methods through an interactive card game. It facilitates collaboration by allowing educators to save, review, and share their assessment schemes for feedback. Administrators can manage content and user accounts through a dashboard, streamlining the assessment process and boosting creativity in education."
          img="/img/thesuperassessor.png"
          technologies={["/img/mongodb.webp", "/img/express.png", "/img/react.svg", "/img/nodejs.webp",]}
          githubCode="https://github.com/ntnu-design/idg2100-2024-exam-achrolansk"
          workFormat="/img/group.png"
          insideProjectImg ={[]}
          contributors = {['Andreas Christiansen', 'Ola Nikolai Skjeret']}
          setNavbarVisible={setNavbarVisible}
         
        />
        <ProjectItem
          title="Sustainability Diary"
          description="The Digital Sustainability Diary helps students engage with the UN's 17 sustainability goals by journaling their daily activities and reflections. It encourages students to explore how their actions align with these goals, promoting personal growth and a deeper understanding of sustainability. Teachers are the ones to make the tasks. Part of the IDG2671 - Web Project course."
          insideProjectDesc="The Digital Sustainability Diary helps students engage with the UN's 17 sustainability goals by journaling their daily activities and reflections. It encourages students to explore how their actions align with these goals, promoting personal growth and a deeper understanding of sustainability. Teachers are the ones to make the tasks. Part of the IDG2671 - Web Project course."
          img="/img/journals.png"
          technologies={["/img/mongodb.webp", "/img/express.png", "/img/react.svg", "/img/nodejs.webp", "/img/docker.png", "/img/dockercompose.png"]}
          githubCode="https://github.com/Ninejar/cautious-adventure"
          liveSite="https://team1.sustainability.it.ntnu.no/"
          workFormat="/img/group.png"
          insideProjectImg ={[]}
          contributors = {['Ola Nikolai Skjeret', 'Jørgen Nonstad', 'Solveig Ranøien Engen']}
          setNavbarVisible={setNavbarVisible}
        />
        <ProjectItem
          title="CSS Game"
          description="You're a mouse on a mission, slipping past cats as you navigate your way to the cheese. Made through the course IDG1293 - Advanced CSS."
          insideProjectDesc ="You're a mouse on a mission, slipping past cats as you navigate your way to the cheese. Made through the course IDG1293 - Advanced CSS."
          img="/img/mousegame.png"
          technologies={["/img/html.png", "/img/sass.png"]}
          githubCode="https://github.com/AdvancedCSS2023/assignment-2---css-games-group_2"
          liveSite="https://advancedcss2023.github.io/assignment-2---css-games-group_2/"
          workFormat="/img/group.png"
          insideProjectImg ={[]}
          contributors = {['Shnizana Korolova', 'Edgar Dahl']}
          setNavbarVisible={setNavbarVisible}
        />
      </div>
    </div>
  );
};

export default Projects;
