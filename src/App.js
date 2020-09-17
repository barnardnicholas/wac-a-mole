import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Title from "./components/Title";

class App extends Component {
  state = {
    score: 0,
    clicks: 0,
  };
  render() {
    return (
      <div className="App">
        <div></div>
        <div className="perspective-container">
          <Grid
            updateScore={this.updateScore}
            updateClicks={this.updateClicks}
            score={this.state.score}
          />
        </div>
        <div>Clicks: {this.state.clicks}</div>
      </div>
    );
  }
  updateScore = (inc) => {
    this.setState({
      score: (this.state.score += inc),
      clicks: (this.state.clicks += 1),
    });
  };
  updateClicks = (inc) => {
    this.setState({ clicks: (this.state.clicks += inc) });
  };
}

export default App;
