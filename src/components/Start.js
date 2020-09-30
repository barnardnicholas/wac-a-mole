import React from "react";
import { Link } from "@reach/router";

const Start = () => {
  return (
    <div>
      <Link to="/game" className="menu-link text-neon-pink">
        Start
      </Link>
    </div>
  );
};

export default Start;
