import { motion } from "framer-motion";
import { eleniyan } from "../constant";
import bg3 from "../assets/image/bg3.jpg";

const Exco = ({
  selectedIndividual,
  setSelectedIndividual,
  handleReadMore,
  closeModal,
  socialIconsVariants,
}) => {
  return (
    <>
      <motion.div
        variants={socialIconsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto md:px-12 my-10 px-3"
      >
        <div className="grid md:grid-cols-3 gap-4 md:px-4">
          {eleniyan.map((individual, index) => (
            <div
              className="relative h-[450px] rounded-lg overflow-hidden"
              key={index}
            >
              <img
                src={individual.image}
                alt={`${individual.name}'s image`}
                className="w-full h-full object-cover py-6"
              />
              <div className="absolute bottom-2 left-2 flex flex-row justify-between items-center space-x-4 bg-black opacity-70 p-5 w-full">
                <div>
                  <h2 className="text-white font-bold">{individual.name}</h2>
                  <p className="text-white">{individual.position}</p>
                </div>
                <button
                  className="btn bg-[#f77f00] text-white"
                  onClick={() => handleReadMore(individual)}
                >
                  Read More
                </button>
              </div>
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
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">{selectedIndividual.name2}</h3>
            {/* <p className="text-gray-500">{selectedIndividual.position}</p> */}
            <div className="p-4 flex flex-col items-center gap-4">
              <img
                className="w-full h-80 object-cover rounded"
                src={selectedIndividual.wife}
                alt={`${selectedIndividual.wife}'s image`}
              />
              <p>{selectedIndividual.description}</p>
              {selectedIndividual.name && (
                <div>
                  <h4 className="text-gray-700 font-semibold">Spouse:</h4>
                  <img
                    className="w-32 h-32 object-cover rounded"
                    src={selectedIndividual.wife}
                    alt="Spouse"
                  />
                </div>
              )}
            </div>
          </div>
        </dialog>
      )}

      <div className="py-2 md:py-10 ">
        <img
          src={bg3}
          alt=""
          className="bg-cover w-full my-10  h-fit rounded-md shadow-md "
        />
      </div>
    </>
  );
};

export default Exco;
