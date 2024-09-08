import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skills = () => {
  return (
    <div className="wrapper" id="abouT">
      <SectionHeading preh2="Introduction" heading="Overview." />
        <div className="skills_container">
          <Card
            title="Languages"
            item_names={["HTML", "JavaScript", "PHP", "Python"]}
            item_images={[
              "/img/html.png",
              "/img/javascript.png",
              "/img/php.png",
              "/img/python.png",
            ]}
            item_links={[
              "https://developer.mozilla.org/en-US/docs/Web/HTML",
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              "https://www.php.net/",
              "https://www.python.org/",
            ]}
          />
          <Card
            title="Frontend"
            item_names={["CSS", "React", "Vite", "Tailwind", "Sass", "Vue"]}
            item_images={[
              "/img/css.webp",
              "/img/react.svg",
              "/img/vite.png",
              "/img/tailwind.png",
              "/img/sass.png",
              "/img/vue.webp",
            ]}
            item_links={[
              "https://developer.mozilla.org/en-US/docs/Web/CSS",
              "https://reactjs.org/",
              "https://vitejs.dev/",
              "https://tailwindcss.com/",
              "https://sass-lang.com/",
              "https://vuejs.org/",
            ]}
          />
          <Card title="Backend" 
          item_names={["Node", "Express", "Laravel", "", ""]} 
          item_images={[
            "/img/node.webp",
            "/img/express.png",
            "/img/laravel.png",
          ]} 
          item_links={[
            "https://nodejs.org/",
            "https://expressjs.com/",
            "https://laravel.com/",
          ]
          }

          />
          <Card title="Databases" item_names={["MySQL", "MongoDB", "", "", ""]} item_images={[
            "/img/mysql.png",
            "/img/mongodb.webp",
          ]} 
          item_links={[
            "https://www.mysql.com/",
            "https://www.mongodb.com/",
          ]}
          />
          <Card title="Infrastructures" item_names={["Docker", "Chameleon Cloud", "Railway", "Vercel",]} item_images={[
            "/img/docker.png",
            "/img/chameleoncloud.png",
            "/img/railway.svg",
            "/img/vercel.svg",
          ]} 

          item_links={[
            "https://www.docker.com/",
            "https://www.chameleoncloud.org/",
            "https://railway.app/",
            "https://vercel.com/",
          ]}

          />
          <Card title="Tools" item_names={["Visual Studio Code", "Terminal/CLI", "Github", "Git", "MySQLWorkbench", "Docker Compose", "Figma"]} item_images={[
            "/img/vscode.png", 
            "/img/terminal.png",
            "/img/github.png",
            "/img/git.png", 
            "/img/mysqlworkbench.webp",
            "/img/dockercompose.png",
            "/img/figma.webp",
  
          ]}
          
          item_links={[
            "https://code.visualstudio.com/",
            "https://en.wikipedia.org/wiki/Command-line_interface",
            "https://github.com/",
            "https://git-scm.com/",
            "https://www.mysql.com/products/workbench/",
            "https://docs.docker.com/compose/",
            "https://www.figma.com/",
          ]}/>
        </div>
    </div>
  );
};

export default Skills;
