import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// Uncomment During Production-----------------------------------------------------------------------------------
// axios.defaults.baseURL =
//   "https://us-central1-stecsys-app.cloudfunctions.net/api";
// --------Also dont forget to change proxy in client's package.json---------------------------------------------
function App() {
  return (
    <div className="App">
      <div>Hello Checking</div>
    </div>
  );
}

export default App;
