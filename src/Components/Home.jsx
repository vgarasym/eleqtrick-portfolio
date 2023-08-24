import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-background bg-scroll">
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:max-w-[500px] text-white font-bold pb-6">
            Hello, I'm Vitaliy Garasymovych
          </h1>
          <TypeAnimation
          className="text-white font-bold pb-6"
            sequence={[
              "Front End Developer",
              1500,
              "Tech Enthusiast",
              1500,
              "Hard Worker",
              1500,
            ]}
            speed={30}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
          <div className="flex justify-center">
            <button className="px-4 py-2 my-12 bg-white flex border-4 hover:border-gray-400 items-center justify-center absolute">
              Get in touch
              <AiOutlineArrowDown className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
