// src/App.js
import React from "react";
import holbertonLogo from "./holberton-logo.png";
import { getFullYear, getFooterCopy } from "./utils";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
