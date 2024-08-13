import React from 'react'
import "./Skill.css"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import skill from "../../assets/skill.png"

export default function Skill() {
  return (
    <>
        <div className="Skill-page">
        <div className="Skill-item-h">
          <div className="sh-image">
            <img src={skill} alt="" className='s-image'/>
          </div>
          <div className="skill-heading">
            <h1>Skills Overview</h1>
          </div>
        </div>
        <div className="Skill-item">
          <div className="sk-item" >
            <div className="sk-item-logo">
              <img src={html} alt="" className='s-image' />
            </div>
            <div className="sk-item-content">
              <h4>HTML</h4>
              <p>1 Project</p>
            </div>
          </div>
          <div className="sk-item-time">
            <h5>1-Month</h5>
            <p>Experience</p>
          </div>
        </div>
        <div className="Skill-item">
          <div className="sk-item" >
            <div className="sk-item-logo">
              <img src={css} alt="" className='s-image' />
            </div>
            <div className="sk-item-content">
              <h4>CSS</h4>
              <p>1 Project</p>
            </div>
          </div>
          <div className="sk-item-time">
            <h5>1-Month</h5>
            <p>Experience</p>
          </div>
        </div>
        <div className="Skill-item">
          <div className="sk-item" >
            <div className="sk-item-logo">
              <img src={js} alt="" className='s-image' />
            </div>
            <div className="sk-item-content">
              <h4>JS</h4>
              <p>1 Project</p>
            </div>
          </div>
          <div className="sk-item-time">
            <h5>1-Month</h5>
            <p>Experience</p>
          </div>
        </div>
        <div className="Skill-item">
          <div className="sk-item" >
            <div className="sk-item-logo">
              <img src={react} alt="" className='s-image' />
            </div>
            <div className="sk-item-content">
              <h4>REACT</h4>
              <p>1 Project</p>
            </div>
          </div>
          <div className="sk-item-time">
            <h5>1-Month</h5>
            <p>Experience</p>
          </div>
        </div>
      </div>
    </>
  )
}
