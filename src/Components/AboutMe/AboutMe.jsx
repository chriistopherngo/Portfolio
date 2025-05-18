import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <>
    <div className="wrapper" id="about">
        <SectionHeading preh2="Who I am" heading="About me." />
        <p className='about-me-text'>
            I am a <span className="gradient_name">Fullstack Web Developer</span> from Sandnes. I am currently studying Web Development at NTNU Gjøvik. Before starting this bachelor's, I had some experience coding in HTML, CSS, and JavaScript from High School. Since then, I have gained a solid understanding, as well as deepened my knowledge within web technologies.  
        </p>
    </div>
    </>
  )
}

export default AboutMe