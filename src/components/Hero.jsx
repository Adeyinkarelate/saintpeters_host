import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title }) => {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/54079/dome-rome-saint-peter-basilica-54079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Background overlay */}
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-2 w-12 h-1 bg-orange-500 mx-auto"
        ></motion.div>{" "}
        {/* Underline */}
      </div>
    </section>
  );
};

export default Hero;
