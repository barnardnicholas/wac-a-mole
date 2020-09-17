import React, { Component } from "react";
import Confetti from "react-dom-confetti";
import HoleBorder from "./HoleBorder";
import Mole from "./Mole";
import { executeNTimes } from "../utils/game";

const config = {
  angle: "90",
  spread: "74",
  startVelocity: 40,
  elementCount: 70,
  dragFriction: "0.11",
  duration: "900",
  stagger: "8",
  width: "10px",
  height: "10px",
  perspective: "703px",
  colors: ["#ec637b", "#f36780", "#e6a1ad"],
};

class Hole extends Component {
  state = {
    lightShowInProgress: false,
    borderToLight: 0,
    holeBorderColors: [null, null, null],
  };
  render() {
    const { active, text, row, col } = this.props;
    const { holeBorderColors } = this.state;
    return (
      <div className="hole" onClick={this.handleClick}>
        <HoleBorder borderColor={holeBorderColors[0]}>
          <HoleBorder borderColor={holeBorderColors[1]}>
            <HoleBorder borderColor={holeBorderColors[2]}>
              <div>
                {active ? (
                  <Mole active={true} text={text} />
                ) : (
                  <Mole active={false} text={text} />
                )}
              </div>
              {/* <Confetti active={active} config={config} /> */}
            </HoleBorder>
          </HoleBorder>
        </HoleBorder>
      </div>
    );
  }

  handleClick = () => {
    const { active, handleHit, handleMiss, row, col } = this.props;
    if (active) {
      handleHit(row, col);
      executeNTimes(this.lightShowHit, "green", 3, 100);
      return null;
    } else {
      handleMiss(row, col);
      executeNTimes(this.lightShowMiss, "yellow", 5, 75);
      return null;
    }
  };

  lightShowHit = (color) => {
    const { holeBorderColors } = this.state;
    if (!holeBorderColors[0] && !holeBorderColors[1] && !holeBorderColors[2]) {
      // No borders lit
      this.setState({ holeBorderColors: [color, null, null] });
    } else if (
      holeBorderColors[0] &&
      !holeBorderColors[1] &&
      !holeBorderColors[2]
    ) {
      // First border lit
      this.setState({ holeBorderColors: [null, color, null] });
    } else if (
      !holeBorderColors[0] &&
      holeBorderColors[1] &&
      !holeBorderColors[2]
    ) {
      // Second border lit
      this.setState({ holeBorderColors: [null, null, color] });
    } else {
      // Third border lit
      this.setState({ holeBorderColors: [null, null, null] });
    }
  };

  lightShowMiss = (color) => {
    const { holeBorderColors } = this.state;
    if (!holeBorderColors[2]) {
      // No borders lit
      this.setState({ holeBorderColors: [null, null, color] });
    } else if (holeBorderColors[2]) {
      // First border lit
      this.setState({ holeBorderColors: [null, null, null] });
    }
  };
}

export default Hole;
