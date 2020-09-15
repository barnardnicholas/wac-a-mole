import React, { Component } from "react";
import Confetti from "react-dom-confetti";
import HoleBorder from "./HoleBorder";
import Mole from "./Mole";

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
  render() {
    const { active, text } = this.props;
    return (
      <div className="hole" onClick={this.handleClick}>
        <HoleBorder>
          <HoleBorder>
            <HoleBorder>
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
      return null;
    } else {
      handleMiss(row, col);
      return null;
    }
  };
}

export default Hole;
