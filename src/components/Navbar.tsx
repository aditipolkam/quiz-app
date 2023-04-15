import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between flex-row">
      <div className="font-bold text-2xl">Quiz App</div>
      <div>
        <button className="text-md bg-black text-white px-2 py-1 rounded-md">
          Create quiz
        </button>
      </div>
    </div>
  );
};

export default Navbar;
