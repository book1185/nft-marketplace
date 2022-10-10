import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftInterface from "./components/LeftInterface/LeftInterface";
import RightInterface from "./components/RightInterface/RightInterface";

function App() {
  return ( 
    <div className="flex justify-center">
      <div className="flex w-5/6 ">
      <LeftInterface />
      <RightInterface/>
    </div>
    </div>
  );
}

export default App;
