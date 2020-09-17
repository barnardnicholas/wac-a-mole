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
        <div className="h1-container">
          <h1>Wac-A-Mole - Score: {this.state.score}</h1>
        </div>
        {/* <Grid updateScore={this.updateScore} updateClicks={this.updateClicks} /> */}
        <Title />
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
