import React from "react";
import logo from "./asset/cocktail-logo.png";
import { Link } from "react-router-dom";
import "./App.css";
import DrinkName from "./components/DrinkName";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Hello WORLD</h1>
      <DrinkName />
      <Home />
    </div>
  );
}

export default App;
