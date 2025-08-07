import { Link } from "react-router-dom";
import SlideTabs from "./SlideTabs";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300  ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={closeMobileMenu}
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
              Sushant Jha
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <SlideTabs />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Contact Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/contact">
              <a className=" items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 text-sm">
                Contact Me
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900/9 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ marginTop: scrolled ? "40px" : "70px" }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
