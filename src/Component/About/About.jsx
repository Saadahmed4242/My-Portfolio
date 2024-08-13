import React from 'react'
import "./About.css"
import pic from "../../assets/pic.svg"
import github from "../../assets/github.png"
import gmail from "../../assets/gmail.png"
import insta from "../../assets/insta.png"
export default function About() {
  return (
    <>
    <div className="About-page">
         <div className="About">
            <div className="About-image">
                <img className='A-image' src={pic} alt="" />
            </div>
            <div className="About-content">
            <h2>FrontEnd Web Developer</h2>
                <p className='A-content'>As a frontend developer specializing in HTML, CSS, JavaScript, and React, I craft dynamic and visually captivating websites that deliver exceptional user experiences. My expertise lies in translating design concepts into responsive, interactive interfaces that not only look stunning but also perform seamlessly across all devices. </p>
                <div className="Social-icons">
                  <a href="https://github.com/Saadahmed4242" target='_blank'><img src={github} alt="" className='Social-links' /></a>
                  <a href="mailto:saadak671@gmail.com" target='_blank'><img src={gmail} alt="" className='Social-links' /></a>
                  <a href="https://instagram.com/saad0ahmed0" target='_blank'><img src={insta} alt="" className='Social-links' /></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
