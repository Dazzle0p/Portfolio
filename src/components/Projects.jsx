import projectOne from "../assets/portfolio.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
    {
      name: "Portfolio",
      desc: " Developed a portfolio website to showcase my skills and experiance",
    },
  ];
  const cardStyle = {
    border: "1px solid black",
  };
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto mt-[3rem]">
        <h1 className="flex justify-center text-3xl p-10">Projects</h1>

        <main className="grid grid-cols-3 gap-4 mb-4">
          {projects.map((project, indx) => (
            <div style={cardStyle} className="p-4 bg-gray-300 rounded-md">
              <img src={projectOne} alt="Project-One" className="rounded-md" />
              <h1 className="text-xl font-semibold mt-2 mb-2">
                {project.name}
              </h1>
              <p>{project.desc}</p>
              <div className="flex justify-between">
                <button className="p-3 bg-teal-50 hover:bg-gray-700 duration-700 mt-2 mb-2 rounded-md flex gap-3 items-center">
                  Details <FaArrowRightToBracket />
                </button>
                <a
                  href="#"
                  className="p-3 bg-teal-50 hover:bg-gray-700 duration-700 mt-2 mb-2 rounded-md flex gap-3 items-center"
                >
                  Live <SlArrowRightCircle />
                </a>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Projects;
