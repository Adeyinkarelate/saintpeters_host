import React from "react";
import { namesOne, nameTwo, nameThree } from "../constant/index";

const Banner = () => {
  return (
    <div
      class="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/image/b2.jpg')" }}
    >
      <div class="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      <div class="relative z-10 flex items-center justify-center h-full px-4 text-center md:text-left">
        <div class="max-w-2xl mx-auto text-white">
          <h1 class="text-3xl font-bold md:text-5xl bg-gradient-to-tr from-slate-50 to-slate-100 bg-clip-text text-transparent leading-tight animate__animated animate__fadeInLeft">
            THE CHRONILES OF ST PETER’S SOCIETY,
          </h1>
          <p class="mt-4 text-lg md:text-xl animate__animated animate__fadeInRight">
            In 1982, a group of vibrant and progressive youth in St. Anne
            Catholic Church, Ibara, Abeokuta...
          </p>
          {/*  */}
          <button
            className="btn inline-block px-6 py-3 mt-6 text-sm font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-100"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Learn More 🖋️
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className=" text-red-500 btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-black">
                THE CHRONILES OF ST PETER’S SOCIETY,
              </h3>
              <p className="text-sm tracking-wider py-4 mb-6 text-justify leading-8 text-neutral-700">
                In 1982, a group of vibrant and progressive youth in St. Anne
                Catholic Church, Ibara, Abeokuta who aggressively desired
                spiritual flavor by joining a church society were pulled
                together by common bond. Incidentally, members of the existing
                societies as at that time were old enough to be their fathers or
                at least their senior brothers. This informed their historic
                decision to establish a distinct and unique society of like
                minds and the initial effort culminated in the regular but
                informal meeting of the foundation members listed care below:
              </p>
              {/* the first group */}
              <ul className="grid grid-cols-2 md:grid-cols-3 pb-4">
                {namesOne.map((name, index) => (
                  <li
                    key={index}
                    className="text-sm tracking-wider py-2 text-neutral-700"
                  >
                    {name} <br />
                  </li>
                ))}
              </ul>

              <p className="text-sm tracking-wider  mb-6 text-justify leading-8 text-neutral-700">
                On the 3rd of September 1982, the first formal meeting of the
                society was held and protem officers were elected. At the third
                meeting of the Society held on the 17th October, 1982, the
                following people were elected and sworn-in as the first
                Executive Officers elected to run the affairs of the society
              </p>

              <ul className="grid">
                {nameTwo.map((two, nameIndex) => (
                  <li
                    key={nameIndex}
                    className="text-sm tracking-wider py-2 text-neutral-700"
                  >
                    {two.name} -{" "}
                    <span className="font-bold">{two.position}</span>
                    <br />
                  </li>
                ))}
              </ul>

              <p className="text-sm tracking-wider  mb-6 text-justify leading-8 text-neutral-700 italic">
                Thereafter, the following members were appointed to draft the
                constitution of the society before its inauguration:
              </p>

              <ul className="grid ">
                {nameThree.map((three, threeindex) => (
                  <li
                    key={threeindex}
                    className="text-sm tracking-wider py-2 flex space-x-4 text-neutral-700"
                  >
                    {three}
                  </li>
                ))}
              </ul>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn border border-red-500 rounded-md shadow text-black">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
