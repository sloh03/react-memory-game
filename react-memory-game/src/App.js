import React, { Component } from "react";
import ProgressBar from "./components/ProgressBar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

let currentScore = 0;
let topScore = 0;
let progressReport = "Click any image to begin!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    progressReport,
    currentScore,
    topScore
  };

  // Component mounted to DOM
  componentDidMount() {
  }

  // Function to shuffle array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <ProgressBar 
          progressReport={progressReport} 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.friends.map(friend => (
            <GameCard
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
