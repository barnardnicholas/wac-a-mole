import React from "react";
import { Link } from "@reach/router";

const EndGame = (props) => {
  return (
    <div className="end-container">
      <div>
        <div>
          <Link to="/" className="menu-link text-neon-pink ">
            Main Menu
          </Link>
        </div>
        <div>
          <Link to="/game" className="menu-link text-neon-pink ">
            Restart
          </Link>
        </div>
      </div>
      <div>
        Score: {props.score} clicks: {props.clicks}
      </div>
      <div></div>
    </div>
  );
};

export default EndGame;
