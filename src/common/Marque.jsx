import Marquee from "react-fast-marquee";
import { FaHtml5, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiNodejsLine, RiVercelFill } from "react-icons/ri";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
export const Marque = () => {
  return (
    <Marquee className="mt-10">
      <ul className="flex gap-10 text-[5rem]">
        <li className="text-[#E34F26]">
          <FaHtml5 />
        </li>
        <li className="text-[#1572B6]">
          <IoLogoCss3 />
        </li>
        <li className="text-[#38BDF8]">
          <SiTailwindcss />
        </li>
        <li className="text-[#F7DF1E]">
          <IoLogoJavascript className="drop-shadow-[0_0_2px_black]" />{" "}
        </li>
        <li className="text-[#61DAFB]">
          <FaReact />
        </li>
        <li className="text-[#339933]">
          <RiNodejsLine />
        </li>
        <li className="text-[#000000]">
          <SiExpress className="drop-shadow-[0_0_2px_white]" />
        </li>
        <li className="text-[#47A248]">
          <SiMongodb />
        </li>
        <li className="text-[#00758F]">
          <SiMysql />
        </li>
        <li className="text-[#007396]">
          <FaJava />
        </li>
        <li className="text-[#ffffff]">
          <RiVercelFill className="drop-shadow-[0_0_2px_black]" />
        </li>
        <li className="text-[#ffffff]">
          <FaGithub className="drop-shadow-[0_0_2px_black]" />
        </li>
        <li></li>
      </ul>
    </Marquee>
  );
};
