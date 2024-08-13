import React from 'react'
import "./project.css"
import pic from "../../assets/Capture1.png"
export default function Project() {
  return (
    <>
    <div className="project-page">
        <div className="project-heading">
        <h2 className='p-heading'>Project Showcase</h2>
        </div>
        <div className="project1">
            <div className="project-image">
                <img src={pic} alt="" className='p-image' />
            </div>
            <div className="project-content">
                <h4>GoalVista</h4>
               <p>Welcome to GoalVista, your premier destination for everything football! Our website is dedicated to bringing you the latest and most compelling football-related content, from real-time updates and breaking news to in-depth analyses and match highlights. Whether you're a devoted fan looking to stay on top of the latest scores and transfers or simply want to immerse yourself in the beautiful game, GoalVista has you covered.</p>
               <a href="https://github.com/Saadahmed4242/React-first-App" target='_blank'><button>Project link</button></a>
            </div>
        </div>
        <div className="project2">
            <div className="project-image">
                <img src={pic} alt="" className='p-image' />
            </div>
            <div className="project-content">
                <h4>GoalVista</h4>
               <p>Welcome to GoalVista, your premier destination for everything football! Our website is dedicated to bringing you the latest and most compelling football-related content, from real-time updates and breaking news to in-depth analyses and match highlights. Whether you're a devoted fan looking to stay on top of the latest scores and transfers or simply want to immerse yourself in the beautiful game, GoalVista has you covered.</p>
               <a href="https://github.com/Saadahmed4242/React-first-App"  target='_blank'><button>Project link</button></a>
            </div>
        </div>
    </div>
    </>
  )
}
