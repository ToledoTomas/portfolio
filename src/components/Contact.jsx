import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="text-center w-full max-w-2xl mt-20" id="contact">
      <h2 className="font-bold text-3xl">CONTACTO</h2>
      <div className="w-10 h-1 rounded-md mx-auto my-5 bg-cerulean"></div>
      <p className="text-xl">
        Si tienes alguna consulta o quieres contactarme, por favor completa el
        siguiente formulario.
      </p>
      <Form />
    </div>
  );
};

export default Contact;
