import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";

const Logo = () => {
  const option = {
    duration: 600,
    smooth: true,
  };

  scroll.scrollToTop(option);

  return (
    <div>
      <a
        onClick={() => scroll.scrollToTop()}
        className=" my-3 mx-5 py-2 px-3 text-xl font-bold text-black hover:text-cerulean cursor-pointer"
      >
        INICIO
      </a>
    </div>
  );
};

export default Logo;
