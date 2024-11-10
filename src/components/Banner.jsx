import React from "react";
import char from '../assets/image/charrity.jpg'
import { nameThree,nameTwo,namesOne } from "../constant";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 pl-3  bg-white text-black" id="about">
    <div className="p-3">
      <h2 className=" text-3xl md:text-5xl my-6 font-semibold">
        THE CHRONILES OF ST PETER’S SOCIETY,
      </h2>
      <p className="text-lg tracking-wider text-orange-600 ">
        ST. ANNE CATHOLIC CHURCH IBARA, ABEOKUTA.
      </p>
      <p className="text-sm tracking-wider mt-4 mb-6 text-justify leading-8">
        In 1982, a group of vibrant and progressive youth in St. Anne Catholic
        Church, Ibara, Abeokuta who aggressively desired spiritual flavor by
        joining a church society were pulled together by common bond.
        Incidentally, members of the existing societies as at that time were
        old enough to be their fathers or at least their senior brothers. This
        informed their historic decision to establish a distinct and unique
        society of like minds and the initial effort culminated in the regular
        but informal meeting of the foundation members listed care below:
      </p>

      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        class="block bg-gradient-to-r from-orange-500 to-orange-700 font-medium text-sm px-5 py-3 text-center text-white "
        type="button"
      >
        Read More
      </button>

      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Cont.
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-4 md:p-5 space-y-4">
              <ul className="grid grid-cols-2 md:grid-cols-3">
                {namesOne.map((name, index) => (
                  <li key={index} className="text-sm tracking-wider py-2">
                    {name} <br />
                  </li>
                ))}
              </ul>
              <p class="text-sm tracking-wider text-justify leading-relaxed text-gray-600 dark:text-gray-600">
                On the 3rd of September 1982, the first formal meeting of the
                society was held and protem officers were elected. At the
                third meeting of the Society held on the 17th October, 1982,
                the following people were elected and sworn-in as the first
                Executive Officers elected to run the affairs of the society.
              </p>
              <ul className="grid ">
                {nameTwo.map((n, index) => (
                  <li key={index} className="text-sm tracking-wider py-2 flex space-x-4">
                    {n.name} - {n.position}
                  </li>
                ))}
              </ul>
              <p class="text-sm tracking-wider text-justify leading-relaxed text-gray-600 dark:text-gray-600">Thereafter, the following members were appointed to draft the constitution of the society before its inauguration:</p>
              <ul className="grid ">
                {nameThree.map((name, index) => (
                  <li key={index} className="text-sm tracking-wider py-2 flex space-x-4">
                    {name} 
                  </li>
                ))}
              </ul>

            </div>

            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

              <button
                data-modal-hide="default-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className=" bg-black inset-0 relative"></div>
      <img
        src={char}
        alt=""
        className="w-full md:min-h-[550px] min-h-[400px]  md:p-0 p-3"
      />
    </div>
  </div>
  );
};

export default Banner;
