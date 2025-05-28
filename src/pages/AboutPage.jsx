import { FaRegFilePdf } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import myImage from "../assets/myImage.jpg";
import StarBorder from "../components/StarBorder";
const AboutPage = () => {
  return (
    <section id="about" className="w-full">
      <main className="max-w-7xl mx-auto mt-10">
        <h1 className="flex justify-center text-black text-3xl p-10">
          About Me
        </h1>
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl">Hi, I'am</h1>
            <h1 className="text-5xl text-gray-700">Sushant Kumar Jha</h1>
            <p className="mt-3 text-xl">
              A passionate frontend developer and a final-year B.Tech Computer
              Science <br />
              student at Galgotias University. <br /> I specialize in building
              responsive, user-friendly web interfaces using HTML, <br /> CSS,
              JavaScript, and React. I also have strong foundations in Java and
              C++,
              <br /> and I’m actively exploring full-stack development with the
              MERN stack.
            </p>

            <div className="flex gap-10">
              <button className="mt-5 flex items-center gap-1 p-3 border rounded-sm">
                <FaRegFilePdf /> Download CV
              </button>
              <button className="mt-5 flex items-center gap-1 p-3 border rounded-sm">
                <FaRegFilePdf /> View Projects
              </button>
            </div>
          </div>
          <div>
            <img
              className="object-cover rounded-full  h-[23rem] w-[23rem] mr-5 -mt-3"
              src={myImage}
              alt="Profile"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-10 items-center gap-4">
          <div className="flex justify-between p-4 border">
            <div className="flex-col">
              <FaCode className="size-8 mb-4" />
              <h3 className="text-xl font-semibold">Total Projects</h3>
              <p>Innovative web solution crafteds</p>
            </div>
            <div className="flex-col">
              <h3 className="text-xl font-semibold">12</h3>
              <CiLocationArrow1 className="size-5 relative top-12" />
            </div>
          </div>
          <div className="flex justify-between p-4 border">
            <div className="flex-col">
              <FaCode className="size-8 mb-4" />
              <h3 className="text-xl font-semibold">Total Projects</h3>
              <p>Innovative web solution crafteds</p>
            </div>
            <div className="flex-col">
              <h3 className="text-xl font-semibold">12</h3>
              <CiLocationArrow1 className="size-5 relative top-12" />
            </div>
          </div>
          <div className="flex justify-between p-4 border">
            <div className="flex-col">
              <FaCode className="size-8 mb-4" />
              <h3 className="text-xl font-semibold">Total Projects</h3>
              <p>Innovative web solution crafteds</p>
            </div>
            <div className="flex-col">
              <h3 className="text-xl font-semibold">12</h3>
              <CiLocationArrow1 className="size-5 relative top-12" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutPage;
