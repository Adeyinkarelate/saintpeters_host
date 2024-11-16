import React from "react";
import Hero from "../components/Hero";
import { assets } from "../constant/index";
import { motion } from "framer-motion";

const Active = () => {
  const name = "Active Members";

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

  return (
    <div>
      <Hero title={name} />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <motion.div
          variants={socialIconsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
        >
          {assets.map((item, index) => (
            <motion.div
              variants={socialIconsChildren}
              key={index}
              className="relative overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm h-[600px] group"
            >
              <img
                src={item.image}
                className="object-cover w-full h-full"
                alt={item.name}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Active;
