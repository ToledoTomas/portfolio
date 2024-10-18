import React from "react";
import github from "../assets/github-sign.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import email from "../assets/message.png";

const SocialMedia = () => {
  return (
    <div className="w-14 py-1 rounded-lg h-auto top-1/4 fixed left-0">
      <div className="flex-col">
        <a
          className="m-0 p-0"
          target="_blank"
          href="https://github.com/ToledoTomas"
        >
          <img
            className="w-14 h-14 p-2 mx-2 my-2 hover:bg-cerulean hover:rounded-lg transition-all duration-300"
            src={github}
            alt="Github logo"
          />
        </a>
        <a
          className="m-0 p-0"
          target="_blank"
          href="https://www.linkedin.com/in/toledo-tomas-agustin/"
        >
          <img
            className="w-14 h-14 p-2 mx-2 my-2 hover:bg-cerulean hover:rounded-lg transition-all duration-300"
            src={linkedin}
            alt="Linkedin Logo"
          />
        </a>
        <a
          className="m-0 p-0"
          target="_blank"
          href="https://www.instagram.com/tomas.toledo89/"
        >
          <img
            className="w-14 h-14 p-2 mx-2 my-2 hover:bg-cerulean hover:rounded-lg transition-all duration-300"
            src={instagram}
            alt="Instagram Logo"
          />
        </a>
        <a
          className="m-0 p-0"
          target="_blank"
          href="mailto:tomas_toledo98@hotmail.com"
        >
          <img
            className="w-14 h-14 p-2 mx-2 my-2 hover:bg-cerulean hover:rounded-lg transition-all duration-300"
            src={email}
            alt="Email Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
