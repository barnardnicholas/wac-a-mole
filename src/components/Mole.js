import React, { Component } from "react";

class Mole extends Component {
  render() {
    const { active } = this.props;
    return (
      <div className="mole">
        <div>{active ? "MOLE" : ""}</div>
      </div>
    );
  }
}

export default Mole;
