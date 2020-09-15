import React, { Component } from "react";

class HoleBorder extends Component {
  render() {
    return <div className="hole-border">{this.props.children}</div>;
  }
}

export default HoleBorder;
