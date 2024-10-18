import React from "react";
import Button from "../components/Button";
import arrow from "../assets/down-arrow.png";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="text-center mt-40">
      <h1 className="font-bold text-5xl">
        TITULO IMPORTANTE
      </h1>
      <h3 className="text-2xl mt-5 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        exercitationem, distinctio, aliquid, tempore natus doloribus
      </h3>
      </div>
      <Button />
      <img
        className="w-10 h-10 mt-60 transition-all duration-300 hover:scale-125"
        src={arrow}
        alt="flecha"
      />
      <SocialMedia />
    </div>
  );
};

export default Home;
