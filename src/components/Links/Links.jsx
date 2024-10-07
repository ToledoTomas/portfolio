import React from "react";

const links = ["SOBRE MI", "PROYECTOS", "CONTACTO"];

const Links = () => {
  return (
    <div>
      <ul>
        {links.map(l => {
          return (
            <a
              className="mx-5 my-3 py-2 font-bold text-xl text-black hover:text-cerulean transition-all duration-200"
              href={"#"}
              key={l}
            >
              {l}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
