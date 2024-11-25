import React from "react";
import { aims, clubs } from "../constant/index";
import { motion } from "framer-motion";

const socialIconsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const socialIconsChildren = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Objectives = () => {
  return (
    <div className="bg-green-950 md:p-14 overflow-x-hidden text-white">
      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="  text-center font-semibold md:my-4 md:text-4xl my-6 p-6 md:p-0 text-3xl"
      >
        AIM & OBJECTIVES
      </motion.h1>
      <div className="container mx-auto p-4 max-w-[85rem] mt-12">
        <motion.div
          variants={socialIconsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 "
        >
          {aims.map((item, index) => (
            <motion.div
              variants={socialIconsChildren}
              className="bg-gray-200 shadow-md w-full min-h-64 p-4 flex flex-col justify-center items-center text-center rounded-lg hover:bg-orange-500 text-green-950 hover:text-white "
              key={index}
            >
              <div className="text-5xl ">{item.icon}</div>
              <p className="text-md p-3 mt-2 tracking-wider ">{item.obj}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="flex justify-center  my-6">
          <motion.button
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="btn bg-[#ff7433] text-white"
            onClick={() => document.getElementById("my_modal_44").showModal()}
          >
            Read More
          </motion.button>
          <dialog id="my_modal_44" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-700 text-2xl">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-green-950">
                AIM & OBJECTIVES
              </h3>
              <ul className="py-4">
                {clubs.map((c, index) => (
                  <li
                    key={index}
                    className="py-3 my-3 text-sm tracking-wider text-green-950"
                  >
                    {c.obj}
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Objectives;
