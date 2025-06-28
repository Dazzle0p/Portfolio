import SplitText from "../components/SplitText";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const WelcomePage = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Lightweight animated dots background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative pt-24 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <SplitText
            text="Welcome to my digital playground."
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Crafting immersive digital experiences with modern web technologies.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <button
              onClick={scrollToSection}
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
              aria-label="Scroll to About section"
            >
              Explore My Work
              <FaArrowDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>

        {/* Static tech badges (no animation) */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 opacity-80">
          {["React", "Node", "MongoDB", "Tailwind", "JavaScript"].map(
            (tech, i) => (
              <motion.div
                key={tech}
                className="text-gray-300 text-sm bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm"
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech}
              </motion.div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
