import React from "react";
import googlebadge from "../assets/playbadge.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 bg-white w-full mx-6 sm:mx-32 shadow-xl rounded-lg ">
        <div className="px-6">
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-1 text-gray-800 ">
              What We Do
            </h3>
            <div className="text-sm leading-normal mb-2 text-gray-500 font-bold uppercase">
              -Since 1996
            </div>
          </div>
          <div className="py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
                />
              </div>
              <div className="w-full md:w-5/12 mt-6 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fa fa-desktop text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    One Stop For All Your Computer Needs
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Need computer stationery and accessories seamlessly
                    delivered at your doorstep ? You have come to the right
                    place. You can use our hassle free website or app to place
                    orders.
                  </p>
                  <div className="flex items-center justify-center mt-5">
                    <div className="px-1">
                      <Link to="/order">
                        <button
                          class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          href
                          // style={{"transition: all .15s ease"}}
                        >
                          Order Now
                        </button>
                      </Link>
                    </div>
                    <div className="px-1">
                      <Link to="/">
                        <button
                          class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          href
                          // style={{"transition: all .15s ease"}}
                        >
                          Get The App
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////// */}
            <div className="mt-32">
              <div className=" ">
                <div className="flex items-center justify-center my-10">
                  <div className="text-4xl font-semibold">
                    Our Featured Products
                  </div>
                </div>

                <div className="flex flex-wrap pt-5">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i
                            className="fa fa-sticky-note-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Inkjet Cartridges
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Shop for ink cartridges and print documents in
                          multiple colours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fa fa-print" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Toner Cartridges
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          All varieties of toner cartridges for all your
                          printers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fa fa-refresh" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Toner Refillings
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Refill used toner cartridges without any compromise in
                          the print quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap ">
                  <div className=" w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i
                            className="fa fa-keyboard-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Computer Peripherals
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Keyboards, Mice, touch pads etc at the best prices
                          available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fa fa-retweet" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Consumables</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          All Epson, Canon and Hp Consumables.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Computer Accessories
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Wide collection of products ranging from printers to
                          pendrives and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //???////??? */}
            <div className="flex flex-wrap justify-center items-center mt-20">
              <div className="w-full md:w-5/12 mt-6 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fa fa-user text-xl"></i>
                  </div>
                  <h3 className="text-4xl font-semibold">About Us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    For the past two decades we have been moving towards
                    excellence by delivering our clients the best products and
                    reliable services. Shop with us and we will take care of all
                    your company's computer needs.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fa fa-circle"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Seamless Online Ordering Process
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fa fa-circle"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Superior Quality Products
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fa fa-circle"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Best Prices</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
