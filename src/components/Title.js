import React from "react";

const Title = (props) => {
  let time = new Date(props.time);
  let minutesRemaining = time.getMinutes();
  let secondsRemaining = time
    .getSeconds()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return (
    <div className="title-board text-neon-pink">
      <h1>Wac-A-Mole</h1> <div>{`${minutesRemaining}:${secondsRemaining}`}</div>
    </div>
  );
};

export default Title;
