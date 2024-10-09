import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";

const Navbar = () => {
  return (
    <div className="flex py-2 justify-around absolute top-0 left-0 w-full bg-white">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
