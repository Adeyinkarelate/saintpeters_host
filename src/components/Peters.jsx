import React from "react";
import { nameThree,nameTwo,namesOne } from "../constant/index";

const Peters = () => {
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

export default Peters;
