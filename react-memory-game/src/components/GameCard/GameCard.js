import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="game-card">
    <img src={props.image} alt={props.name} class="img-thumbnail" />
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default GameCard;