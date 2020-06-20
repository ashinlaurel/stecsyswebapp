import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

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
  return (
    <div className="/">
      <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        {/* <!-- Logo text or image --> */}
        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <Link
              class="no-underline text-grey-darkest hover:text-black"
              to="/"
            >
              Stec Systems
            </Link>
          </h1>
        </div>
        {/* <!-- END Logo text or image --> */}
        {/* <!-- Global navigation --> */}
        <nav>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <Link
                class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                to="/admin"
              >
                Dashboard
              </Link>
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
              <div class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                {isLoggedIn ? <p>Hi,{handle}</p> : <p>Login</p>}
              </div>
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
