import React, { Component } from "react";
import Mole from "./Mole";

class Grid extends Component {
  state = {
    grid: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
  };
  render() {
    const { grid } = this.state;
    return (
      <div className="grid">
        <div className="grid-row">
          <div className="grid-col">
            <Mole active={grid[0][0] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[0][1] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[0][2] ? true : false} />
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-col">
            <Mole active={grid[1][0] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[1][1] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[1][2] ? true : false} />
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-col">
            <Mole active={grid[2][0] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[2][1] ? true : false} />
          </div>
          <div className="grid-col">
            <Mole active={grid[2][2] ? true : false} />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
