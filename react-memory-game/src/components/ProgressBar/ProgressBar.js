import React from "react";

const ProgressBar = props => (
<nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar-light bg-light sticky-top">
  <a className="navbar-brand" href="/">Clicky Game</a>
  <div>
      {props.progressReport}
  </div>
  <div>
    Score: {props.currentScore} | Top Score: {props.topScore}
  </div>
</nav>
);

export default ProgressBar;
