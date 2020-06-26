import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import Axios from "axios";
import LoginPromptAdmin from "./LoginPromptAdmin";
import { withRouter } from "react-router-dom";

function Signup(props) {
  const [username, setUsername] = useState("front");
  const [email, setEmail] = useState("fron@end.com");
  const [password, setPassword] = useState("password");
  const [confPassword, setConfPassword] = useState("password");
  const [err, setErr] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

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
    // console.log(context);
    console.log(isLoggedIn);
    setErr("");
    e.preventDefault();
    const userCred = {
      handle: username,
      email,
      password,
      confPassword,
      isAdmin,
    };
    if (password !== confPassword) setErr("Passwords Do not Match");
    else {
      Axios.post("/signup", userCred)
        .then((res) => {
          // console.log(res);
          setisLoggedIn(true);
          setHandle(username);
          setAdmin(isAdmin);
          // setUserToken(res)
          setUsername("");
          setEmail("");
          setPassword("");
          setConfPassword("");
          setErr("Account Created");
          props.history.push("/");
        })
        .catch((err) => {
          setErr(err.response.data.message);
        });
    }
  };
  const handleCheckBox = (e) => {
    setIsAdmin(e.target.checked);
  };

  return (
    <>
      {isLoggedIn && Admin ? (
        <main>
          <div className="text-xl"> </div>
          <section className="absolute w-full h-full">
            <div className="absolute top-0 w-full h-full bg-gray-900"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-800 text-xl font-bold">
                          Sign Up
                        </h6>
                      </div>
                      {/* <div className="text-lg m-20">sdassdaasdasd</div> */}

                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            UserName
                          </label>
                          <input
                            type="test"
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Username"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
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
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Confirm Password"
                            style={{ transition: "all .15s ease" }}
                            value={confPassword}
                            onChange={(e) => {
                              setConfPassword(e.target.value);
                            }}
                          />
                        </div>
                        <label class="md:w-2/3 block text-gray-500 font-bold">
                          <input
                            class="mr-2 leading-tight"
                            type="checkbox"
                            onChange={(e) => handleCheckBox(e)}
                          />
                          <span class="text-sm">Admin Account</span>
                        </label>

                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={(e) => handleSubmit(e)}
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="text-center">
                          <p> {err} </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div>
          <LoginPromptAdmin />
        </div>
      )}
    </>
  );
}

export default withRouter(Signup);
