import React, { Component } from "react";
import ProgressBar from "./components/ProgressBar";
import Jumbotron from "./components/Jumbotron";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <ProgressBar />
        <Jumbotron />
        <Wrapper>
        {/* <Container />
          <Row>
            <Col size="md-12"> */}
          {this.state.friends.map(friend => (
            <GameCard
              name={friend.name}
              image={friend.image}
            />
            // <FriendCard
            //   removeFriend={this.removeFriend}
            //   id={friend.id}
            //   key={friend.id}
            //   name={friend.name}
            //   image={friend.image}
            //   occupation={friend.occupation}
            //   location={friend.location}
            // />
          ))}
        </Wrapper>
        {/* </Col>
        </Row>
        <Container /> */}
      </div>
    );
  }
}

export default App;
