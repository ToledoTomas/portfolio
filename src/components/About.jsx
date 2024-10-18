import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";

const About = () => {
  return (
    <div
      className="text-center h-auto relative flex flex-col items-center justify-center py-20"
      id="about"
    >
      <h2 className="font-bold text-4xl">SOBRE MI</h2>
      <div className="w-10 h-1 rounded-md mx-auto my-5 bg-cerulean"></div>
      <p className="text-xl">
        Sección donde encontrarás una breve descripción de mi y de las
        tecnologías que utilizo.
      </p>
      <div className="flex h-auto m-10 justify-center">
        <Bio />
        <Skills />
      </div>
    </div>
  );
};

export default About;
