import React from "react";

const Bio = () => {
  return (
    <div className="w-1/3 text-justify mx-32 flex-col">
      <h1 className="text-xl font-bold my-5">TEXTO BIO</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsum
        quos et omnis corporis? Suscipit corrupti exercitationem excepturi ad id
        iste! Voluptatibus veritatis numquam magnam quaerat neque quae aperiam
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        blanditiis nam, accusantium mollitia eveniet dolore quia aliquam alias
        ut rem nihil perferendis architecto. Nam esse consequatur, alias facere
        itaque ipsam!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iste
        distinctio sit tenetur libero a. Sint, delectus praesentium consequuntur
        ducimus quos corporis, nesciunt sequi aliquam quas magnam, eaque quo
        recusandae.
      </p>
      <a
        className="my-8 py-2 px-4 text-lg font-semibold text-white rounded-md bg-cerulean absolute hover:scale-110 transition-all duration-300"
        href="#contact"
      >
        CONTACTAME
      </a>
    </div>
  );
};

export default Bio;
