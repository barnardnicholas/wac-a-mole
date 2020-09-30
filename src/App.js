import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Title from "./components/Title";
import { Router } from "@reach/router";
import EndGame from "./components/EndGame";
import Start from "./components/Start";
// import { timer } from "./utils/game";

let timer;

class App extends Component {
  state = {
    score: 0,
    clicks: 0,
    timeRemaining: 100000,
    gameStatus: "inProgress",
  };
  render() {
    return (
      <div className="App">
        <div></div>
        <div className="perspective-container">
          <Router>
            <Start path="/" />
            <Grid
              path="/game"
              updateScore={this.updateScore}
              updateClicks={this.updateClicks}
              score={this.state.score}
              timeRemaining={this.state.timeRemaining}
              gameStatus={this.state.gameStatus}
            />
            <EndGame
              path="/endgame"
              score={this.state.score}
              clicks={this.state.clicks}
            />
          </Router>
        </div>
        {/* <div>Clicks: {this.state.clicks}</div> */}
        <div></div>
      </div>
    );
  }

  incrementTime = (inc) => {
    this.setState((currentState) => {
      const newTime = currentState.timeRemaining - inc;
      if (newTime < 0) clearInterval(timer);
      return { timeRemaining: newTime };
    });
  };

  handleEndGame = () => {
    clearInterval(timer);
    this.setState(() => {
      window.location = "/endgame";
      return { timeRemaining: 0, gameStatus: "finished" };
    });
  };

  updateScore = (inc) => {
    this.setState({
      score: (this.state.score += inc),
      clicks: (this.state.clicks += 1),
    });
  };

  updateClicks = (inc) => {
    this.setState({ clicks: (this.state.clicks += inc) });
  };

  componentDidMount() {
    console.log("mounted");
    timer = setInterval(() => {
      if (
        this.state.timeRemaining > 0 &&
        this.state.gameStatus === "inProgress"
      )
        this.incrementTime(1000);
      else this.handleEndGame();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }
}

export default App;
