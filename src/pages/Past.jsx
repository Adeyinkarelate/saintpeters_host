import React from "react";
import Hero from "../components/Hero";
import { past_member } from "../constant";

const Past = () => {
  return (
    <>
      <Hero title="Past President" />
      <div className="container mx-auto md:px-12 px-4 py-16">
        <div className="grid md:grid-cols-4 gap-4  my-5">
          {past_member.map((p, index) => (
            <div
              className=" p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
              key={index}
            >
              <img className="rounded h-[450px] object-cover w-full" src={p.image} alt="" />
              <p className="font-bold mt-2 mb-1">{p.name}</p>
              <p className=" text-slate-900 text-sm">{p.position}</p>
              <p className=" text-orange-600 font-bold text-sm">{p.tiem}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Past;
