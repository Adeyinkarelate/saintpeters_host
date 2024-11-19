import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Current = () => {
  const name = "Current Executives";

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

      {/*  */}
      <motion.div
        variants={socialIconsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto md:px-12 my-10 px-3"
      >
        <div className="grid md:grid-cols-3 gap-4 md:px-4 ">
          <div class="relative h-[450px] rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1732030129~exp=1732033729~hmac=b309b946d517536981a2a8c35ecba05d86d65d233534687757bf57b8db863d38&w=360"
              alt="Background"
              class="w-full h-full object-cover"
            />

            <div class="absolute bottom-2 left-2 flex flex-row justify-between items-center space-x-4 bg-black opacity-70 p-5 w-full">
              <div>
                <h2 className="text-white font-bold">MR ADAMAWARA JOSEPH</h2>
                <p className="text-white ">Vice President</p>
              </div>
              {/*  */}
              <button
                className="btn bg-[#f77f00]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Read More
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">MR & MRS. ADAMAWARA JOSEPH</h3>
                  <div className="p-4 flex flex-row gap-3">
                    <div>
                      <img  class="w-full h-full object-cover" src="https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1732030129~exp=1732033729~hmac=b309b946d517536981a2a8c35ecba05d86d65d233534687757bf57b8db863d38&w=360" alt="" />
                    </div>
                    {/*  */}

                  </div>
                </div>
              </dialog>
              {/*  */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Current;
