import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container">
   <h1 className='nav-heading'>Saad-AK</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='nav-li'>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
            <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Skill</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Project</a>
            </li>
            <li class="nav-item mx-3">
            <a class="nav-link" href="#">Contact Us</a>
            </li>
         
        
        </ul>
        </div>
    </div>
  </div>
</nav>
   </>
  )
}
