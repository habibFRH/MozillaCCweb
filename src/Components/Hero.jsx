import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ light }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white" id="hero">
      <div className="max-w-[800px]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#fcbf49] font-bold p-2 text-xl">
          Join us in unlocking the endless possibilities of technology
        </p>
        <div>
          <p
            className={`md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 pl-2 ${
              light ? "text-[#000300]" : "text-[white]"
            }`}
          >
            Develope your skills in{" "}
          </p>
          <div
            className={`md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 pl-2 ${
              light ? "text-[#000300]" : "text-[white]"
            }`}
          >
            <Typewriter
              words={[
                "Web development",
                "Artificial intelligence",
                "Problem solving",
                "Mobile development",
                "Networking/Security",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={120}
              delaySpeed={1000}
            />
          </div>
        </div>
        <p
          className={`md:text-xl font-bold ${
            light ? "text-[white]" : "text-[#6c757d]"
          } sm:py-6 sm:px-6 py-9 px-6`}
        >
          Embark on a journey of limitless possibilities with the Mozilla Campus
          Club, where computer science enthusiasts unite to explore, create, and
          revolutionize the world of technology.
        </p>
        <button
          className="bg-[#fcbf49] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold hover:bg-[#ffd166] hover:ease-in-out hover:duration-500"
          onClick={scrollToAbout} 
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
