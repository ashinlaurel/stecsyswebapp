import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landingimage.png";
import Navbar from "./Navbar";
import "../css/mainpage.css";
import Logo from "../assets/logo.svg";
import AboutUs from "./Aboutus";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="appbody h-full min-h-screen">
        <div className="flex flex-col sm:flex-row justify-around items-center pt-24 ">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="">
              <img className="" src={Logo} height="75" width="75" />
            </div>
            <div className="text-5xl sm:text-6xl text-gray-200 border-black leading-tight">
              Stec Systems
            </div>
            <div className="text-xl sm:text-2xl text-gray-200 border-black">
              Suppliers For All Your Computer Needs
            </div>
            <div className="text-left mt-6">
              <Link to="/order">
                <button
                  className="bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-xl px-6 py-4 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
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
        <div className="flex items-center justify-center mt-40 ">
          <AboutUs />
        </div>
        <div className="w-full h-20"></div>
        <Footer />
      </div>
    </div>
  );
}
