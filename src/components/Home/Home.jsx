import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-[var(--bg-color)] min-h-screen flex items-center justify-center px-4 md:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 max-w-7xl w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Himanshi Sharma
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2 font-semibold text-white">
            I'm a{" "}
            <span className="animated-text">
              <b className="text-[var(--main-color)]">Frontend</b> Developer
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-300 max-w-lg md:max-w-xl mx-auto md:mx-0">
            Hi, I'm Himanshi Sharma — a front-end developer who loves turning
            creative ideas into live, responsive websites. With HTML, CSS,
            JavaScript, Tailwind, Figma, React, and Next.js. I'm constantly
            building new projects that blend clean design with real-world
            functionality.
          </p>

          {/* Buttons & Icons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-6 md:mt-8 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="inline-block py-3 px-8 sm:py-4 sm:px-12 border-[0.2rem] border-[var(--main-color)] rounded-full shadow-[0_0_1rem_#7CFC00] text-[#071422] bg-[#7CFC00] transition duration-500 hover:bg-transparent hover:text-[#7CFC00] hover:shadow-none text-sm sm:text-base"
            >
              Download Resume
            </a>

            {/* Socials */}
            <div className="flex gap-4 text-2xl sm:text-3xl mt-4 sm:mt-0">
              <a
                href="https://github.com/Himanshi8790-Sharma"
                className="p-3 border-[0.2rem] border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[#071422] transition duration-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshi-sharma-414b2a35b"
                className="p-3 border-[0.2rem] border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[#071422] transition duration-500"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden border border-[#071422] flex items-center justify-center">
            <img
              src="/home.png"
              alt="profile"
              className="absolute w-4/5 sm:w-5/6 md:w-11/12 top-2 sm:top-4 md:top-8 object-contain mix-blend-lighten rotate-[-15deg] sm:rotate-[-25deg] md:rotate-[-40deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
