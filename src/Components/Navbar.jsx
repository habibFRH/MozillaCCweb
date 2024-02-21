import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import LogoW from "../assets/all_In_On.png";
import Palestine from "../assets/palestineicon.png";

const Navbar = ({ light, theme }) => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setNav(true);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* desktop */}
      <div className="flex items-center">
        <img
          src={Logo}
          className="h-14 px-3 cursor-pointer"
          alt="Mozilla Logo"
        />
        <img
          src={Palestine}
          className="h-10 cursor-pointer"
          alt="Palestine Flag"
        />
      </div>

      <ul className="hidden md:flex">
        <button onClick={theme} className="px-3">
          {light ? (
            <FaMoon size={20} className="text-black hover:text-[#fcbf49]" />
          ) : (
            <FaSun size={20} className="text-white hover:text-[#fcbf49]" />
          )}
        </button>
        <li
          className={`p-4 hover:text-[#fcbf49] hover:cursor-pointer ${
            light ? "text-[#000300]" : "text-[white]"
          }`}
          onClick={() => scrollToSection("hero")}
        >
          Home
        </li>
        <li
          className={`p-4 hover:text-[#fcbf49] hover:cursor-pointer ${
            light ? "text-[#000300]" : "text-[white]"
          }`}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className={`p-4 hover:text-[#fcbf49] hover:cursor-pointer ${
            light ? "text-[#000300]" : "text-[white]"
          }`}
          onClick={() => scrollToSection("groups")}
        >
          Teams
        </li>
        <li
          className={`p-4 hover:text-[#fcbf49] hover:cursor-pointer ${
            light ? "text-[#000300]" : "text-[white]"
          }`}
          onClick={() => scrollToSection("teams")}
        >
          Groups
        </li>
        <li
          className={`p-4 hover:text-[#fcbf49] hover:cursor-pointer ${
            light ? "text-[#000300]" : "text-[white]"
          }`}
          onClick={() => scrollToSection("footer")}
        >
          Contact
        </li>
      </ul>

      <div className="flex items-center md:hidden">
        <button onClick={theme} className="px-3">
          {light ? (
            <FaMoon size={20} className="text-black hover:text-[#fcbf49]" />
          ) : (
            <FaSun size={20} className="text-white hover:text-[#fcbf49]" />
          )}
        </button>

        <div onClick={handleNav} className="ml-4">
          {!nav ? (
            <AiOutlineClose
              size={20}
              color={light ? "#000300" : "white"}
              className="fixed top-5 right-0 m-4 z-10"
            />
          ) : (
            <AiOutlineMenu
              size={20}
              color={light ? "#000300" : "white"}
              className="ease-in-out duration-1000"
            />
          )}
        </div>
      </div>

      {/* mobile */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 z-50 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-700 md:hidden"
            : "fixed left-[-100%] z-50 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-700 md:hidden"
        }
      >
        <img src={LogoW} className="h-14 m-4" alt="mozilla logo" />
        <ul className="uppercase p-4">
          <li
            className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer"
            onClick={() => {
              scrollToSection("hero");
              handleNav();
            }}
          >
            Home
          </li>
          <li
            className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer"
            onClick={() => {
              scrollToSection("about");
              handleNav();
            }}
          >
            About
          </li>
          <li
            className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer"
            onClick={() => {
              scrollToSection("groups");
              handleNav();
            }}
          >
            Teams
          </li>
          <li
            className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer"
            onClick={() => {
              scrollToSection("teams");
              handleNav();
            }}
          >
            Groups
          </li>
          <li
            className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer"
            onClick={() => {
              scrollToSection("footer");
              handleNav();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
