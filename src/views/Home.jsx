import React from "react";
import Button from "../components/Button/Button";
import arrow from "../assets/down-arrow.png";

const Home = () => {
  return (
    <div>
      <img
        className="w-full opacity-20 h-auto"
        src="./src/assets//6bbadf9f-c577-4b0f-b5f3-a95416006354.jpg"
        alt="background"
      />
      <h1 className="font-bold text-5xl text-center absolute items-center w-full top-64">
        TITULO IMPORTANTE
      </h1>
      <h3 className="text-2xl my-5 text-center absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        exercitationem, distinctio, aliquid, tempore natus doloribus
      </h3>
      <Button />
      <img
        className="w-10 h-10 mx-auto absolute items-center top-1/4 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-125"
        src={arrow}
        alt="flecha"
      />
    </div>
  );
};

export default Home;
