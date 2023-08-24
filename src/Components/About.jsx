import React from "react";
import Image from "../Assets/resume.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center items-center">
          <div className="sm:text-right pb-12">
            <p className="text-5xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-3 gap-4 px-4">
          <div className="sm:text-right md:text-4xl text-2xl font-bold">
            <p>Hi, I'm Vitaliy, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <img src={Image} alt="Resume" className="rounded-lg mx-auto"/>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. All of my work is produced
              locally from my home office in Chicago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
