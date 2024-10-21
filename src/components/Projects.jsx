import React from "react";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <div
      className="text-center relative flex flex-col items-center justify-center"
      id="projects"
    >
      <Element name="projects" />
      <h2 className="font-bold text-3xl">PROYECTOS</h2>
      <div className="w-10 h-1 rounded-md mx-auto my-5 bg-cerulean"></div>
      <p className="text-xl">
        Sección donde encontrarás algunos de mis proyectos.
      </p>
    </div>
  );
};

export default Projects;
