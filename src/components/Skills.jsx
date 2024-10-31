import React from "react";
import javascript from "../assets/JavaScript.svg";
import react from "../assets/React.svg";
import java from "../assets/Java.svg";
import spring from "../assets/Spring.svg";
import node from "../assets/Node.js.svg";
import css from "../assets/CSS3.svg";
import docker from "../assets/Docker.svg";
import express from "../assets/Express.svg";
import git from "../assets/Git.svg";
import html from "../assets/HTML5.svg";
import mongodb from "../assets/MongoDB.svg";
import nest from "../assets/Nest.js.svg";
import postgresql from "../assets/PostgresSQL.svg";
import tailwind from "../assets/Tailwind CSS.svg";
import typescript from "../assets/TypeScript.svg";
import redux from "../assets/Redux.svg";

const Skills = () => {
  return (
    <div className="w-1/3 text-justify flex-col mx-32 my-4">
      <h2 className="font-bold text-xl my-5 mx-2">HABILIDADES</h2>
      <div className="flex flex-wrap">
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={html}
          alt={`Logo de ${html}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={css}
          alt={`Logo de ${css}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={javascript}
          alt={`Logo de ${javascript}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={react}
          alt={`Logo de ${react}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={tailwind}
          alt={`Logo de ${tailwind}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={redux}
          alt={`Logo de ${redux}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={java}
          alt={`Logo de ${java}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={spring}
          alt={`Logo de ${spring}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={node}
          alt={`Logo de ${node}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={express}
          alt={`Logo de ${express}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={nest}
          alt={`Logo de ${nest}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={typescript}
          alt={`Logo de ${typescript}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={postgresql}
          alt={`Logo de ${postgresql}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={mongodb}
          alt={`Logo de ${mongodb}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={git}
          alt={`Logo de ${git}`}
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={docker}
          alt={`Logo de ${docker}`}
        />
      </div>
    </div>
  );
};

export default Skills;
