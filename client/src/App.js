import React from "react";
import logo from "./asset/cocktail-logo.png";
import { Link } from "react-router-dom";
import "./App.css";
import DrinkName from "./components/DrinkName";
import Home from "./components/Home";

class App extends React.Component {
    // state
    state = {
      randomDrinkArray: [],
    };
    // grab all videos
    getRandomDrink = () => {
      console.log("test");
      axios
        .get(`${refUrl}`)
        .then((response) => {
          // console.log(response.data);
  
          this.setState({ randomDrinkArray: response.data }, () =>
            console.log(this.state.randomDrinkArray)
          );
        })
        .catch((err) => console.log(err));
    };
    componentDidMount() {
      console.log("comp mounted");
      this.getRandomDrink();
    }
    
  render() { 
   return (
    <div className="App">
      <h1>Hello WORLD</h1>
      <DrinkName />
      <Home />
    </div>
  );
}
}
export default App;
