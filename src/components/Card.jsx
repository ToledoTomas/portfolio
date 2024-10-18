import React from "react";

const Card = ({ projects }) => {
  return (
    <a
      target="_blank"
      href={projects.url}
      className="w-3/4 my-5 p-3 rounded-lg hover:bg-white hover:shadow-2xl transition-all duration-75"
    >
      <h1 className="text-lg font-bold mb-2 text-center">{projects.name}</h1>
      <img
        className="w-80 h-36 rounded-md items-center mx-auto mb-2"
        src={projects.image}
        alt={`Imagen de ${projects.name}`}
      />
      <p className="text-center justify-center mb-3">{projects.description}</p>
      {/* <p className="border-thistle rounded-lg border-2 text-center">
        {projects.stack.join(" - ")}
      </p> */}
      <ul className="flex flex-wrap justify-center">
        {projects.stack.map(stack => (
          <li
            className="border-cerulean rounded-lg border-2 p-2 m-1 text-center"
            key={stack}
          >
            {stack}
          </li>
        ))}
      </ul>
    </a>
  );
};

export default Card;
