import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import menu from "../assets/menu.png";

const Navbar = (props) => {
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
    closeDrop();
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
      <header class=" navbg md:flex md:items-center md:justify-between p-6 pb-2 shadow-lg md:pb-4 ">
        {/* <!-- Logo text or image --> */}
        <div class="flex items-center justify-between mb-2  md:mb-0">
          <h1 class="leading-none text-base sm:text-2xl text-grey-darkest">
            <Link class="no-underline hover:text-white" to="/">
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
            <span className="md:hidden">X</span>
          </div>
        </div>

        {/* <!-- END Logo text or image --> */}
        {/* <!-- Global navigation --> */}
        <nav className="hidden md:inline " id="drop">
          <ul class="list-reset md:flex md:items-center font-bold uppercase  ">
            <li class="md:ml-4">
              <Link
                onClick={() => closeDrop()}
                class="block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="md:ml-4">
              {isLoggedIn ? (
                <Link
                  onClick={() => closeDrop()}
                  class="block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
                  to="/admin"
                >
                  Dashboard
                </Link>
              ) : null}
            </li>
            <li class="md:ml-4">
              <Link
                onClick={() => closeDrop()}
                class="border-t block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
                to="/order"
              >
                Order
              </Link>
            </li>
            <li class="md:ml-4">
              <Link
                onClick={() => closeDrop()}
                to="/login"
                class="border-t block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
              >
                {isLoggedIn ? <p>Hi,{handle}</p> : <p>Login</p>}
              </Link>
            </li>
            {isLoggedIn ? (
              <li class="md:ml-4">
                <Link
                  onClick={() => closeDrop()}
                  to="/signup"
                  class="border-t block no-underline  py-2 
                text-grey-darkest md:border-none md:p-0"
                >
                  Create Users
                </Link>
              </li>
            ) : (
              <p></p>
            )}
            {isLoggedIn ? (
              <li class="md:ml-4">
                <Link
                  to="/"
                  class="border-t block no-underline  py-2 
                text-grey-darkest md:border-none md:p-0"
                  onClick={Logout}
                >
                  Logout
                </Link>
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
