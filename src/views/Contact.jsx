import React from "react";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div
      className="text-center absolute left-1/4 top-3/4 mt-52 w-1/2"
      id="contact"
    >
      <h2 className="font-bold text-3xl">CONTACTO</h2>
      <div className="w-10 h-1 rounded-md mx-auto my-5 bg-cerulean"></div>
      <p className="text-xl">Lorem ipsum dolor sit amet consectetur</p>
      <Form />
    </div>
  );
};

export default Contact;
