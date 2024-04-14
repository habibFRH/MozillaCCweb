import React from "react";
import Cards from "./TeamCard"
import MozillianRacer from "../assets/mozillian-racer.png"
import Chess from "../assets/chess.png"
import Flappy from "../assets/flappy.png"

const DeviceType = () => {
  return (
    <div>
      {/* desktop */}
      <div className="w-full py-[10rem] px-4 bg-white text-center" id="teams">
        <h2 className="text-3xl font-bold mb-8">Mozilla Games</h2>
        <p className="mb-8 font-bold">developed by the web dev team !</p>
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 items-center">
          <a href="https://habibfrh.github.io/Mozillian-Racer-fox-Racer-/"><Cards animation={"flip-left"} team={"Mozillian Racer"} img={MozillianRacer} /></a>
          <a href="https://habibfrh.github.io/flappy-fox/"><Cards animation={"flip-left"} team={"Flappy Fox"} img={Flappy} /></a>
          <a href="https://habibfrh.github.io/chess-game/"><Cards animation={"flip-left"} team={"Chess game"} img={Chess} /></a>
        </div>
      </div>

      {/* mobile */}
      <div className="border-r border-r-gray-900 bg-[#000000] duration-700 md:hidden text-center h-24 justify-center ">
        <h1>Please use a laptop to see this section !</h1>
      </div>
    </div>
  );
};

export default DeviceType;
