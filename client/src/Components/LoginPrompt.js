import React from "react";
import { Link } from "react-router-dom";
export default function LoginPrompt() {
  return (
    <div>
      <div class="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <div class="h-screen w-full absolute flex items-center justify-center bg-modal">
          <div class="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
            <div class="mb-4">
              <h1>Oops!</h1>
            </div>
            <div class="mb-8">
              <p>You are not logged in. Please log in to continue!</p>
            </div>
            <div class="flex justify-center">
              <Link to="/">
                <button
                  className="bg-green-500 text-white mx-5 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Home
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="bg-green-500 text-white mx-5 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
