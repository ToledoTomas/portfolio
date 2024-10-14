import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    reset();
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="w-full mx-auto flex flex-col justify-center mt-16 mb-10 p-10 bg-white rounded-2xl shadow-2xl"
        action="submit"
      >
        <label className="text-start ml-1 mt-3" htmlFor="name">
          Nombre
        </label>
        <input
          {...register("name", {
            required: {
              value: true,
              message: "Por favor ingrese su nombre",
            },
            minLength: {
              value: 3,
              message: "Debe contener al menos 3 caracteres",
            },
          })}
          className="mb-2 p-2 rounded-md mt-1 bg-charcoal bg-opacity-10 outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su nombre"
        />
        <p className="text-start text-error ml-1 mb-2">
          {errors.name?.message}
        </p>
        <label className="text-start ml-1 mt-3" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Por favor ingrese su email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email no valido",
            },
          })}
          className="mb-2 p-2 rounded-md mt-1 bg-charcoal bg-opacity-10 outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
        />
        <p className="text-start text-error ml-1 mb-2">
          {errors.email?.message}
        </p>
        <label className="text-start ml-1 mt-3" htmlFor="message">
          Mensaje
        </label>
        <textarea
          {...register("message", {
            required: {
              value: true,
              message: "Por favor ingrese un mensaje",
            },
          })}
          className="mb-2 p-2 rounded-md mt-1 bg-charcoal bg-opacity-10 outline-none"
          placeholder="Ingrese el mensaje"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <p className="text-start text-error ml-1 mb-2">
          {errors.message?.message}
        </p>
        <button
          className="bg-cerulean text-white font-bold py-2 mt-3 px-4 rounded-md hover:scale-110 transition-all duration-300 w-1/2 mx-auto"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
