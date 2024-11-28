import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title }) => {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-psd/abstract-background-design_1297-76.jpg?t=st=1731587302~exp=1731590902~hmac=f0c253b9eb29863cf1f73d35c869b3f6f99ed479a557500ff7bd38706a5116e8&w=1060')",
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
