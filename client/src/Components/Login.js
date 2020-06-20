import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../Context/LoginContext";

export default function Login() {
  const [email, setEmail] = useState("adminacc@stec.com");
  const [password, setPassword] = useState("password");
  const [err, setErr] = useState("");

  const {
    isLoggedIn,
    setisLoggedIn,
    handle,
    setHandle,
    userToken,
    setUserToken,
    Admin,
    setAdmin,
  } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    const userData = {
      email,
      password,
    };
    Axios.post("/login", userData)
      .then((res) => {
        let user = res.data;
        setisLoggedIn(true);
        setHandle(user.handle);
        setAdmin(user.isAdmin);
        // console.log(user);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.res);
        setErr(err.response.data.message);
      });
  };
  return (
    <>
      <LoginContext.Consumer>
        {(context) => {
          return (
            <main>
              <section className="absolute w-full h-full">
                <div
                  className="absolute top-0 w-full h-full bg-gray-900"
                  // style={{
                  //   backgroundImage:
                  //     // "url(" + require("assets/img/register_bg_2.png") + ")",
                  //   backgroundSize: "100%",
                  //   backgroundRepeat: "no-repeat"
                  // }}
                ></div>
                <div className="container mx-auto px-4 h-full">
                  <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                          <div className="text-center mb-3">
                            <h6 className="text-gray-600 text-sm font-bold">
                              Sign in with
                            </h6>
                          </div>

                          <hr className="mt-6 border-b-1 border-gray-400" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <form>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                placeholder="Password"
                                style={{ transition: "all .15s ease" }}
                              />
                            </div>

                            <div className="text-center mt-6">
                              <button
                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={(e) => handleSubmit(e)}
                              >
                                Sign In
                              </button>
                            </div>
                            <div className="text-center">
                              <p> {err} </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          );
        }}
      </LoginContext.Consumer>
    </>
  );
}
