import React from "react";
import Hero from "../components/Hero";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "putapi");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
      event.target.reset();
    } else {
      Swal.fire("Error : Contact admin");
    }
  };
  return (
    <>
      <Hero title="Contact" />
      <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-50 space-y-8 md:space-y-0 md:space-x-8 my-32">
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Get in touch with us
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus vestibulum mauris quis aliquam. Integer accumsan sodales
            odio, id tempus velit ullamcorper id.
          </p>

          <div className="flex space-x-4 text-orange-500 mb-4">
            <a href="#" className="hover:text-orange-700">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>

          <div className="flex flex-col space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt text-orange-500 "></i>
              <span>+234 000000 0000</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <i className="fas fa-envelope text-orange-500 "></i>
              <span>mailstpetersociety@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-orange-500 "></i>
              <span>Abeokuta,Ogun state</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            <textarea
              name="message"
              placeholder="Messages"
              required
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 h-80 resize-none"
            ></textarea>
            <button
              type="submit"
              className="self-start px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
            >
              Contact us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
