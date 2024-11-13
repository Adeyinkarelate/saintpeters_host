import React from "react";
import ch1 from "../assets/image/ch1.jpg";

const Chairman = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-black">
      <div class="flex flex-col md:flex-row   rounded-lg overflow-hidden shadow-lg">
        <div class=" p-4 md:p-8 text-white flex-1">
          <h2 class="text-3xl font-bold mb-4">Chairman Speech</h2>
          <div class="h-1 w-12 bg-orange-600 mb-4"></div>
          <p class="mb-6 text-sm text-justify tracking-wider leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus vestibulum mauris quis aliquam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris tempus vestibulum mauris quis
            aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper
            id. Quisque at erat eu libero consequat tempus. Quisque molestie
            convallis tempus. Ut semper purus metus, a euismod sapien sodales
            ac. Duis viverra eleifend fermentum.
          </p>
        </div>
        {/*  */}
        <div class="w-full md:w-1/2 h-[450px]">
          <img
            src={ch1}
            alt="Child with guitar"
            class="object-cover w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Chairman;
