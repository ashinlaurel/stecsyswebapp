import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-stecsys-app.cloudfunctions.net/api";
function App() {
  return (
    <div className="App">
      <div>Hello Checking</div>
    </div>
  );
}

export default App;
