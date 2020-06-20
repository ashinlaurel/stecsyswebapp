import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-transparent pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-black">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="my-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fa fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fa fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fa fa-whatsapp"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/order"
                      >
                        Order
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/login"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="/" className=" hover:text-gray-900">
                  Stec Systems
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
