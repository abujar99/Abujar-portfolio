import React from 'react'
import './About.css'
import bg_img from '../../assets/bg_img.svg'

import me from '../../assets/Media.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={bg_img} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={me}  alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Abujar — as a frontend developer skilled in building responsive and user-friendly web applications using React.js. I enjoy turning ideas into clean and functional code.</p>
                    <p>I'm passionate about creating meaningful user experiences, exploring modern frameworks, and working on side projects that address real-world challenges.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>01+</h1>
                <p>YEARS OF EXPERIENCE

</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>08</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About