import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <>
      <div className="p-5 shadow-md mb-10 bg-white rounded-lg">
        <div className="flex justify-between items-center w-full wrapper">
          <div className="text-xl font-semibold">Where in the world?</div>
          <div>light Mode</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
