import React, { Component } from "react";
import Hole from "./Hole";
// import { timer, pickSquare } from "../utils/game.js";

class Grid extends Component {
  state = {
    grid: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    spawnPending: false,
    gameRunning: true,
  };
  render() {
    const { grid } = this.state;
    return (
      <div className="grid-container">
        <div className="grid">
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][0] ? true : false}
                row={0}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][1] ? true : false}
                row={0}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][2] ? true : false}
                row={0}
                col={2}
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][0] ? true : false}
                row={1}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][1] ? true : false}
                row={1}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][2] ? true : false}
                row={1}
                col={2}
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][0] ? true : false}
                row={2}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][1] ? true : false}
                row={2}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][2] ? true : false}
                row={2}
                col={2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleHit = (row, col) => {
    this.setState((currentState) => {
      let newGrid = [...currentState.grid];
      newGrid[row][col] = false;
      return { grid: newGrid };
    });
    this.props.updateScore(1);
  };

  handleMiss = (row, col) => {
    this.props.updateClicks(1);
  };

  spawnHole = () => {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.setState((currentState) => {
      let newGrid = [...currentState.grid];
      newGrid[row][col] = true;
      return {
        grid: newGrid,
        spawnPending: false,
      };
    });
    setTimeout(() => {
      this.setState((currentState) => {
        let newGrid = [...currentState.grid];
        newGrid[row][col] = false;
      });
    }, Math.random() * 1000 + 250);
  };

  queueSpawn = () => {
    const repeater = setTimeout(this.spawnHole, Math.random() * 1000 + 200);
    this.setState({ spawnPending: true });
  };

  componentDidMount() {
    if (this.state.gameRunning) {
      this.queueSpawn();
    }
  }
  componentDidUpdate() {
    if (!this.state.spawnPending && this.state.gameRunning) {
      this.queueSpawn();
    }
  }
}

export default Grid;
