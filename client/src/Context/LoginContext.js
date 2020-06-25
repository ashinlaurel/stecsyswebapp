import React, { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [handle, setHandle] = useState("");
  const [userToken, setUserToken] = useState("");
  const [Admin, setAdmin] = useState(false);
  // const [handle, setHandle] = useState("test");
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setisLoggedIn,
        handle,
        setHandle,
        userToken,
        setUserToken,
        Admin,
        setAdmin,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
