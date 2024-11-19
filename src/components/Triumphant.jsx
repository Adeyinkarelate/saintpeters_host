import React from "react";
import { members } from "../constant";

const Triumphant = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-x-hidden">
      <div className="mx-auto mb-10 lg:max-w-2xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
          MEMBERS TRIUMPHANT
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        Members Triumphant were members that have died while belonging to the society. While alive, these members did a lot to project the image of the society. May our good Lord Grant them eternal rest. Amen
        </p>
      </div>
      {/*  */}
      <ul className="grid grid-cols-2 md:grid-cols-3 pb-4">
        {members.map((name, index) => (
          <li
            key={index}
            className="text-sm tracking-wider py-2 text-neutral-700"
          >
            {name} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Triumphant;
