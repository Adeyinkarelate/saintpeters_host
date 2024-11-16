import React from "react";
import { motion } from "framer-motion";

const socialIconsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const socialIconsChildren = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 lg:px-16 bg-gray-900 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
        <div>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 max-w-md text-gray-400">
            Ecosystem bootstrapping learning curve lean startup disruptive.
            Marketing long tail disruptive agile development partner.
          </p>
          <motion.div
            variants={socialIconsVariants}
            initial="hidden"
          whileInView="visible"
            className="flex space-x-4 mt-6 text-gray-400"
          >
            <motion.a
              variants={socialIconsChildren}
              href="#"
              className="hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-10 4.5-10 10.06 0 5.02 3.66 9.16 8.46 9.93v-7.02h-2.54v-2.91h2.54v-2.22c0-2.5 1.52-3.89 3.74-3.89 1.06 0 1.97.08 2.24.11v2.6h-1.54c-1.21 0-1.44.58-1.44 1.42v1.87h2.89l-.38 2.91h-2.51v7.02c4.8-.77 8.46-4.91 8.46-9.93 0-5.56-4.5-10.06-10-10.06z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconsChildren}
              href="#"
              className="hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-7 19.14c-3.92 0-7.14-3.22-7.14-7.14s3.22-7.14 7.14-7.14 7.14 3.22 7.14 7.14-3.22 7.14-7.14 7.14zm6.3-10.54c-.25-.25-.66-.25-.92 0l-1.3 1.3c-.24.24-.24.63 0 .86.25.25.66.25.92 0l1.3-1.3c.25-.24.25-.66 0-.86z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconsChildren}
              href="#"
              className="hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.83 8.29c-.41-.41-1.08-.41-1.5 0l-5.53 5.53-2.12-.89-6.12 6.11c-.41.41-.41 1.08 0 1.5.41.41 1.08.41 1.5 0l6.11-6.12-.88-2.11 5.53-5.54c.41-.41.41-1.08 0-1.5z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconsChildren}
              href="#"
              className="hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.8.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.72 8.72 0 01-2.7 1.04 4.38 4.38 0 00-7.47 3 4.42 4.42 0 00.11 1 12.3 12.3 0 01-8.8-4.53 4.33 4.33 0 00-.59 2.2c0 1.53.78 2.88 1.96 3.67a4.25 4.25 0 01-1.98-.54v.06c0 2.13 1.52 3.92 3.52 4.33a4.47 4.47 0 01-1.96.07 4.4 4.4 0 004.1 3.04 8.76 8.76 0 01-6.58 1.83 12.34 12.34 0 006.6 1.95c7.93 0 12.26-6.58 12.26-12.28 0-.18 0-.36-.01-.53a8.74 8.74 0 002.17-2.22l-.02-.03z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row space-x-8 gap-4 items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.8.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.72 8.72 0 01-2.7 1.04 4.38 4.38 0 00-7.47 3 4.42 4.42 0 00.11 1 12.3 12.3 0 01-8.8-4.53 4.33 4.33 0 00-.59 2.2c0 1.53.78 2.88 1.96 3.67a4.25 4.25 0 01-1.98-.54v.06c0 2.13 1.52 3.92 3.52 4.33a4.47 4.47 0 01-1.96.07 4.4 4.4 0 004.1 3.04 8.76 8.76 0 01-6.58 1.83 12.34 12.34 0 006.6 1.95c7.93 0 12.26-6.58 12.26-12.28 0-.18 0-.36-.01-.53a8.74 8.74 0 002.17-2.22l-.02-.03z" />
              </svg>
              <span className="text-gray-400">dribbble.com/example</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 1.5c-4.1 0-7.5 1.61-7.5 3.6v1.65c0 .82.68 1.5 1.5 1.5h12c.82 0 1.5-.68 1.5-1.5v-1.65c0-1.99-3.4-3.6-7.5-3.6z" />
              </svg>
              <span className="text-gray-400">contact@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
