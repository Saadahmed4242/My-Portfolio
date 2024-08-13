import React from 'react'
import "./Education.css"
import gcck from "../../assets/gcck.png"
import edu from "../../assets/edu.png"
export default function Education() {
  return (
    
        <>
        <div className="Education-page">
        <div className="Education-page-h">
          <div className="eh-image">
            <img src={edu} alt="" className='e-image'/>
          </div>
          <div className="Education-heading">
            <h1>My Education</h1>
          </div>
        </div>
        <div className="Education-item">
          <div className="ek-item" >
            <div className="ek-item-logo">
              <img src={gcck} alt="" className='e-image' />
            </div>
            <div className="ek-item-content">
              <h4>Garrison cadet college kohat</h4>
              <p>Kohat</p>
            </div>
          </div>
          <div className="ek-item-time">
            <h5>10 class</h5>
            <p>Third year in this college</p>
          </div>
        </div>
        </div>
        </>
  )
}
