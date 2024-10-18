import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Cards from "../components/Cards";
import projectsData from "../api/projects.json";

const Body = () => {
  return (
    <div className="flex flex-col items-center gap-20 py-10">
      <About />
      <Projects />
      <Cards projects={projectsData.projects} />
      <Contact />
    </div>
  );
};

export default Body;
