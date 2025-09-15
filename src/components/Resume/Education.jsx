import React from 'react'

function Education() {
    const experiences = [
  {
    year: "2025",
    role: "C++ Programming Course",
    company: "Bodacious IT Hub, Jaipur",
    desc: "Learned object-oriented programming using C++, covering core concepts like classes, functions, loops, and arrays."
  },
  {
    year: "2023-2026",
    role: "Bachelor of Computer Applications (BCA)",
    company: "SS Jain Subodh PG College (Autonomous), Jaipur",
    desc: "Currently pursuing BCA with focus on programming,web development."
  },
  {
    year: "2022-2023",
    role: "Senior Secondary School",
    company: "Maheshwari Girls Sr. Sec. School, Jaipur",
    desc: "Completed 12th with strong performance in Commerce Economics."
  },
  {
    year: "2020",
    role: "Senior Secondary School",
    company: "Maheshwari Girls Sr. Sec. School, Jaipur",
    desc: "Gained foundational knowledge in science, technology, and basic programming logic."
  },
];

  return (
    <div>
     <h2 className='heading'>My <span className='text-[var(--main-color)]'>Education</span></h2>
     <p className='desc text-xl'>A combination of academic qualifications and practical learning has helped me build a strong foundation in web development and programming.</p>
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

export default Education
