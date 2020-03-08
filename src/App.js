import React from "react";
import Header from "../src/header";
import Dropdown from "../src/dropdown";
import './App.css'
  function App(){

    return (
      <div>
        <Header />
        <div align="center" className="border">
          <div className = "dropdownbox">
          <Dropdown></Dropdown>
          </div>
        </div>
      </div>
    );
  }


export default App;
