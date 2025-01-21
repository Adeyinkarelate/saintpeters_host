import React, { useState } from "react";
import { motion } from "framer-motion";
import { namesOne, nameTwo, nameThree } from "../constant/index";
import bg3 from "/female-use.jpg";
import bg1 from "/b2.jpg";
import bg2 from "/b1.jpg";
import bg4 from "/men_alne2.jpg";
import bg5 from "/men-alone.jpg";

const images = [bg1,bg2,bg3,bg4,bg5];

const Banner2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-green-950 py-20 px-6 md:px-16 min-h-[600px]">
      <div className="max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <motion.h3
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-semibold text-green-500 uppercase tracking-wide"
          >
            THE CHRONILES
          </motion.h3>
          <motion.h1
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-4xl md:text-6xl font-semibold  text-slate-50"
          >
            OF ST PETER <br /> SOCIETY,
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-white text-sm tracking-wider text-justify my-4"
          >
            In 1982, a group of vibrant and progressive youth in St. Anne
            Catholic Church, Ibara, Abeokuta...
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="btn my-4 bg-[#ee692a] text-white"
            onClick={() => document.getElementById("my_modal_46").showModal()}
          >
            Read More
          </motion.button>
          <dialog id="my_modal_46" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-600 text-3xl">
                  ✕
                </button>
              </form>
              {/*  */}
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
              {/*  */}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn border border-red-500 rounded-md shadow text-black">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative w-full h-auto">
          <div className="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 text-white bg-black/30 hover:bg-black/50"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 text-white bg-black/30 hover:bg-black/50"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
