import React from "react";
import { Link } from "react-scroll";

const Links = () => {
  return (
    <div>
      <ul>
        <Link
          to="about"
          smooth={true}
          duration={600}
          className="mx-5 my-3 py-2 font-bold text-xl text-black hover:text-cerulean transition-all duration-200 cursor-pointer"
        >
          SOBRE MI
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          className="mx-5 my-3 py-2 font-bold text-xl text-black hover:text-cerulean transition-all duration-200 cursor-pointer"
        >
          PROYECTOS
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="mx-5 my-3 py-2 font-bold text-xl text-black hover:text-cerulean transition-all duration-200 cursor-pointer"
          href="#contact"
        >
          CONTACTO
        </Link>
      </ul>
    </div>
  );
};

export default Links;
