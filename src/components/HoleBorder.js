import React, { Component } from "react";
import { borderColorClasses } from "../utils/data";

class HoleBorder extends Component {
  state = {
    style: {
      action: null,
      color: `#eedde0`,
      boxShadow: `0 0 10px #ec637b, 0 0 10px #ec637b inset, 0 0 10px rgba(230, 161, 173, 0.1), 0 0 10px rgba(230, 161, 173, 0.1) inset,
      0 0 20px #f36780, 0 0 20px #f36780 inset`,
    },
    classNameAppend: "",
  };
  render() {
    const { borderColor } = this.props;
    return (
      <div
        className={`hole-border ${
          borderColor ? borderColorClasses[borderColor] : ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default HoleBorder;
