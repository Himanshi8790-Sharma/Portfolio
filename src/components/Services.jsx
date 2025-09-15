
import { FaLaptopCode, FaMobileAlt, FaRedoAlt, FaRocket, FaLightbulb, FaPalette } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-[4rem]" />,
      title: "Web Development",
      desc: "Clean, responsive, and interactive websites using HTML, CSS, JavaScript & Tailwind CSS.",
    },
    {
      icon: <FaPalette className="text-[4rem]" />,
      title: "UI/UX Design",
      desc: "Intuitive and modern UI designs crafted in Figma, with focus on user experience.",
    },
    {
      icon: <FaMobileAlt className="text-[4rem]" />,
      title: "Responsive Design",
      desc: "Ensuring your website looks great on all screen sizes — mobile, tablet & desktop.",
    },
    {
      icon: <FaRedoAlt className="text-[4rem]" />,
      title: "Website Redesign",
      desc: "Transforming outdated sites into modern, performance-focused experiences.",
    },
    {
      icon: <FaRocket className="text-[4rem]" />,
      title: "Landing Page Creation",
      desc: "Building attractive landing pages that capture attention and drive conversions.",
    },
    {
      icon: <FaLightbulb className="text-[4rem]" />,
      title: "Personal Projects",
      desc: "Custom web projects that reflect creativity, logic, and real-world use cases.",
    },
  ];

  return (
    <div className="bg-[var(--bg-color)] py-20 px-6">
      <h2 className="text-5xl md:text-6xl text-center mb-16 text-white font-bold">
        My <span className="text-[var(--main-color)]">Services</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto text-white font-bold">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-700 p-8 border-2 border-[var(--secondary-bg-color)] rounded-2xl shadow-md transition duration-500 hover:border-[var(--main-color)] hover:scale-[1.03]"
          >
            <div className="flex justify-between items-center">
              {service.icon}
              <a
                href="#"
                className="inline-flex text-white rounded-full p-2 transition duration-500 hover:bg-[var(--main-color)]"
              >
                <FaArrowUpRightFromSquare className="text-2xl transition-transform duration-500 hover:rotate-180" />
              </a>
            </div>
            <h3 className="text-3xl mt-4 mb-4 transition duration-500 hover:text-[var(--main-color)] font-bold">
              {service.title}
            </h3>
            <p className="text-lg text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
