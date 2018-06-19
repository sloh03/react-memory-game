import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div onClick={() => props.handleClick(props.id)} className="game-card">
    <img src={props.image} alt={props.name} className="img-thumbnail" />
  </div>
);

export default GameCard;