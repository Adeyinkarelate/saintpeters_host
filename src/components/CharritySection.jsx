import React from "react";
import { motion } from "framer-motion";
import bg3 from "../assets/image/bg3.jpg";
import bg1 from "../assets/image/b1.jpg"
import b2 from "../assets/image/b2.jpg"

const CharritySection = () => {
  return (
    <section className="bg-orange-50  py-20 px-6 md:px-16 min-h-[600px]">
      <div className="max-w-12xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-green-500 uppercase tracking-wide">
            EVENT /CHARITY
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950">
            ST PETER’S SOCIETY <br /> EVENTS
          </h2>
          <p className=" text-neutral-900">
            In the area of charity, the society had contributed its little quota
            to the help of the needy and the less priviledged members of the
            society within and outside the church.
          </p>
          {/* Customer Info */}
          <div className="flex items-center space-x-4">
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
              onClick={() => document.getElementById("my_modal_46").showModal()}
            >
              Read More
            </motion.button>
            <dialog id="my_modal_46" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-600 text-3xl">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  FAMILY CARE – Children’s Party, Presidential Night, Excursions
                  and Easter Picnics In the area of family care, the society is
                  not found wanting. <br /> <br />
                  Since inception the society organizes children Christmas party
                  for members children every December of the 1st year of the two
                  year tenure of any President while in the second year, the
                  President organizes a presidential night where members and
                  their wives are always in attendance to mark the end of the
                  tenure of the President and his executive council. <br />{" "}
                  <br />
                  To further give the family members a sense of belonging and to
                  further educate them, the society began in 1985 yearly
                  excursions to tourists Centre and places of interest for
                  members and their families as part of its anniversary
                  celebrations. However, the project could not continue after
                  1985 until it was resuscitated in 2001. And has since been a
                  regular yearly event to date. <br /> <br /> In 1985, the
                  society and their family members visited the then OGTV, State
                  Hotel Abeokuta and the Olumo Rock. On 29th of July 2001
                  (Patron Feast Day of S S Peter & Paul), the society went on
                  excursion to Minor Seminary Oke Are, Major. It is particular
                  heart warning that from inception till date, the society has
                  remained a positive force to reckon with not only at St. Anne
                  Catholic Church but in the entire Abeokuta Deanery. <br /> At
                  the moment, our members spread across the following churches:{" "}
                  <br />
                  <br />
                  SS Peter & Paul Church, Itesi, Abeokuta. <br />
                  St, Anne Catholic Church, Ibara, Abeokuta. <br />
                  St. Rita Catholic Church, Ijaye, Abeokuta. <br />
                  Our Lady Seat of Wisdom Catholic Church, Adigbe, Abeokuta.{" "}
                  <br />
                  St. Andrew Catholic Church, Olomore, Abeokuta. <br />
                  St. Martins Catholic Church, Eleweran, Abeokuta. <br />
                  Blessed Tansi Catholic Church, Aule Road, Akure. <br />
                  St. Luke Catholic Church,Osogbo.
                </p>
              </div>
            </dialog>

            {/*  */}
          </div>
        </div>
        {/* Right Side */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div
            id="default-carousel"
            class="relative w-full h-auto"
            data-carousel="slide"
          >
            <div class="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={b2}
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:min-h-[600px] object-cover"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={bg1}
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:min-h-[600px] object-cover"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={bg3}
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:min-h-[650px] object-cover"
                  alt="..."
                />
              </div>

              {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-4.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-5.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div> */}
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>

            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharritySection;
