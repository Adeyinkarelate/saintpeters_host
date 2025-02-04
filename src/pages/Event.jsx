import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import { sections } from "../constant";





export default function NewsGrid() {
  const [selected, setSelected] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const name = "What's New";

  
  return (
    <>
    <Hero title={name} />
    
    <div className="container mx-auto p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative bg-gray-100 p-4 rounded-lg cursor-pointer hover:shadow-lg h-64 flex items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${section.images[0]})` }}
            onClick={() => setSelected(section)}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-b-lg w-full">
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              <p className="text-gray-300 text-sm">{section.category}</p>
              <p className="text-gray-200 mt-2 font-semibold">{section.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="text-gray-600 mt-2">{selected.category}</p>
              <p className="text-gray-700 mt-4 text-sm tracking-wider text-justify">{selected.fulld}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                {selected.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt="detail"
                    className="rounded-lg object-cover w-full h-32 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setZoomedImage(img)}
                  />
                ))}
              </div>
              <div className="mt-6 text-right">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => setSelected(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              src={zoomedImage}
              alt="Zoomed"
              className="rounded-lg max-w-full max-h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

