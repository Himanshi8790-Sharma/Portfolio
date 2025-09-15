import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <div className="text-white">
      {/* Number */}
     <h2 className="text-6xl font-bold text-white">0{project.id}</h2>

      {/* Title */}
      <h3 className="text-3xl font-bold mt-4">{project.title}</h3>

      {/* Description */}
      <p className="mt-4 text-gray-300">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-6 text-green-500 border-b border-gray-600 pb-4">
        {project.tech.join(", ")}
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6 mt-6">
        {/* Live Project */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="relative group inline-flex p-4 text-2xl text-white bg-[#0F2A57] rounded-full hover:text-green-500 transition"
        >
          <FaArrowUpRightFromSquare className="rotate-45" />
          <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Live Project
          </span>
        </a>

        {/* GitHub */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="relative group inline-flex p-4 text-2xl text-white bg-[#0F2A57] rounded-full hover:text-green-500 transition"
        >
          <FaGithub />
          <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            GitHub Repository
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
