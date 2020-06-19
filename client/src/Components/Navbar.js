import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 py-65 bg-blue-900">
      <hi className="text-2xl text-gray-200 m-20">Stec Systems</hi>
      <Link to="/order">
        <div className="text-gray-200 rouded-xl p-4 inline">Order Now</div>
      </Link>
      <Link to="/admin">
        <div className="text-gray-200 rouded-xl p-4 inline m-5">Admin</div>
      </Link>
    </div>
  );
};

export default Navbar;
