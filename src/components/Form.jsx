import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = handleSubmit(data => {
    emailjs
      .sendForm(
        "service_feokr62",
        "template_2xm2vxo",
        form.current,
        "DJN9BirFhdPxRyw9-",
      )
      .then(
        () => {
          console.log("Correo enviado con éxito");
        },
        error => {
          console.log("Error: ", error.text);
        },
      );

    console.log(data);
    reset();
  });

  return (
    <div>
      <form
        ref={form}
        onSubmit={onSubmit}
        className="w-full mx-auto flex flex-col justify-center mt-16 mb-10 p-10 bg-white rounded-2xl shadow-2xl"
        action="submit"
      >
        <label className="text-start ml-1 mt-3" htmlFor="user_name">
          Nombre
        </label>
        <input
          {...register("user_name", {
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
          name="user_name"
          id="user_name"
          placeholder="Ingrese su nombre"
        />
        <p className="text-start text-error ml-1 mb-2">
          {errors.user_name?.message}
        </p>
        <label className="text-start ml-1 mt-3" htmlFor="user_email">
          Email
        </label>
        <input
          {...register("user_email", {
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
          name="user_email"
          id="user_email"
          placeholder="Ingrese su email"
        />
        <p className="text-start text-error ml-1 mb-2">
          {errors.user_email?.message}
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
