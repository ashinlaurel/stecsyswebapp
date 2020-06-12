import React, { useState } from "react";
import axios from "axios";

export default function Order() {
  const theform = {
    name: "",
    phone: "",
    email: "",
    companyname: "",
    orders: "",
  };

  const [values, setValues] = useState(theform);

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
    axios
      .post("/neworder", values)
      .then((response) => {
        console.log("Promise Working"); /// TODO---  Why not working??----
      })
      .catch((err) => {
        console.log(err);
      });
    setValues(theform);
  };

  return (
    <div>
      <div className="h-full py-65 bg-gray-300 mx-3 md:mx-16 lg:mx-32  my-20 rounded-lg shadow-xl">
        <div className="mx-2 md:mx-24 text-center py-20">
          <span className="text-4xl  text-gray-800 block pb-8">ORDER NOW</span>
          <form onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800  md:text-right mb-1 md:mb-0 pr-4"
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
                  className="block text-gray-800  md:text-right mb-1 md:mb-0 pr-4"
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
                  className="block text-gray-800  md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Company
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
                  className="block text-gray-800  md:text-right mb-1 md:mb-0 pr-4"
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
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-800  md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Order
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  name="orders"
                  value={values.orders}
                  onChange={handleInput}
                />
              </div>
            </div>

            <button className="py-2 px-6 m-2 rounded-full bg-blue-500 text-white shadow-lg">
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
