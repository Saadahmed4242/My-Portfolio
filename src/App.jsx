import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import ContactUs from './Component/ContactUs/ContactUs'
import Education from './Component/Education/Education'
import Skill from './Component/Skill/Skill'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <ContactUs/>
      
    </>
  )
}

export default App
