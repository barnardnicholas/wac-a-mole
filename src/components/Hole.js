import React, { Component } from "react";
import Mole from "./Mole";

class Hole extends Component {
  render() {
    const { active } = this.props;
    return (
      <div className="hole" onClick={this.handleClick}>
        <div>{active ? <Mole /> : ""}</div>
      </div>
    );
  }

  handleClick = () => {
    const { active, handleHit, handleMiss, row, col } = this.props;
    if (active) {
      handleHit(row, col);
      return null;
    } else {
      handleMiss(row, col);
      return null;
    }
  };
}

export default Hole;
