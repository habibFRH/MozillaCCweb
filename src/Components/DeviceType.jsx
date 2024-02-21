import React from "react";
import Cards from "./TeamCard"

const DeviceType = () => {
  return (
    <div>
      {/* desktop */}
      <div className="w-full py-[10rem] px-4 bg-white text-center" id="teams">
        <h2 className="text-3xl font-bold mb-8">Mozilla Games</h2>
        <p className="mb-8 font-bold">developed by the web dev team !</p>
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 items-center">
          <Cards animation={"flip-left"} team={"Mozillian Racer"} img={null} />
          <Cards animation={"flip-left"} team={"Mobile Development"} img={null} />
          <Cards animation={"flip-left"} team={"Network / Security"} img={null} />
          <Cards animation={"flip-left"} team={"Artificial Intelligence / ML"} img={null} />
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
