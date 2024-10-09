import React from "react";
import Card from "../Card/Card";

const Cards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 absolute top-1/2 transform translate-y-80 justify-items-center">
      {projects.map(project => (
        <Card key={project.id} projects={project} />
      ))}
    </div>
  );
};

export default Cards;
