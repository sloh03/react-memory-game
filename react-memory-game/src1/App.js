import React from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image/Image";
import Card from "./components/Card";

const App = () => (
  <div>
    <ProgressBar />
    <Jumbotron />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
        </div>
        <div className="col-sm-9">
          <div className="col-sm-4">
            <Image />
          </div>
        <Card />
        </div>
      </div>
    </div>
  </div>
);

export default App;
