import React from "react";
import javascript from "../../assets/JavaScript.svg";
import react from "../../assets/React.svg";
import node from "../../assets/Node.js.svg";
import css from "../../assets/CSS3.svg";
import docker from "../../assets/Docker.svg";
import express from "../../assets/Express.svg";
import git from "../../assets/Git.svg";
import html from "../../assets/HTML5.svg";
import mongodb from "../../assets/MongoDB.svg";
import nest from "../../assets/Nest.js.svg";
import postgresql from "../../assets/PostgresSQL.svg";
import tailwind from "../../assets/Tailwind CSS.svg";
import typescript from "../../assets/TypeScript.svg";

const Skills = () => {
  return (
    <div className="w-1/3 text-justify flex-col mx-32">
      <h2 className="font-bold text-xl my-5 mx-2">HABILIDADES</h2>
      <div className="flex flex-wrap">
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={html}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={css}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={javascript}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={react}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={tailwind}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={node}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={express}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={nest}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={typescript}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={postgresql}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={mongodb}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={git}
          alt="#"
        />
        <img
          className="rounded-lg w-16 h-16 mx-2 my-2 py-3 border-2 border-cerulean"
          src={docker}
          alt="#"
        />
      </div>
    </div>
  );
};

export default Skills;
