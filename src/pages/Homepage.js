import React, { useState } from "react";
import ScuttlebuttGame from "../components/ScuttlebuttGame";
import MainHeader from "../components/MainHeader";

import "./Homepage.css";

function Homepage() {
  const [scuttlebuttGame, setScuttlebuttGame] = useState(false);

  const toggleGame = () => setScuttlebuttGame(!scuttlebuttGame);

  return (
    <div className="homepage">
      <MainHeader />
      {!scuttlebuttGame && (
        <button className="play-button" onClick={toggleGame}>
          What's the Scuttlebutt?
        </button>
      )}
      {scuttlebuttGame && (
        <ScuttlebuttGame toggleGame={toggleGame} />
      )}
 
    </div>
  );
}

export default Homepage;
