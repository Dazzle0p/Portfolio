import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always
            open to new collaborations.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-gray-800/70 p-8 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-900/30 rounded-full">
                    <FaEnvelope className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase tracking-wider">
                      Email
                    </h4>
                    <a
                      href="mailto:dazushant@gmail.com"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      dazushant@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-900/30 rounded-full">
                    <FaPhoneAlt className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase tracking-wider">
                      Phone
                    </h4>
                    <a
                      href="tel:+919117440703"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      +91 9117440703
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-900/30 rounded-full">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-gray-300">Pari Chowk, Greater Noida</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <FaLinkedin />,
                      url: "https://www.linkedin.com/in/sushantjha1205/",
                      name: "LinkedIn",
                    },
                    {
                      icon: <FaGithub />,
                      url: "https://github.com/Dazzle0p",
                      name: "GitHub",
                    },
                    {
                      icon: <FaTwitter />,
                      url: "https://x.com/imSushant02",
                      name: "Twitter",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-cyan-600 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gray-800/70 p-8 rounded-xl border border-gray-700 shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-400 mb-6">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
