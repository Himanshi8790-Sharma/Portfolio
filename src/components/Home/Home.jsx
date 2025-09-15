import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-[var(--bg-color)] h-[720px] flex items-center justify-center px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[4.2rem] font-extrabold text-white leading-tight">
            Himanshi Sharma
          </h1>
          <h2 className="inline-block text-[2.5rem] mt-[-1rem] font-semibold text-white">
            I'm a{" "}
            <span className="animated-text">
              <b className="text-[var(--main-color)]">Frontend</b> Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-xl">
            Hi, I'm Himanshi Sharma — a front-end developer who loves turning
            creative ideas into live, responsive websites. With HTML, CSS,
            JavaScript, Tailwind & Figma ,React ,Next JS. I'm constantly building new projects
            that blend clean design with real-world functionality.
          </p>

          {/* Buttons & Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
            <a
              href="/resume.pdf"
              className="inline-block py-[1rem] px-[3rem] border-[0.2rem] border-[var(--main-color)] rounded-[4rem] shadow-[0_0_1rem_#7CFC00] text-[#071422] bg-[#7CFC00] transition duration-500 hover:bg-transparent hover:text-[#7CFC00] hover:shadow-none"
            >
              Download Resume
            </a>

            {/* Socials */}
            <div className="flex gap-4 text-3xl">
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
        <div className="home-img relative flex items-center justify-center">
          <div
            className="img-box relative 
                  w-[240px] h-[240px] 
                  sm:w-[300px] sm:h-[300px] 
                  md:w-[400px] md:h-[400px] 
                  rounded-[50%_50%_50%_50%/60%_60%_40%_40%] 
                  flex items-center justify-center 
                  overflow-hidden border border-[#071422]"
          >
            <img
              src="/home.png"
              alt="profile"
              className="absolute 
                 w-[80%] sm:w-[85%] md:w-[90%] 
                 top-4 sm:top-8 md:top-12 
                 object-contain 
                 mix-blend-lighten 
                 rotate-[-15deg] sm:rotate-[-25deg] md:rotate-[-40deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
