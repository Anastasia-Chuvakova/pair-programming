import React from "react";
import axios from "axios";

const refUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

class DrinkName extends React.Component {
  // state
  state = {
    DrinkArray: [],
  };
  // grab all videos
  getDrinkName = () => {
    console.log("test");
    axios
      .get(`${refUrl}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ DrinkArray: response.data }, () =>
          console.log(this.state.DrinkArray)
        );
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    console.log("comp mounted");
    this.getDrinkName(); // call getPosts() method, many posts
    // this.getVideo("1ae5jruuoc4q"); // call getPost() method, single post
  }

  render() {
    return (
      <>
        {/* <ul>
          {this.state.getDrinkName.map((data) => (
            <li>
              <h2>{data.strAlcoholic}</h2>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}
export default DrinkName;
