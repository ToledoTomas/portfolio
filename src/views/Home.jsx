import React from "react";
import background from "../assets/6bbadf9f-c577-4b0f-b5f3-a95416006354.jpg";
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <div>
      <img
        className="w-full h-screen opacity-10"
        src={background}
        alt="Imagen de fondo"
      />
      <h1 className="font-bold text-5xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        TITULO IMPORTANTE
      </h1>
      <h3 className="text-2xl my-5 text-center absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        exercitationem, distinctio, aliquid, tempore natus doloribus
      </h3>
      <Button />
    </div>
  );
};

export default Home;
