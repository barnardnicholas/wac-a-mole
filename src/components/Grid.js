import React, { Component } from "react";
import Hole from "./Hole";
import Title from "./Title";
import ScoreBoard from "./ScoreBoard";
class Grid extends Component {
  state = {
    grid: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    holeActions: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    spawnPending: false,
    finishPending: false,
  };
  render() {
    const { grid, holeActions } = this.state;
    return (
      <div className="grid-container">
        <div>
          <Title time={this.props.timeRemaining} />
        </div>
        <div className="grid">
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                text="Q"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][0] ? true : false}
                action={holeActions[0][0]}
                row={0}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="W"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][1] ? true : false}
                action={holeActions[0][1]}
                row={0}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="E"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[0][2] ? true : false}
                action={holeActions[0][2]}
                row={0}
                col={2}
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                text="A"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][0] ? true : false}
                action={holeActions[1][0]}
                row={1}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="S"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][1] ? true : false}
                action={holeActions[1][1]}
                row={1}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="D"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[1][2] ? true : false}
                action={holeActions[1][2]}
                row={1}
                col={2}
              />
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <Hole
                text="Z"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][0] ? true : false}
                action={holeActions[2][0]}
                row={2}
                col={0}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="X"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][1] ? true : false}
                action={holeActions[2][1]}
                row={2}
                col={1}
              />
            </div>
            <div className="grid-col">
              <Hole
                text="C"
                handleHit={this.handleHit}
                handleMiss={this.handleMiss}
                active={grid[2][2] ? true : false}
                action={holeActions[2][2]}
                row={2}
                col={2}
              />
            </div>
          </div>
        </div>
        <div>
          <ScoreBoard score={this.props.score} />
        </div>
      </div>
    );
  }

  handleHit = (row, col) => {
    this.setState((currentState) => {
      let newGrid = [...currentState.grid];
      let newHoleActions = [...currentState.holeActions];
      newGrid[row][col] = false;
      newHoleActions[row][col] = "hit";
      return { grid: newGrid, holeActions: newHoleActions };
    });
    this.props.updateScore(1);
    this.spawnAction(row, col, "hit");
  };

  handleMiss = (row, col) => {
    this.props.updateClicks(1);
  };

  resetGrid = () => {};

  handleKeyPress = (e) => {
    const keyData = {
      q: [0, 0],
      w: [0, 1],
      e: [0, 2],
      a: [1, 0],
      s: [1, 1],
      d: [1, 2],
      z: [2, 0],
      x: [2, 1],
      c: [2, 2],
    };
    if (keyData.hasOwnProperty(e.key)) {
      const { grid } = this.state;
      if (grid[keyData[e.key][0]][keyData[e.key][1]]) {
        this.handleHit(keyData[e.key][0], keyData[e.key][1]);
      }
    }
  };

  spawnHole = () => {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.setState((currentState) => {
      let newGrid = [...currentState.grid];
      let newHoleActions = [...currentState.holeActions];
      // newHoleActions[row][col] = "hit";
      newGrid[row][col] = true;
      return {
        grid: newGrid,
        spawnPending: false,
      };
    });
    setTimeout(() => {
      this.setState((currentState) => {
        let newGrid = [...currentState.grid];
        // let newHoleActions = [...currentState.holeActions];
        // newHoleActions[row][col] = null;
        newGrid[row][col] = false;
      });
    }, Math.random() * 1000 + 250);
  };

  spawnAction = (row, col, action) => {
    this.setState((currentState) => {
      let newHoleActions = [...currentState.holeActions];
      newHoleActions[row][col] = action;
      return {
        holeActions: newHoleActions,
      };
    });
    setTimeout(() => {
      this.setState((currentState) => {
        let newHoleActions = [...currentState.holeActions];
        newHoleActions[row][col] = null;
        return {
          holeActions: newHoleActions,
        };
      });
    }, 300);
  };

  queueSpawn = () => {
    const repeater = setTimeout(this.spawnHole, Math.random() * 1000 + 200);
    this.setState({ spawnPending: true });
  };

  componentDidMount() {
    if (this.props.gameStatus === "inProgress") {
      this.queueSpawn();
    }
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.gameStatus === "finished" && this.state.finishPending) {
      this.setState({
        grid: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        holeActions: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
        spawnPending: false,
        finishPending: true,
      });
    } else if (
      !this.state.spawnPending &&
      this.props.gameStatus === "inProgress"
    ) {
      this.queueSpawn();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }
}

export default Grid;
