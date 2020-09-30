import React from "react";

const Title = (props) => {
  return (
    <div className="scoreboard text-neon-pink">
      <div className="score-text">Score:</div>
      <div className="score-text">{props.score}</div>
    </div>
  );
};

export default Title;
