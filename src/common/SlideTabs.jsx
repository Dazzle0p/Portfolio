import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex items-center gap-1 w-fit p-1 "
    >
      <Tab setPosition={setPosition}>
        <Link to="/">Home</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/about">About</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/projects">Projects</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/skills">Skills</Link>
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 px-4 py-2 cursor-pointer text-sm uppercase text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className="absolute h-8 bg-cyan-600/90 rounded-md shadow-lg"
      style={{
        filter: "drop-shadow(0 0 4px rgba(34, 211, 238, 0.5))",
      }}
    />
  );
};

export default SlideTabs;
