import React from "react";
import chair from "../assets/image/diyaolu.png";
import { motion } from "framer-motion";

const Chairman = () => {
  return (
    <section className="bg-orange-50  overflow-x-hidden px-3 md:px-12  py-16">
      <section className=" lg:px-16 flex flex-col-reverse lg:flex-row items-center lg:items-center  px-3 md:px-12  py-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 my-4 md:my-0">
          <img
            src={chair}
            alt="Hand holding a book"
            className="rounded-tl-badge rounded-br-badge shadow-lg object-cover w-[30rem] mx-auto  "
          />
        </div>

        <div className="w-full max-w-2xl lg:w-1/2 lg:pl-12 h-fit ">
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
            Mr. George Diyaolu
          </motion.h3>
          <motion.h2
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 text-3xl font-bold text-gray-900 leading-tight"
          >
            President Speech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 text-gray-600 text-sm text-justify tracking-wider"
          >
            I welcome you to St. Peter Society’s website. This Society has been
            in existence since 1983. It has its roots in St. Anne Catholic
            Church, Ibara, Abeokuta, Ogun State, in the Catholic Diocese of
            Abeokuta. <br /> <br /> Today, members of the Society cut across
            different parishes in the Catholic Diocese of Abeokuta. We have our
            members worshiping at St. Anne Catholic Church, Ibara; Our Lady Seat
            of Wisdom Adigbe; St. Andrew Catholic Church, Olomore; Holy Family
            Catholic Church, Asero; and St. Rita, Catholic Church, Ijaye...
          </motion.p>
          {/*  */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <motion.button
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="btn my-4 bg-[#ff7433] text-white"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Read More
          </motion.button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Cont..</h3>
              <p className="py-4 mt-4 text-gray-600 text-sm text-justify tracking-wider">
                We are dedicated Catholics and gentlemen of like minds who came
                together to promote Christianity within and outside the Catholic
                Church. We foster cooperation and love among members and our
                families through the organization of educational and
                recreational activities for members and our families. <br />
                <br />
                St. Peter Society is a family society in that as you join, your
                wife and children are automatically inducted into the membership
                of the Society. <br />
                <br />
                Membership of the Society is open ONLY to baptized, gainfully
                employed, and married Catholic men who are communicants and are
                in good standing in the Church. <br />
                <br />
                The Society selects its membership through a very rigorous
                recruitment/membership process which spans about three (3)
                months for prospective members. <br />
                <br />
                The constitution of the Society (as amended) provides for a
                maximum of 30 membership strength. However, as of the moment
                (year ending 2024), the Society has 27 financially active
                members. <br />
                <br />
                The Society is well known in the Catholic Diocese of Abeokuta
                for its proactive and dynamic nature of membership and family
                programmes. <br />
                <br />
                It is my pleasure therefore, to introduce and welcome you to the
                Society of the moment, the great St. Peter Society. <br />
                <br /> Thank you. <br />
                <br />
                Mr. George Oludare Diyaolu  <br />
                President
              </p>
            </div>
          </dialog>

          {/*  */}
        </div>
      </section>
    </section>
  );
};

export default Chairman;
