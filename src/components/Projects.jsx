import portfolio from "../assets/portfolio.png";
import fruitweb from "../assets/fruitweb.png";
import { FaArrowRightToBracket, FaGithub } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "A responsive portfolio showcasing my skills and experience with modern design",
      img: portfolio,
      tags: ["React", "Tailwind CSS", "AOS"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "Fruit E-commerce",
      desc: "An online store for fresh fruits with cart functionality",
      img: fruitweb,
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "Task Manager",
      desc: "Productivity app to organize and track daily tasks",
      img: portfolio,
      tags: ["React", "Firebase", "Redux"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "Weather App",
      desc: "Real-time weather forecasting application",
      img: fruitweb,
      tags: ["API Integration", "JavaScript", "CSS3"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "Recipe Finder",
      desc: "Discover recipes based on ingredients you have",
      img: portfolio,
      tags: ["React", "Edamam API", "Material UI"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "Fitness Tracker",
      desc: "Track workouts and monitor fitness progress",
      img: fruitweb,
      tags: ["React Native", "Firebase", "Chart.js"],
      liveLink: "#",
      codeLink: "#",
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
