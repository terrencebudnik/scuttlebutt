import React from "react";
import startScuttleButton from "../images/startScuttleButton.svg";
import "./StartScuttle.css";

function StartScuttle() {
  return (
    <div className="start-scuttle-container">
      <button type="click" className="start-scuttle-button">
      <img
        src={startScuttleButton}
        style={{ height: "100%", color: "black" }}
        alt="start scuttle"
      />
      </button>
    </div>
  );
}

export default StartScuttle;
