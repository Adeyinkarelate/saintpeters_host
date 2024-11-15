import React from "react";
import chair from "../assets/image/ch1.jpg";

const Chairman = () => {
  return (
    <div class="bg-white">
      <section class="py-16 px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center lg:items-start">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={chair}
            alt="Hand holding a book"
            class="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        <div class="w-full lg:w-1/2 lg:pl-12  ">
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Mr. George Opara
          </h3>
          <h2 class="mt-4 text-3xl font-bold text-gray-900 leading-tight">
            Chairman Speech
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut
            sem viverra aliquet eget sit amet. Nunc scelerisque.
          </p>
          {/*  */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn my-4"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Read More
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis debitis repellat quos quis, similique consectetur voluptatibus harum libero minima ipsa eos iure illo soluta in dolorum cum. Sequi fuga, fugiat corporis minus nesciunt impedit quos earum, reiciendis, a excepturi harum iure. Quasi beatae reprehenderit quam natus optio soluta doloribus ipsum sequi rerum iure. Minus aspernatur porro magnam nam ducimus!
              </p>
            </div>
          </dialog>

          {/*  */}
        </div>
      </section>
    </div>
  );
};

export default Chairman;
