import React from "react";
import axios from "axios";

// variables
// const apiKey = `?api_key=1`;
const refUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class RandomDrink extends React.Component {
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
      <>
      </>
    );
  }
}
  export default RandomDrink;