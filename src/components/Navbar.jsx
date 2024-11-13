import React, { useState } from "react";
import logo from '../assets/image/logo.jpg'
import { Link } from "react-router-dom";
import { navItem } from '../constant/index';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawer] = useState(false); //i.e is closed

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-neutral-700/80 py-3 bg-black text-white">
      <div className="container mx-auto relative px-4 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Adexbits log" className="h-10 w-10 mr-2" />
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItem.map((item, index) => (
              <li
                className="py-2 hover:border-orange-600 hover:border-b-4"
                key={index}
              >
                {" "}
                <Link to={item.href}>{item.label}</Link>{" "}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <Link to="/about" className="px-3 py-2 rounded-md border">
              Event
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Contact Us
            </Link>
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
            <div className="fixed right-0 z-20 bg-neutral-900 w-full px-12 py-8 flex flex-col justify-center items-center  top-16 text-center">
              <ul>
                {navItem.map((item, index) => (
                  <li
                    className="py-3 hover:text-orange-600  hover:font-bold "
                    key={index}
                  >
                    {" "}
                    <Link to={item.href}>{item.label}</Link>{" "}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6 my-2 md:my-0">
                <Link to="/about" className="px-3 py-2 rounded-md border">
                  Event
                </Link>

                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
