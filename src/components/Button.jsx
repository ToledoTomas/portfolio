import React from "react";
import { Link } from "react-scroll";

const Button = () => {
  return (
    <div className="flex justify-center mt-10">
      <Link
        to="projects"
        smooth={true}
        duration={600}
        className="py-5 px-8 text-xl font-bold text-white rounded-md cursor-pointer bg-cerulean hover:scale-110 transition-all duration-300"
      >
        PROYECTOS
      </Link>
    </div>
  );
};

export default Button;
