import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import LogoW from "../assets/all_In_On.png";

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
      <img src={Logo} className="h-16 m-4" alt="mozilla logo"/>
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
      <button onClick={theme} className="px-3 md:hidden">
        {light ? (
          <FaMoon size={20} className="text-black hover:text-[#fcbf49]" />
        ) : (
          <FaSun size={20} className="text-white hover:text-[#fcbf49]" />
        )}
      </button>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose
            size={20}
            color={light ? "#000300" : "white"}
            className="ease-in-out duration-1000"
          />
        ) : (
          <AiOutlineMenu
            size={20}
            color={light ? "#000300" : "white"}
            className="ease-in-out duration-1000"
          />
        )}
        
      </div>
      
      {/* mobile */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 z-50 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-700"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-700"
        }
      >
        <img src={LogoW} className="h-20 m-4" alt="mozilla logo"/>
        <ul className="uppercase p-4">
          
          <li className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer" onClick={() => { scrollToSection("hero"); handleNav(); }}>
            Home
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer" onClick={() => { scrollToSection("about"); handleNav(); }}>
            About
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer" onClick={() => { scrollToSection("groups"); handleNav(); }}>
            Teams
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer" onClick={() => { scrollToSection("teams"); handleNav(); }}>
            Groups
          </li>
          <li className="p-4 border-b border-gray-100 hover:text-orange-300 hover:cursor-pointer" onClick={() => { scrollToSection("footer"); handleNav(); }}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
