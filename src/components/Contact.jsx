import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function Contact() {
  const information = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      desc: "(+91) 96644 69502",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      desc: "himanshsharma7890@gmail.com",
    },
    {
      icon: <FaLocationDot />,
      title: "Address",
      desc: "abc.Jaipur,India",
    },
  ];

  const [text, settext] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [emailSubject, setemailSubject] = useState("");

  return (
    <section className="bg-[var(--bg-color)] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12">
        {/* Left Box */}
        <div className="self-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 mb-10 text-white">
            Have an idea, project, or collaboration in mind? Let's turn it into
            reality! I'm open to freelance work, internships, or just a tech
            conversation.
          </p>

          <div className="flex flex-col gap-6">
            {information.map((inform, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white"
              >
                <div className="flex items-center justify-center bg-[var(--secondary-color)] text-[var(--main-color)] text-3xl md:text-4xl p-4 rounded-lg">
                  {inform.icon}
                </div>
                <div>
                  <p className="text-[var(--main-color)] font-semibold">
                    {inform.title}
                  </p>
                  <p>{inform.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Box */}
        <div>
          <form className="bg-gray-800 p-8 md:p-12 rounded-xl text-center shadow-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Contact{" "}
              <span className="text-[var(--main-color)]">
                Me!
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                value={text}
                onChange={(e) => settext(e.target.value)}
                placeholder="Full Name"
                className="p-4 bg-[var(--bg-color)] border border-[var(--bg-color)] rounded-lg text-white text-lg focus:outline-none focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)]"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
                className="p-4 bg-[var(--bg-color)] border border-[var(--bg-color)] rounded-lg text-white text-lg focus:outline-none focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)]"
              />

              <input
                type="number"
                required
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                placeholder="Phone Number"
                className="p-4 bg-[var(--bg-color)] border border-[var(--bg-color)] rounded-lg text-white text-lg focus:outline-none focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)]"
              />

              <input
                type="text"
                value={emailSubject}
                required
                onChange={(e) => setemailSubject(e.target.value)}
                placeholder="Email Subject"
                className="p-4 bg-[var(--bg-color)] border border-[var(--bg-color)] rounded-lg text-white text-lg focus:outline-none focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)]"
              />

              <textarea
                placeholder="Your Message"
                required
                className="p-4 bg-[var(--bg-color)] border border-[var(--bg-color)] rounded-lg text-white text-lg col-span-full h-48 resize-none focus:outline-none focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 px-10 py-4 rounded-full bg-[var(--main-color)] text-black font-semibold text-lg shadow-[0_0_20px_var(--main-color)] hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
