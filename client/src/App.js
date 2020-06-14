import React from "react";
import "./css/styles.css";
import axios from "axios";
import Home from "./Components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Order from "./Components/Order";
import Admin from "./Components/AdminPage/Admin";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LoginContextProvider from "./Context/LoginContext";

// Uncomment During Production-----------------------------------------------------------------------------------
// axios.defaults.baseURL =
//   "https://us-central1-stecsys-app.cloudfunctions.net/api";
// --------Also dont forget to change proxy in client's package.json---------------------------------------------

axios.defaults.baseURL = "http://localhost:3001";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/order">
          {" "}
          <Order />{" "}
        </Route>
        <Route exact path="/admin">
          {" "}
          <Admin />{" "}
        </Route>
        <Route exact path="/login">
          {" "}
          <Login />{" "}
        </Route>
        <Route exact path="/signup">
          <LoginContextProvider>
            <Signup />
          </LoginContextProvider>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
