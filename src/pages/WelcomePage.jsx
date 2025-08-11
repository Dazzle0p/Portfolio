import {
  FaArrowDown,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase, // Using a generic DB icon as a placeholder for MongoDB
  FaWind, // Using a wind icon as a creative take on Tailwind
} from "react-icons/fa";

// Data for tech stack badges - easier to manage and scale
const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <FaDatabase />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <FaWind />, color: "#06B6D4" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
];

const WelcomePage = () => {
  const scrollToSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 60;
      const y =
        aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
          Welcome to my digital playground. 👋
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Crafting immersive digital experiences with modern web technologies.
        </p>

        <div className="mt-12">
          <button
            onClick={scrollToSection}
            className="group px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40"
            aria-label="Scroll to About section"
          >
            Explore My Work
            <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {/* Tech badges */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 flex-wrap px-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = tech.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              {tech.icon}
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
