import React, { Component } from "react";
import ProgressBar from "./components/ProgressBar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

let progressReport = "Click any image to begin! ";
let currentScore = 0;
let topScore = 0;

class App extends Component {

  // Declaring states of the app compnent
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    progressReport,
    currentScore,
    topScore
  };

  // Function to shuffle array
  shuffleFriends = friends => {
    for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
    }
  }

  // Function to run when a friend is clicked
  handleClick = id => {

    // Use friends array
    const friends = this.state.friends;

    // Filter for the friend that was clicked
    const clickedFriend = friends.filter(friend => friend.id === id);

    // If the friend has already been clicked (incorrect guess)
    if (clickedFriend[0].clicked === true) {

      // Update progress report - lose
      progressReport = "You've already clicked that. Better luck next game!"
      this.setState({progressReport});

      // Reset friends clicked to back to false
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }
      this.setState({friends});

      // Reset current score back to 0
      currentScore = 0;
      this.setState({currentScore});
    }

    // Else if the friend has not been clicked before (correct guess)
    else if (clickedFriend[0].clicked === false) {

      // Set friend clicked to true
      clickedFriend[0].clicked = true;
      this.setState({friends});

      // Add 1 to current score
      currentScore++;
      this.setState({currentScore});
    
      // If current score is less than 12 (not a win yet)
        if (currentScore < 11) {

          // Update progress report - correct
          progressReport = "Correct! Keep going!"
          this.setState({progressReport});

          // If current score exceeds top score
          if (currentScore > topScore) {

            // Set top score equal to current score
            topScore = currentScore;
            this.setState({topScore});
          
          }

          // Shuffle the friends positions on the page
          this.shuffleFriends(friends);
        }

      // Else (current score = 12, player wins)
      else if (currentScore === 12) {

        // Update progress report - win
        progressReport = "Yes! You win! Click on an image to play again."
        this.setState({progressReport});

        // Reset friends clicked to back to false
        for (let i = 0; i < friends.length; i++) {
          friends[i].clicked = false;
        }
        this.setState({friends});

        // Reset current score back to 0
        currentScore = 0;
        this.setState({currentScore});
      }
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
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
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
