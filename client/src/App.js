import React from "react";
import "./App.css";
import "./css/styles.css"
import axios from "axios";
import Home from "./Components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Order from "./Components/Order";

// Uncomment During Production-----------------------------------------------------------------------------------
// axios.defaults.baseURL =
//   "https://us-central1-stecsys-app.cloudfunctions.net/api";
// --------Also dont forget to change proxy in client's package.json---------------------------------------------
function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/order"> <Order/> </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;






