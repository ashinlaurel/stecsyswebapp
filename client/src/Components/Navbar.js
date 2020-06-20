import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 py-65 bg-blue-900 ">
      <NavLink to="/">
        <hi className="text-2xl m-2 text-gray-200 m">Stec Systems</hi>
      </NavLink>
      <NavLink to="/order">
        <div className="text-gray-200 rouded-xl p-4 inline">Order Now</div>
      </NavLink>
      <NavLink to="/admin">
        <div className="text-gray-200 rouded-xl p-4 inline m-5">Admin</div>
      </NavLink>
      <NavLink to="/signup">
        <div className="text-gray-200 rouded-xl p-4 inline m-5">Sign Up</div>
      </NavLink>
      <NavLink to="/login">
        <div className="text-gray-200 rouded-xl p-4 inline m-5">Sign In</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
