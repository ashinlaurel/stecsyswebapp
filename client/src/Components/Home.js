import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landingimage.png";

export default function Home() {
  return (
    <div>
      <div className="h-full py-65 bg-yellow-100">
        <hi className="text-2xl m-20">Stec Systems</hi>
        <Link to="/order">
          <div className="bg-blue-600 rouded-xl p-4 inline">Order Now</div>
        </Link>
        <Link to="/admin">
          <div className="bg-blue-600 rouded-xl p-4 inline m-5">Admin</div>
        </Link>
      </div>
      <div className="h-40"></div>
      <div className="flex justify-around bg-white h-full">
        <div className="flex flex-col border h-full justify-center ">
          <div className="text-6xl border border-black">Stec Systems</div>
          <div className="text-2xl border border-black">
            Suppliers All Your Computer Needs
          </div>
          <div className="text-left">
            <button
              className="bg-blue-500 text-white hover:bg-blue-700  font-bold uppercase text-base px-4 py-1 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <i className="fa fa-shopping-cart"></i> Order Now
            </button>
          </div>
        </div>
        <div className="h-full border border-black">
          <img className="max-w-sm" src={LandingImg} />
        </div>
      </div>
    </div>
  );
}
