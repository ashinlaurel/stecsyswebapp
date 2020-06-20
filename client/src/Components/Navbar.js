import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import menu from "../assets/menu.png";

const Navbar = () => {
  const {
    isLoggedIn,
    setisLoggedIn,
    handle,
    setHandle,
    setUserToken,
    setAdmin,
  } = useContext(LoginContext);
  const Logout = () => {
    setisLoggedIn(false);
    setHandle("");
    setAdmin(false);
  };
  const openDrop = () => {
    const drop = document.querySelector("#drop");
    const ham = document.querySelector("#ham");
    const close = document.querySelector("#close");
    drop.classList.remove("hidden");
    ham.classList.add("hidden");
    close.classList.remove("hidden");
  };
  const closeDrop = () => {
    const drop = document.querySelector("#drop");
    const ham = document.querySelector("#ham");
    const close = document.querySelector("#close");
    drop.classList.add("hidden");
    ham.classList.remove("hidden");
    close.classList.add("hidden");
  };
  return (
    <div className="text-white ">
      <header class=" navbg md:flex md:items-center md:justify-between p-6 pb-0 shadow-lg md:pb-4 ">
        {/* <!-- Logo text or image --> */}
        <div class="flex items-center justify-between  md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <Link class="no-underline text-gray-100 " to="/">
              Stec Systems
            </Link>
          </h1>
          <div
            class="md:ml-4 md:hidden cursor-pointer"
            onClick={openDrop}
            id="ham"
          >
            <img className="fill-current" src={menu} height="20" width="30" />
          </div>
          <div class="hidden cursor-pointer" onClick={closeDrop} id="close">
            X
          </div>
        </div>

        {/* <!-- END Logo text or image --> */}
        {/* <!-- Global navigation --> */}
        <nav className="hidden md:inline mt-5" id="drop">
          <ul class="list-reset md:flex md:items-center font-bold uppercase ">
            <li class="md:ml-4">
              {isLoggedIn ? (
                <Link
                  class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                  to="/admin"
                >
                  Dashboard
                </Link>
              ) : null}
            </li>
            <li class="md:ml-4">
              <Link
                class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                to="/order"
              >
                Order
              </Link>
            </li>
            <li class="md:ml-4">
              <Link
                to="/login"
                class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              >
                {isLoggedIn ? <p>Hi,{handle}</p> : <p>Login</p>}
              </Link>
            </li>
            {isLoggedIn ? (
              <li class="md:ml-4">
                <div
                  class="border-t block no-underline hover:underline py-2 
                text-grey-darkest hover:text-black md:border-none md:p-0"
                  onClick={Logout}
                >
                  Logout
                </div>
              </li>
            ) : (
              <p></p>
            )}
          </ul>
        </nav>
        {/* <!-- END Global navigation --> */}
      </header>
    </div>
  );
};

export default Navbar;
{
  /* <Link to="/admin">
  <div className="text-gray-200 rouded-xl px-4 inline ">Admin</div>
</Link>; */
}
