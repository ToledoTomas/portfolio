import React from "react";
import Bio from "../components/Bio/Bio";
import Skills from "../components/Skills/Skills";

const About = () => {
  return (
    <div className="text-center absolute top-1/4 mt-36" id="about">
      <h2 className="font-bold text-4xl">SOBRE MI</h2>
      <div className="w-10 h-1 rounded-md mx-auto my-5 bg-cerulean"></div>
      <p className="text-xl">Lorem ipsum dolor sit amet consectetur</p>
      <div className="flex h-auto m-10">
        <Bio />
        <Skills />
      </div>
    </div>
  );
};

export default About;
