import React from "react";
import { Link } from "react-scroll";

const Bio = () => {
  return (
    <div className="w-1/3 text-justify mx-32 flex-col">
      <h1 className="text-xl font-bold my-5">MINI BIO</h1>
      <p>
        Soy un apasionado por la tecnología y el aprendizaje continuo, siempre
        buscando mejorar mis habilidades y mantenerme al día con las últimas
        tendencias del sector.
      </p>
      <p>
        Mi formación en la Universidad Abierta Interamericana (UAI) me ha dotado
        de habilidades de pensamiento crítico y una mentalidad proactiva
        necesarias para resolver desafíos complejos de software. 🚀
      </p>
      <Link
        to="contact"
        smooth={true}
        duration={600}
        className="my-8 py-2 px-4 text-lg font-semibold text-white rounded-md bg-cerulean absolute hover:scale-110 transition-all cursor-pointer duration-300"
      >
        CONTACTAME
      </Link>
    </div>
  );
};

export default Bio;
