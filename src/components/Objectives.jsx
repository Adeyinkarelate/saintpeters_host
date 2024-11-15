import React from "react";
import { aims } from "../constant/index";

const Objectives = () => {
  return (
    <div className="bg-gray-100 md:p-10">
      <h1 className=" font-bold items-center md:my-4 md:text-4xl my-6 p-6 md:p-0 text-3xl">
        AIM & OBJECTIVES
      </h1>
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4 ">
          {aims.map((item, index) => (
            <div
              className="bg-gray-200 w-full min-h-64 p-4 flex flex-col justify-center items-center text-center animate__animated animate__fadeInLeft rounded-lg hover:bg-orange-500 hover:text-white"
              key={index}
            >
              <div className="text-5xl text-gray-400 hover:text-white">{item.icon}</div>
              <p className="text-md p-3 tracking-wider">
                {item.obj}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
