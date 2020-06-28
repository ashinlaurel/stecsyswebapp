import React, { useState } from "react";
import axios from "axios";
import spinner from "../assets/spinner3.gif";

export default function Order() {
  const theform = {
    name: "",
    phone: "",
    email: "",
    companyname: "",
    orders: "",
  };

  const [values, setValues] = useState(theform);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setLoading(true);
    axios
      .post("/neworder", values)
      .then((response) => {
        setValues(theform);
        setShowModal(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="appbody h-full min-h-screen">
      <div className="w-full h-20"></div>
      <div className="h-full py-65 bg-gray-300 bg-opacity-50 mx-4 md:mx-16 lg:mx-32 rounded-lg shadow-xl">
        <div className="mx-2 text-center py-10 flex flex-col items-center justify-center  ">
          <span className="text-4xl  text-gray-800 block pb-8">ORDER NOW</span>

          <form className="px-4 sm:px-20 w-full" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6  ">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-Item"
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={values.name}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Company Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  name="companyname"
                  value={values.companyname}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800 md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Mobile Number
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Order/Enquiry
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  rows="5"
                  id="inline-full-name"
                  type="text"
                  name="orders"
                  value={values.orders}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <button className="py-2 px-6 m-2 rounded-full bg-blue-500 text-white shadow-lg outline-none focus:outline-none">
              Order
            </button>
          </form>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">Order Placed</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                      Your order has been successfully placed. You will be soon
                      contacted by our executives. Thank You for doing business
                      with us.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {/* //loading */}
        {loading ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={spinner} />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
