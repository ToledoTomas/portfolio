import React from "react";

const Card = ({ projects }) => {
  return (
    <div className="w-1/2">
      <h1 className="text-lg font-bold">{projects.name}</h1>
      <img src={projects.image} alt={`Imagen de ${projects.name}`} />
      <div>
        <p>{projects.description}</p>
        <p>{projects.date}</p>
        <p>{projects.stack.join(" - ")}</p>
      </div>
    </div>
  );
};

export default Card;
