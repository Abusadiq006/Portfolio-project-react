import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myphoto from '../../assets/myphoto.jpg'

const About = () => {
  return (
    <div id='about' className="About">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="Decorative theme pattern" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={myphoto} alt="Farmer Abusadiq's profile photo" className="myphoto"/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced front-end Developer with over a decade professional expertise in the field.
                         Throughout my career, I have had the privilege of collaborating with prestigious organizations,
                          contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected
                         in my extensive experience but also in the enthusiasm and dedication i bring to each project.
                         Throughout my career, I have had the privilege of collaborating with prestigious organizations, 
                         contributing to their success and growth.</p>
                </div>
                <div className="about-skills">
                    <about className="about-skill"><p>Javascript</p><hr style={{width:"75%"}} /></about>
                    <about className="about-skill"><p>React.js</p><hr style={{width:"70%"}} /></about>
                    <about className="about-skill"><p>Next.js</p><hr style={{width:"65%"}} /></about>
                    <about className="about-skill"><p>Visual Assistance</p><hr style={{width:"75%"}} /></about>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About;