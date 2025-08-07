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
      const offset = 60; // Adjust if you have a sticky navbar
      const y =
        aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    // Added animated background blobs for a modern, subtle effect
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Animated Blob 1 */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      {/* Animated Blob 2 */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      {/* Animated Blob 3 */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
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

        {/* Dynamic tech badges with icons and hover effects */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 flex-wrap px-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 transition-all duration-300 cursor-pointer hover:text-white"
              style={{ "--hover-color": tech.color }}
              // The class below is an arbitrary variant, requires a small config change
              // or you can use a different hover effect if you prefer not to change the config.
              // For simplicity, a general hover effect can be used like: hover:bg-cyan-600
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
// import { FaArrowDown } from "react-icons/fa";

// const WelcomePage = () => {
//   const scrollToSection = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       const offset = 60;
//       const y =
//         aboutSection.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
//       {/* Main Content */}
//       <main className="relative pt-24 flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
//           Welcome to my digital playground.
//         </h1>

//         <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
//           Crafting immersive digital experiences with modern web technologies.
//         </p>

//         <div className="mt-12">
//           <button
//             onClick={scrollToSection}
//             className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
//             aria-label="Scroll to About section"
//           >
//             Explore My Work
//             <FaArrowDown />
//           </button>
//         </div>

//         {/* Static tech badges */}
//         <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 flex-wrap text-sm text-gray-300">
//           {["React", "Node", "MongoDB", "Tailwind", "JavaScript"].map(
//             (tech) => (
//               <span
//                 key={tech}
//                 className="bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm"
//               >
//                 {tech}
//               </span>
//             )
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default WelcomePage;
