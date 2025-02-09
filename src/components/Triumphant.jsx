import React from "react";
import { members } from "../constant";
import { motion } from "framer-motion";

const Triumphant = () => {
  return (
    <section className="overflow-x-hidden px-12 py-16 text-black mb-10">
      <div className="mx-auto mb-10 lg:max-w-5xl flex  flex-col items-start md:items-center space-y-3 ">
        <motion.h2
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block text-3xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400"
        >
          MEMBERS TRIUMPHANT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className=" text-lg tracking-wider  md:text-center text-justify  "
        >
          Members Triumphant were members that have died while belonging to the
          society. While alive, these members did a lot to project the image of
          the society. May our good Lord Grant them eternal rest. Amen
        </motion.p>

        {/*  */}
        <div className=" py-16">
          <div className="grid md:grid-cols-3 gap-4  my-5">
            {members.map((p, index) => (
              <div
                className=" p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
                key={index}
              >
                <img
                  className="rounded h-64 object-cover w-full"
                  src={p.image}
                  alt=""
                />
                <p className="font-bold mt-2 mb-1">{p.name}</p>
                {/* <p className=" text-slate-900 text-sm">{p.position}</p> */}
                <p className=" text-orange-600 font-bold text-sm">{p.DD}</p> 
              </div>
            ))}
          </div>
        </div>

        {/*  */}
      </div>
      {/*  */}
    </section>
  );
};

export default Triumphant;
