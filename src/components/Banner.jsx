import React from "react";
import char from "../assets/image/charrity.jpg";
import { nameThree, nameTwo, namesOne } from "../constant/index";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 pl-3  bg-white text-black">
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

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-gradient-to-r from-orange-500 to-orange-700 font-medium text-sm px-5 py-3 text-center text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          ReadMore
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Cont</h3>
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
                society was held and protem officers were elected. At the third
                meeting of the Society held on the 17th October, 1982, the
                following people were elected and sworn-in as the first
                Executive Officers elected to run the affairs of the society.
              </p>
              <ul className="grid ">
                {nameTwo.map((n, index) => (
                  <li
                    key={index}
                    className="text-sm tracking-wider py-2 flex space-x-4"
                  >
                    {n.name} - {n.position}
                  </li>
                ))}
              </ul>
              <p class="text-sm tracking-wider text-justify leading-relaxed text-gray-600 dark:text-gray-600">
                Thereafter, the following members were appointed to draft the
                constitution of the society before its inauguration:
              </p>
              <ul className="grid ">
                {nameThree.map((name, index) => (
                  <li
                    key={index}
                    className="text-sm tracking-wider py-2 flex space-x-4"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/*  */}
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
