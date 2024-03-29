import React from "react";
import Laptop from "../assets/computer.png";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          data-aos="fade-right"
          data-aos-duration="3000"
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="/"
        />
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="flex flex-col justify-center"
        >
          <p className="text-[#fcbf49] font-bold">
            Welcome to Mozilla Campus Club
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Empowering Developers, Fostering Innovation
          </h1>
          <p>
            At Mozilla Campus Club, we are dedicated to creating a vibrant
            community of computer science enthusiasts who are passionate about
            technology and eager to make a difference. Our club aims to provide
            a platform for students to explore the exciting world of computer
            science and collaborate on innovative projects.
          </p>
          <a href="https://mozillacc-uv2-members.onrender.com/">
            <button className="bg-[#fcbf49] w-[200px] rounded-md my-6 py-3 text-black font-bold hover:bg-[#ffd166] hover:ease-in-out hover:duration-500">
              Our Members
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
