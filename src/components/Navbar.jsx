import React, { useState } from "react";
import logo from "../assets/image/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { navItem } from "../constant/index";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileDrawerOpen, setMobileDrawer] = useState(false); //i.e is closed

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-late-100 py-3 text-black ">
      <div className="container mx-auto relative px-4 text-sm md:px-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Adexbits log" className="h-10 w-10 mr-2" />
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItem.map((item, index) => (
              <li
                className="py-2 font-medium underline decoration-transparent hover:decoration-orange-600 decoration-[3px] underline-offset-8 transition"
                key={index}
              >
                {" "}
                <NavLink to={item.href}>{item.label}</NavLink>{" "}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <button
              onClick={() => navigate("contact")}
              className="bg-gradient-to-r text-white font-medium from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Contact
            </button>
          </div>

          <div className="flex lg:hidden flex-column justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <i className="fa-sharp fa-solid fa-xmark text-3xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-3xl"></i>
              )}
            </button>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 text-white w-full px-12 py-8 flex flex-col justify-center items-center  top-16 text-center">
              <ul>
                {navItem.map((item, index) => (
                  <li
                    className="py-3 hover:text-orange-600  hover:font-bold "
                    key={index}
                  >
                    {" "}
                    <NavLink to={item.href}>{item.label}</NavLink>{" "}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6 my-2 md:my-0">
                <button
                  onClick={() => navigate("contact")}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
