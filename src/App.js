import React, { Component } from "react";
import "./App.css";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
// import Particles from "tsparticles";

const app = new Clarifai.App({
  apiKey: "bf6119b29bd7434597136d19b76024f0",
});

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable_auto: true,
      distance: 200,
    },
  },
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //   },
  //   modes: {
  //     repulse: {
  //       distance: 239.76023976023978,
  //       duration: 0.4,
  //     },
  //   },
  // },
  // retina_detect: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    // app.models
    //   .predict(Clarifai.COLOR_MODEL, "https://i.imgur.com/YKWBcVF.jpg")
    //   .then(
    //     function (response) {
    //       console.log(response);
    //     },
    //     function (err) {}
    //   );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
