import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
      name: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:your.email@example.com",
      name: "Email",
    },
  ];

  return (
    <footer
      className="w-full py-12 bg-gray-900 border-t border-gray-800"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            &copy; {currentYear} Sushant Jha. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 mt-4 md:mt-0"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500"
        >
          <p>Built with React, Tailwind CSS, and lots of ☕</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
