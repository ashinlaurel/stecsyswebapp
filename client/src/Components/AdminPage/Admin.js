import React, { useContext } from "react";
import TableData from "./Table";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";
import Login from "../Login";
import LoginPrompt from "../LoginPrompt";
const Admin = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="bg-white h-full min-h-screen">
      {!isLoggedIn ? <LoginPrompt /> : <TableData />}
    </div>
  );
};

export default Admin;
