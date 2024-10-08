import React from "react";
import Button from "../components/Button/Button";
import arrow from "../assets/down-arrow.png";
import About from "./About";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        TITULO IMPORTANTE
      </h1>
      <h3 className="text-2xl my-5 text-center absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        exercitationem, distinctio, aliquid, tempore natus doloribus
      </h3>
      <Button />
      <img
        className="w-10 h-10 mx-auto mb-14 absolute items-center bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-125"
        src={arrow}
        alt="flecha"
      />
      <About />
    </div>
  );
};

export default Home;
