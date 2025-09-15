import { useState } from "react";
import portfolioData from "./PortfolioData";
import ProjectCard from "./ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Portfolio() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? portfolioData.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === portfolioData.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-[#031B2B] py-20 px-6">
      <h2 className="text-5xl md:text-6xl text-center mb-16 text-white font-bold">
        Latest <span className="text-green-500">Project</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left side details */}
        <ProjectCard project={portfolioData[current]} />

        {/* Right side image */}
        <div className="bg-[#0F2A57] rounded-2xl p-6 flex items-center justify-center shadow-lg h-[400px]">
          <img
            src={portfolioData[current].image}
            alt={portfolioData[current].title}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end mt-8 space-x-6 max-w-6xl mx-auto">
        <button
          onClick={prevSlide}
          className={`p-3 rounded-md border-2 ${
            current === 0
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          } transition`}
        >
          <FaArrowLeft size={25} />
        </button>
        <button
          onClick={nextSlide}
          className={`p-3 rounded-md border-2 ${
            current === portfolioData.length - 1
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          } transition`}
        >
          <FaArrowRight size={25} />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
