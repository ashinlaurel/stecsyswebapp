import React, { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState("false");
  const [handle, setHandle] = useState("test");
  const [token, setToken] = useState("");
  return (
    <LoginContext.Provider vlaue={[handle, setHandle]}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
