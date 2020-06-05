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
  // grab videos by ID
  // getVideo = (videoId) => {
  //   axios.get(`${refUrl}${videoId}/${apiKey}`).then((response) => {
  //     console.log("Video data is retrieved");
  //     this.setState({ mainVideo: response.data });
  //     console.log(this.state.mainVideo);
  //   });
  // };
  // init
  componentDidMount() {
    console.log("comp mounted");
    this.getRandomDrink(); // call getPosts() method, many posts
    // this.getVideo("1ae5jruuoc4q"); // call getPost() method, single post
  }


  // // check if video needs to be changed
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.match.params.id);
  //   console.log(this.props.match.params.id);
  //   if (prevProps.match.params.id !== this.props.match.params.id)
  //     this.getVideo(this.props.match.params.id);
  // }

  render() {
    return (
      <>
      </>
    );
  }
}
  export default RandomDrink;