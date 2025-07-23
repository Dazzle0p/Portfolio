import portfolio from "../assets/portfolio.png";
import fruitweb from "../assets/fruitweb.png";
import eComFasion from "../assets/eComFasion.png";
import geminiClone from "../assets/geminiClone.png";
import bankManagement from "../assets/bankManagement.jpg";
import solarSystem from "../assets/solarSystem.jpg";
import gamingWeb from "../assets/gamingWeb.png";
import { FaArrowRightToBracket, FaGithub } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Projects = () => {
  const projects = [
    {
      name: "Ecommerce Website",
      desc: "Built a responsive e-commerce platform supporting over 20+ dynamic components with role-based access for users and admins.",
      img: eComFasion,
      tags: [
        "MERN",
        "JavaScript",
        "Redux Toolkit",
        "JWT",
        "PayPal API",
        "Cloudinary",
        "Tailwind CSS",
      ],
      liveLink: "https://e-commerce-website-eight-flame.vercel.app/",
      codeLink: "https://github.com/Dazzle0p/E-Commerce-Website",
    },
    {
      name: "Gemini Clone",
      desc: "A fully functional AI chatbot interface inspired by Google’s Gemini using React and Gemini API, enabling users to interact with a conversational AI assistant.",
      img: geminiClone,
      tags: ["React", "Gemini API", "JavaScript", "CSS"],
      liveLink: "https://gemini-clone-six-jet.vercel.app/",
      codeLink: "https://github.com/Dazzle0p/Gemini-Clone",
    },
    {
      name: "Bank Management System ",
      desc: "Key features include user authentication, account management, transaction processing, and a user-friendly interface, enhancing convenience and security.",
      img: bankManagement,
      tags: ["JAVA", "Swing", "AWT", "MySql", "JDBC"],
      liveLink: "https://github.com/Dazzle0p/BankManagementSystem",
      codeLink: "https://github.com/Dazzle0p/BankManagementSystem",
    },
    {
      name: "Responsive Fruit Website",
      desc: "Responsive Fruit Website Design Using HTML CSS & JavaScript - Contains animations when scrolling.",
      img: fruitweb,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Dark/Light Theme",
        "Smooth-Scrolling",
      ],
      liveLink: "https://fruit-website-ecru.vercel.app/",
      codeLink: "https://github.com/Dazzle0p/Fruit-Website",
    },
    {
      name: "Solar-System-Three-JS",
      desc: "This Solar System 3D visualization is an interactive web-based application built with Three.js.",
      img: solarSystem,
      tags: [
        "Three.js",
        "🌀 Speed Control",
        "♻ Reset, Save & Load",
        "🌠 Toggle Planet Paths",
        "🌗 Realistic Lighting",
      ],
      liveLink: "https://solar-system-three-js-tau.vercel.app/",
      codeLink: "https://github.com/Dazzle0p/Solar-System-Three-JS",
    },
    {
      name: "Gaming Web",
      desc: "Developed a gaming web application for gamer's to purchase their favorite game and play",
      img: gamingWeb,
      tags: ["React", "CSS", "chatling.ai"],
      liveLink: "https://gaming-web-umber.vercel.app/",
      codeLink: "https://github.com/Dazzle0p/Gaming-Web",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent works. Each project was crafted with
            attention to detail and a focus on user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-cyan-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between gap-3 mt-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SlArrowRightCircle /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-400 hover:bg-gray-700 text-cyan-400 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-900/30 transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
