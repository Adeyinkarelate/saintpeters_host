import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setFormData({ username: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-50 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Get in touch with us
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
          vestibulum mauris quis aliquam. Integer accumsan sodales odio, id
          tempus velit ullamcorper id.
        </p>

        <div className="flex space-x-4 text-orange-500 mb-4">
         
          <a href="#" className="hover:text-orange-700">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>

        <div className="flex flex-col space-y-2 text-gray-700">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt text-orange-500 "></i>
            <span>+45 677 8993000 223</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <i className="fas fa-envelope text-orange-500 "></i>
            <span>mailstpetersociety@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt text-orange-500 "></i>
            <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Messages"
            rows="4"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="self-start px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Contact us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
