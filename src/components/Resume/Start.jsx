import PracticalExperience from '../Resume/PracticalExperience'
import AboutMe from '../Resume/AboutMe'
import Education from '../Resume/Education'
import Skills from '../Resume/Skills'
import { useState } from 'react'
import "./Resume.css";

function Start() {
  const sections = [
    { label: "Practical", component: <PracticalExperience /> },
    { label: "Education", component: <Education /> },
    { label: "Skills", component: <Skills /> },
    { label: "AboutMe", component: <AboutMe /> }
  ]

  const [activeIndex, setactiveIndex] = useState(0)

  return (
    <div className='bg-[var(--bg-color)] py-7 px-4 md:px-8 lg:px-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-white'>

        {/* Left Box */}
        <div className='lg:px-10'>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-snug'>
            Why Hire Me?
          </h2>
          <p className='text-base md:text-lg lg:text-2xl mt-4 desc'>
            I'm a passionate and self-taught front-end developer who loves turning ideas into clean, responsive websites. 
            I may be a fresher, but I bring dedication, fast learning, and real project experience to the table.
          </p>

          {/* Buttons */}
          <div className='resume-buttons flex flex-col mt-6 space-y-3'>
            {sections.map((src, idx) => (
              <button
                key={idx}
                className={`resume-btn ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setactiveIndex(idx)}
              >
                {src.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Box - Active Component */}
        <div className='lg:pr-10'>
          {sections[activeIndex].component}
        </div>

      </div>
    </div>
  )
}

export default Start
