
import React, { useState } from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { current_exco } from "../constant";

const Current = () => {
  const name = "Active Members";

  const [selectedIndividual, setSelectedIndividual] = useState(null);

  const handleReadMore = (individual) => {
    setSelectedIndividual(individual);
  };

  const closeModal = () => {
    setSelectedIndividual(null);
  };

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

  return (
    <div>
      <Hero title={name} />

      <motion.div
        variants={socialIconsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto md:px-12 my-10 px-3"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-4">
          {current_exco.map((individual, index) => (
            <div
              className="relative h-[500px] rounded-lg overflow-hidden"
              key={index}
            >
              <img
                src={individual.image}
                alt={`${individual.name}'s image`}
                className="w-full h-96 object-cover"
              />

              <h3 className="text-black text-xl tracking-wider">
                {individual.name}
              </h3>
              <p className="text-neutral-900 text-sm">{individual.position}</p>
              <p className="text-neutral-900 text-sm">{individual.tiem}</p>
              <button
                className="text-orange-600 cursor-pointer"
                onClick={() => handleReadMore(individual)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedIndividual && (
        <dialog open className="modal">
          <div className="modal-box relative">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-3xl bg-red-500 text-white"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">{selectedIndividual.name2}</h3>
            <motion.div
              variants={socialIconsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 w-full"
            >
              <img
                className="rounded w-full md:w-1/2 h-80"
                src={selectedIndividual.wifeImage1}
                alt="Image 1"
              />
              <img
                className="rounded w-full md:w-1/2 h-80"
                src={selectedIndividual.wifeImage2}
                alt="Image 1"
              />
              
            </motion.div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Current;

