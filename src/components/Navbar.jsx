import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex py-2 justify-around fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
