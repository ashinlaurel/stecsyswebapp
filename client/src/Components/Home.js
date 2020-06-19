import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landingimage.png";
import Navbar from "./Navbar";
import "../css/mainpage.css";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="appbody h-screen">
        <div className="flex justify-around items-center pt-24 ">
          <div className="flex flex-col h-full justify-center items-center">
            <div>
              <img src={Logo} height="75" width="75" />
            </div>
            <div className="text-6xl text-gray-200 border-black">
              Stec Systems
            </div>
            <div className="text-2xl text-gray-200 border-black">
              Suppliers For All Your Computer Needs
            </div>
            <div className="text-left mt-6">
              <Link to="/order">
                <button
                  className="bg-blue-500 text-white hover:bg-blue-700  font-bold uppercase text-base px-4 py-1 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fa fa-shopping-cart"></i> Order Now
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <img className="max-w-sm " src={LandingImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
