import React from "react";
import { aims } from "../constant/index";
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
    <div className="bg-gray-100 md:p-10">
      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" font-bold text-center md:my-4 md:text-4xl my-6 p-6 md:p-0 text-3xl"
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
              className="bg-gray-200 shadow-md w-full min-h-64 p-4 flex flex-col justify-center items-center text-center rounded-lg hover:bg-orange-500 hover:text-white"
              key={index}
            >
              <div className="text-5xl text-gray-600 hover:text-white">
                {item.icon}
              </div>
              <p className="text-md p-3 mt-2 tracking-wider">{item.obj}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Objectives;
