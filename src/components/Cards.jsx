import React from "react";
import Card from "./Card";

const Cards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-28">
      {projects.map(project => (
        <Card key={project.id} projects={project} />
      ))}
    </div>
  );
};

export default Cards;
