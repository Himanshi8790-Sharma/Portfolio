import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaFigma, FaGit, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill } from 'react-icons/ri'
import { BiLogoTailwindCss } from 'react-icons/bi'

function Skills() {
  const sections = [
    { logo: <FaHtml5 />, title: 'HTML5' },
    { logo: <FaCss3 />, title: 'CSS3' },
    { logo: <IoLogoJavascript />, title: 'JavaScript' },
    { logo: <FaReact />, title: 'React' },
    { logo: <RiNextjsFill />, title: 'Next Js' },
    { logo: <BiLogoTailwindCss />, title: 'Tailwind CSS' },
    { logo: <FaFigma />, title: 'Figma' },
    { logo: <FaGit />, title: 'Git' },
    { logo: <FaGithub />, title: 'Git Hub' },
  ]

  return (
    <div className>
      <h2 className="heading">
        My <span className="text-[var(--main-color)]">Skills</span>
      </h2>
      <p className="desc text-xl">
        I've worked with these tools and technologies to build responsive, user-friendly web projects. Each skill here reflects my hands-on learning and practical experience as a front-end developer.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-4 sm:p-6 flex  items-center justify-center text-white text-5xl sm:text-6xl  transition-all duration-500 hover:text-[var(--main-color)]"
            title={section.title}
          >
            {section.logo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
