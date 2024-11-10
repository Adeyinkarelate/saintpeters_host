import React from "react";
import logo from "../assets/image/logo.jpg";
import { Link } from "react-router-dom";
import { navItem } from "../constant/index";

const Navbar = () => {
  return (
    <div className="sticky backdrop-blur-0 bg-neutral-900 text-white top-0">
      <div className="container mx-auto py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <img src={logo} alt="st peters" className="h-10 w-10" />

          <ul className="hidden md:flex justify-center items-center  space-x-4">
            {navItem.map((item, index) => (
              <li
                className="py-2 hover:text-orange-600"
                key={index}
              >
                <Link to={item.href} className="text-sm">{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center gap-3 items-center">
            <Link to="/Members" className="px-3 py-2 rounded-md border text-sm">
              Members Triumphant
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md text-sm"
            >
              Contact Us
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
