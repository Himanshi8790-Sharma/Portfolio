import React from 'react'

function AboutMe() {
  const sections=[
    {title:"Name",desc:"Himanshi Sharma"},
    {title:"Gender",desc:"Female"},
    {title:"Age",desc:"20 years old"},
    {title:"Status",desc:"Unamried"},
    {title:"City",desc:"Jaipur"},
    {title:"Nationality",desc:"Indian"},
    {title:"Experience ",desc:"Fresher"},
    {title:"Full Time",desc:"Available"},
    {title:"Freelence",desc:"Available"},
    {title:"Phone",desc:"(+91)96644 69502"},
    {title:"Email",desc:"himanshsharma7890    @gmial.com"},
    {title:"Language",desc:"English, Hindi"},

  ]
  return (
    <div>
      <h2 className="heading">
        My <span className="text-[var(--main-color)]">Skills</span>
      </h2>
      <p className="desc text-xl">
       I'm Himanshi Sharma, a passionate and self-taught front-end developer from Jaipur. I love bringing ideas to life through clean, responsive, and interactive websites. With a strong foundation in HTML, CSS, JavaScript, and Tailwind CSS, React, NextJs, Figma. I've built multiple real-world projects that reflect both creativity and functionality. I'm currently pursuing BCA and constantly learning new technologies to sharpen my skills
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 '>
        {sections.map((section,idx)=>(
          <div key={idx} className=' p-1 text-[var(--main-color)] text-xl ' >{section.title}
          <div className='text-white ml-[0.1rem] text-xl'>
              {section.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMe
