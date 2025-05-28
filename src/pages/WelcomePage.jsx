import SplitText from "../components/SplitText";
import welcomeBg from "../assets/welcomeBg2.mp4";
import { FaArrowDown } from "react-icons/fa";

const WelcomePage = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const scrollToSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <video
        className="absolute h-screen w-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={welcomeBg} type="video/mp4" />
      </video>

      {/* Main Section */}
      <main className="pt-24 flex flex-col items-center justify-center min-h-screen">
        <SplitText
          text="WELCOME TO MY PORTFOLIO"
          className="text-[4rem]"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <button
          className="mt-10 flex justify-center items-center"
          onClick={scrollToSection}
          aria-label="Scroll to About section"
        >
          <FaArrowDown className="text-gray-800 size-10 animate-bounce" />
        </button>
      </main>
    </div>
  );
};

export default WelcomePage;
