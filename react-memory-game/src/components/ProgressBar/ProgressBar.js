import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

const ProgressBar = props => (
  <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar-light bg-light sticky-top">
    <Container>
      <Row>
        <Col size="md-4">
          <a className="navbar-brand" href="/">Clicky Game</a>
        </Col>
        <Col size="md-4">
            {props.progressReport}
        </Col>
        <Col size="md-4">
          Score: {props.currentScore} | Top Score: {props.topScore}
        </Col>
      </Row>
    </Container>
  </nav>
);

export default ProgressBar;
