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
              "/img/js.png",
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
            item_names={["CSS", "Tailwind", "React", "Vite", "Sass", "Vue"]}
            item_images={[
              "//img/css.webp",
              "/img/tailwind.png",
              "/img/react.svg",
              "/img/vite.png",
              "/img/sass.png",
              "/img/vue.webp",
            ]}
            item_links={[
              "https://developer.mozilla.org/en-US/docs/Web/CSS",
              "https://tailwindcss.com/",
              "https://reactjs.org/",
              "https://vitejs.dev/",
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
          <Card title="Infrastructure" item_names={["GitHub", "Docker", "Vercel", "Railway"]} item_images={[
            "/img/github.png",
            "/img/docker.png",
            "/img/vercel.svg",
            "/img/railway.svg",
          ]} 

          item_links={[
            "https://github.com/",
            "https://www.docker.com/",
            "https://vercel.com/",
            "https://railway.app/",
          ]}

          />
          <Card title="Tools" item_names={["Visual Studio Code", "Figma", "MySQLWorkbench", "Terminal/CLI", "Git"]} item_images={[
            "/img/vscode.png",  
            "/img/figma.png",
            "/img/mysqlworkbench.webp",
            "/img/terminal.png",
            "/img/git.png",
  
          ]}
          
          item_links={[
            "https://code.visualstudio.com/",
            "https://www.figma.com/",
            "https://www.mysql.com/products/workbench/",
            "https://en.wikipedia.org/wiki/Command-line_interface",
            "https://git-scm.com/",
          ]}/>
        </div>
    </div>
  );
};

export default Skills;
