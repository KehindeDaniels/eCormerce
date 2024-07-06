import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex gap-8 justify-around">
      <NavLink to="/">Home</NavLink>
      <NavLink to="cart">
        <div className="flex items-center justify-center gap-2">
          <p className="flex-1">Cart</p>
          <div className="flex-1 h-8 w-8 bg-red-500 text-white flex justify-center items-center rounded-full">
            3
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
