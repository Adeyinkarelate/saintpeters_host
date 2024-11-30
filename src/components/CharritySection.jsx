import React, { useState } from "react";
import { motion } from "framer-motion";
import bg3 from "/bg3.jpg";
import bg1 from "/b1.jpg";
import b2 from "/b2.jpg";

const images = [b2, bg1, bg3];

const CharritySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-orange-50 py-20 px-6 md:px-16 min-h-[600px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
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
            className="text-sm font-semibold text-green-500 uppercase tracking-wide"
          >
            Excursion/ Events
          </motion.h3>
          <motion.h2
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-green-950"
          >
            ST PETER’S SOCIETY <br /> Excursion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-neutral-900"
          >
            In the area of charity, the society had contributed its little quota
            to the help of the needy and the less privileged members of the
            society within and outside the church.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="btn my-4 bg-[#ff7433] text-white"
            onClick={() => document.getElementById("my_modal_466").showModal()}
          >
            Read More
          </motion.button>
          <dialog id="my_modal_466" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-600 text-3xl">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                FAMILY CARE – Children’s Party, Presidential Night, Excursions
                and Easter Picnics
                <br />
                <br />
                In the area of family care, the society is not found wanting.
                Since inception the society organizes children Christmas party
                for members children every December of the 1st year of the two
                year tenure of any President while in the second year, the
                President organizes a presidential night where members and their
                wives are always in attendance to mark the end of the tenure of
                the President and his executive council. <br /> <br />
                To further give the family members a sense of belonging and to
                further educate them, the society began in 1985 yearly
                excursions to tourists Centre and places of interest for members
                and their families as part of its anniversary celebrations.
                However, the project could not continue after 1985 until it was
                resuscitated in 2001. And has since been a regular yearly event
                to date. <br />
                <br />
                <b>
                  {" "}
                  <i>
                    In 1985, the society and their family members visited the
                    then OGTV, State Hotel Abeokuta and the Olumo Rock
                  </i>{" "}
                </b>
                <br />
                <br />
                <i>
                  <b>
                    On 29th of July 2001 (Patron Feast Day of S S Peter & Paul),
                    the society went on excursion to Minor Seminary Oke Are,
                    Major.
                  </b>
                </i>{" "}
                <br />
                <br />
                It is particular heart warning that from inception till date,
                the society has remained a positive force to reckon with not
                only at St. Anne Catholic Church but in the entire Abeokuta
                Deanery. At the moment, our members spread across the following
                churches: <br />
                <br />
                St, Anne Catholic Church, Ibara, Abeokuta. <br /> <br />
                St. Rita Catholic Church, Ijaye, Abeokuta. <br />
                <br />
                Our Lady Seat of Wisdom Catholic Church, Adigbe, Abeokuta.{" "}
                <br />
                <br />
                St. Andrew Catholic Church, Olomore, Abeokuta. <br />
                <br />
                Blessed Tansi Catholic Church, Aule Road, Akure. <br />
                <br />
                St. Luke Catholic Church, Osogbo. <br />
                <br />
              </p>
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

export default CharritySection;
