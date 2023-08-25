import React from "react";
import Logo from "../Assets/insolubleslion.png";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] bg-transparent flex justify-between items-center px-4 text-[#EAEAEA]">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Logo" style={{ width: "60px" }} />
        </a>
      </div>
      <div className="flex justify-between text-center text-white text-xl mx-4">
        <ul className="hidden md:flex justify-center items-center">
          <li className="mx-4 hover:border-b-4 hover:border-white">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-4 hover:border-b-4 hover:border-white">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mx-4 hover:border-b-4 hover:border-white">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="mx-4 hover:border-b-4 hover:border-white">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="mx-4 hover:border-b-4 hover:border-white">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex justify-between">
        <li>
          <a
            href="https://www.linkedin.com/in/vitaliygara/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin className="text-3xl text-gray-300 mx-4 hover:border-b-4 hover:border-gray-300" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/eleqtrick"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoTwitter className="text-3xl text-[#00acee] mx-4 hover:border-b-4 hover:border-[#00acee]" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vgarasym"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGithub className="text-3xl text-white mx-4 hover:border-b-4 hover:border-white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
