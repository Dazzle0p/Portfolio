import { FaRegFilePdf, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import myImage from "../assets/myImage.jpg";
import Resume from "../assets/SushantResume_FullStack.pdf";
import { Marque } from "../common/Marque";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at top right, #0f172a, #0d1326)",
      }}
    >
      {/* Glassmorphism background elements bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900*/}
      <div className="absolute -top-1/3 -right-1/4 w-full h-[800px] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-[600px]  from-gray-900 via-blue-900 to-gray-900  rounded-full blur-[100px]"></div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="flex justify-center text-cyan-300 text-4xl font-bold pb-16 tracking-wider">
          ABOUT ME
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Text Content - Glass Panel */}
          <div className="lg:col-span-2 order-2 lg:order-1 glass-panel p-8 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hi, I'm
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 tracking-wide">
              Sushant Kumar Jha
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Creative and detail-oriented Web Developer with 1+ year of
              experience building responsive, scalable, and user-focused web
              applications. Proficient in the MERN stack, with a strong focus on
              translating UI/UX designs into clean, maintainable code and
              optimizing performance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={Resume}
                download="Sushant_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-primary flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3"
              >
                <FaRegFilePdf className="text-lg" /> Download CV
              </a>
              <Link
                to="/projects"
                className="glass-button-secondary flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3"
              >
                <FaCode /> View Projects
              </Link>
            </div>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/Dazzle0p"
                className="social-icon text-gray-300 hover:text-cyan-300 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushantjha1205/"
                className="social-icon text-gray-300 hover:text-cyan-300 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Profile Image - Glass Frame */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative glass-frame rounded-full p-1.5">
                <img
                  className="object-cover rounded-full h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
                  src={myImage}
                  alt="Profile"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-cyan-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                MERN Developer
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Marque />
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6">
          {[
            {
              icon: <FaCode className="text-xl" />,
              title: "Projects",
              value: "12+",
              desc: "Completed projects",
            },
            {
              icon: <CiLocationArrow1 className="text-xl rotate-45" />,
              title: "Experience",
              value: "1+ Year",
              desc: "Web development",
            },
            {
              icon: <FaGithub className="text-xl" />,
              title: "Contributions",
              value: "50+",
              desc: "Code commits",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div className="glass-icon">{item.icon}</div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-cyan-300 group-hover:text-white transition-colors">
                    {item.value}
                  </h3>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </main>
    </section>
  );
};

export default AboutPage;
