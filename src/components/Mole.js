import React, { Component } from "react";

class Mole extends Component {
  state = {
    style: {
      width: 0,
    },
  };

  render() {
    return <div className={this.props.active ? "mole" : "mole off"}>MOLE</div>;
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ style: { width: "100%" } });
    // }, 200);
  }
}

export default Mole;
