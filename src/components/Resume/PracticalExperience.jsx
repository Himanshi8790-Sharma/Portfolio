import React from 'react'

function PracticalExperience() {
  const experiences = [
  {
    year: "2024- Present",
    role: "Frontend Developer (Self Project)",
    company: "Portfolio Website",
    desc: "Designed and developed my personal portfolio to showcase my web projects using responsive layouts."
  },
  {
    year: "2024",
    role: "Frontend Developer (Self Project)",
    company: "Random Password Generator",
    desc: "Created a JavaScript-based app that generates secure passwords with customizable options."
  },
  {
    year: "2024",
    role: "Frontend Developer (Self Project)",
    company: "Quiz App",
    desc: "Built a quiz app with scoring logic, navigation, and interactive UI using pure JavaScript."
  },
  {
    year: "2024",
    role: "Frontend Developer (Self Project)",
    company: "To-Do List App",
    desc: "Developed a task management app that allows users to add, delete, and mark tasks as complete."
  },
  {
    year: "2024",
    role: "Frontend Developer (Self Project)",
    company: "Age Calculator App",
    desc: "Built a JavaScript-based tool that calculates age from date of birth in years, months, and days."
  },
  {
    year: "2024",
    role: "Frontend Developer (Self Project)",
    company: "Coffee Landing Page",
    desc: "Designed and developed a coffee-themed landing page using HTML, CSS, and JavaScript."
  }
];

  return (
    <div>
     <h2 className='heading'>Practical <span className='text-[var(--main-color)]'>Experience</span></h2>
     <p className='desc text-xl'>As a self-taught developer, I've gained hands-on experience by building multiple web projects using HTML, CSS, JavaScript, Tailwind, React,  NextJs, Figma. Each project helped me strengthen my front-end skills and UI design understanding.</p>
     <div className='resume-list  '>
      {experiences.map((exp,idx)=>(
        <div
        key={idx}
        className='bg-[var(--secondary-bg-color)] rounded-[0.8rem] p-4 h-[calc((35rem-2rem)/2)] flex flex-col justify-center'
        >
          <p className='text-[var(--main-color)]'>
            {exp.year}
          </p>
          <h3 className='text-2xl font-bold'>
            {exp.role}
          </h3>
          <p className='company '>
            {exp.company}
          </p>
          <p>
            {exp.desc}
          </p>
        </div>
      ))}
     </div>
    </div>
  )
}

export default PracticalExperience
