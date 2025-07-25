// import { FaRegFilePdf } from "react-icons/fa";
// import { FaCode } from "react-icons/fa6";
// import { CiLocationArrow1 } from "react-icons/ci";
// import myImage from "../assets/myImage.jpg";
// import { Marque } from "../common/Marque";

// const AboutPage = () => {
//   return (
//     <section id="about" className="w-full min-h-[90vh]">
//       <main className="max-w-7xl mx-auto mt-10">
//         <h1 className="flex justify-center text-black text-3xl p-10">
//           About Me
//         </h1>
//         <div className="grid grid-cols-3">
//           <div className="col-span-2">
//             <h1 className="text-5xl">Hi, I'am</h1>
//             <h1 className="text-5xl text-gray-700">Sushant Kumar Jha</h1>
//             <p className="mt-3 text-xl">
//               Creative and detail-oriented Frontend Developer with 1+ year of
//               freelance experience building responsive, scalable, and
//               user-focused web applications. Proficient in the MERN stack, with
//               a strong focus on translating UI/UX designs into clean,
//               maintainable code and optimizing performance.
//               <br />
//               Skilled in building modern interfaces using HTML, CSS, JavaScript,
//               and React, with a solid foundation in Java and C++. Currently
//               expanding into full-stack development using the MERN stack.
//             </p>

//             <div className="flex gap-10">
//               <button className="mt-5 flex items-center gap-1 p-3 border rounded-sm">
//                 <FaRegFilePdf /> Download CV
//               </button>
//               <button className="mt-5 flex items-center gap-1 p-3 border rounded-sm">
//                 <FaRegFilePdf /> View Projects
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-end">
//             <img
//               className="object-cover rounded-full  h-[23rem] w-[23rem] mr-5 -mt-3"
//               src={myImage}
//               alt="Profile"
//             />
//           </div>
//         </div>
//         <Marque />

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-10 items-center gap-4">
//           <div className="flex justify-between p-4 border">
//             <div className="flex-col">
//               <FaCode className="size-8 mb-4" />
//               <h3 className="text-xl font-semibold">Total Projects</h3>
//               <p>Innovative web solution crafteds</p>
//             </div>
//             <div className="flex-col">
//               <h3 className="text-xl font-semibold">12</h3>
//               <CiLocationArrow1 className="size-5 relative top-12" />
//             </div>
//           </div>
//           <div className="flex justify-between p-4 border">
//             <div className="flex-col">
//               <FaCode className="size-8 mb-4" />
//               <h3 className="text-xl font-semibold">Total Projects</h3>
//               <p>Innovative web solution crafteds</p>
//             </div>
//             <div className="flex-col">
//               <h3 className="text-xl font-semibold">12</h3>
//               <CiLocationArrow1 className="size-5 relative top-12" />
//             </div>
//           </div>
//           <div className="flex justify-between p-4 border">
//             <div className="flex-col">
//               <FaCode className="size-8 mb-4" />
//               <h3 className="text-xl font-semibold">Total Projects</h3>
//               <p>Innovative web solution crafteds</p>
//             </div>
//             <div className="flex-col">
//               <h3 className="text-xl font-semibold">12</h3>
//               <CiLocationArrow1 className="size-5 relative top-12" />
//             </div>
//           </div>
//         </div> */}
//       </main>
//     </section>
//   );
// };

// export default AboutPage;

import { FaRegFilePdf, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import myImage from "../assets/myImage.jpg";
import { Marque } from "../common/Marque";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="flex justify-center text-white text-4xl font-bold pb-12">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
              Sushant Kumar Jha
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Creative and detail-oriented Web Developer with 1+ year of
              experience building responsive, scalable, and user-focused web
              applications. Proficient in the MERN stack, with a strong focus on
              translating UI/UX designs into clean, maintainable code and
              optimizing performance.
              <br />
              <br />
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300">
                <FaRegFilePdf /> Download CV
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-cyan-400 hover:bg-cyan-900/30 text-cyan-400 rounded-lg transition-all duration-300">
                <FaCode /> View Projects
              </button>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-75 blur-md"></div>
              <img
                className="relative object-cover rounded-full h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 border-4 border-gray-800 z-10"
                src={myImage}
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Marque />
        </div>

        {/* Stats Section - Uncomment if needed */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-between">
                <div>
                  <FaCode className="text-2xl text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">
                    Total Projects
                  </h3>
                  <p className="text-gray-400">
                    Innovative web solutions crafted
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-cyan-400">12+</h3>
                  <CiLocationArrow1 className="text-xl text-cyan-400 ml-auto mt-2 rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </main>
    </section>
  );
};

export default AboutPage;
