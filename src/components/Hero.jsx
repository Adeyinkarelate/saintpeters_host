import React from "react";

const Hero = ({title}) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://img.freepik.com/free-psd/abstract-background-design_1297-76.jpg?t=st=1731587302~exp=1731590902~hmac=f0c253b9eb29863cf1f73d35c869b3f6f99ed479a557500ff7bd38706a5116e8&w=1060')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Background overlay */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="mt-2 w-12 h-1 bg-orange-500 mx-auto"></div>{" "}
        {/* Underline */}
      </div>
    </div>
  );
};

export default Hero;
