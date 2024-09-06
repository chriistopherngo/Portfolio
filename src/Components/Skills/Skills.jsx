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
              "src/assets/img/html.png",
              "src/assets/img/js.png",
              "src/assets/img/php.png",
              "src/assets/img/python.png",
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
              "/src/assets/img/css.webp",
              "src/assets/img/tailwind.png",
              "src/assets/img/react.svg",
              "src/assets/img/vite.png",
              "src/assets/img/sass.png",
              "src/assets/img/vue.webp",
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
            "src/assets/img/node.webp",
            "src/assets/img/express.png",
            "src/assets/img/laravel.png",
          ]} 
          item_links={[
            "https://nodejs.org/",
            "https://expressjs.com/",
            "https://laravel.com/",
          ]
          }

          />
          <Card title="Databases" item_names={["MySQL", "MongoDB", "", "", ""]} item_images={[
            "src/assets/img/mysql.png",
            "src/assets/img/mongodb.webp",
          ]} 
          item_links={[
            "https://www.mysql.com/",
            "https://www.mongodb.com/",
          ]}
          />
          <Card title="Infrastructure" item_names={["GitHub", "Docker", "Vercel", "Railway"]} item_images={[
            "src/assets/img/github.png",
            "src/assets/img/docker.png",
            "src/assets/img/vercel.svg",
            "src/assets/img/railway.svg",
          ]} 

          item_links={[
            "https://github.com/",
            "https://www.docker.com/",
            "https://vercel.com/",
            "https://railway.app/",
          ]}

          />
          <Card title="Tools" item_names={["Visual Studio Code", "Figma", "MySQLWorkbench", "Terminal/CLI", "Git"]} item_images={[
            "src/assets/img/vscode.png",  
            "src/assets/img/figma.png",
            "src/assets/img/mysqlworkbench.webp",
            "src/assets/img/terminal.png",
            "src/assets/img/git.png",
  
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
