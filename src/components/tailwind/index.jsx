import React from "react";

const Tailwind = () => {
  return (
    <div className="w-[50%] mx-auto flex justify-evenly">
      <button className="w-[100px] mt-[2rem] cursor-pointer  flex justify-center rounded align-middle p-2 border bg-blue-300 text-white">
        login
      </button>
      <button className="w-[100px] mt-[2rem] cursor-pointer  flex justify-center rounded align-middle p-2 border bg-red-500 text-white">
        Register
      </button>
    </div>
  );
};

export default Tailwind;
