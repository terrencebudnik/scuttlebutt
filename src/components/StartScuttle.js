import React from "react";
import { Link } from "react-router-dom";
import startScuttleButton from "../images/startScuttleButton.svg";
import "./StartScuttle.css";

function StartScuttle() {
  return (
    <div className="start-scuttle-container">
      <Link to="/scuttle">
        <img
          src={startScuttleButton}
          style={{ height: "100%", color: "black" }}
          alt="start scuttle"
        />
      </Link>
    </div>
  );
}

export default StartScuttle;
