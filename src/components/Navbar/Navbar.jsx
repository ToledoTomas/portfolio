import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";

const Navbar = () => {
  return (
    <div className="flex py-2 justify-around relative bg-white">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
