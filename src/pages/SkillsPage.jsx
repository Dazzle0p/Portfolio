import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiReactrouter,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const SkillsPage = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: 90,
    },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 92 },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-300" />,
      level: 94,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: 88,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-300" />,
      level: 86,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      level: 85,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 83 },
    {
      name: "React Router",
      icon: <SiReactrouter className="text-pink-500" />,
      level: 90,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black dark:text-white" />,
      level: 88,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 87 },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" />, level: 89 },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400" />,
      level: 85,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technologies I've worked with and my proficiency level in each
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 mt-1">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/30 rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Development Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-cyan-400 font-medium mb-2">Frontend</h4>
              <p className="text-gray-300">
                Building responsive, accessible interfaces with React, Tailwind
                CSS, and modern JavaScript. Focus on performance, animations,
                and great UX.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-cyan-400 font-medium mb-2">Backend</h4>
              <p className="text-gray-300">
                Developing scalable server-side applications with Node.js,
                Express, and both SQL & NoSQL databases. API design and
                integration expertise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
