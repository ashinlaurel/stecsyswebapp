import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/landingimage.png";
import Navbar from "./Navbar";
import "../css/mainpage.css";
import Logo from "../assets/logoc.png";
import LogoGif from "../assets/logogif.gif";
import AboutUs from "./Aboutus";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="appbody h-full min-h-screen">
        <div className="flex flex-col sm:flex-row justify-around items-center pt-24 mx-5 sm:mx-0 overflow-hidden">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="mx-2">
              <img className="" src={Logo} height="95" width="95" />
            </div>
            <div
              className="text-5xl text-center sm:text-6xl text-gray-200 border-black leading-none heading"
              id="heading"
            >
              Stec Systems
            </div>
            <div className="text-base text-center sm:text-xl text-gray-200 border-black pt-1 heading">
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
            <img className="max-w-sm " src={LogoGif} />
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
