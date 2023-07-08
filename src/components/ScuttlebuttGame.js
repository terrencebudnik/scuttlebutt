import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import "./ScuttlebuttGame.css";

function ScuttlebuttGame({ toggleGame }) {
  const [gamePhase, setGamePhase] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [inputValue, setInputValue] = useState('');

  const startGame = () => {
    setGamePhase(1);
  };

  useEffect(() => {
    let timer;
    if (gamePhase === 1 && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (gamePhase === 1 && countdown === 0) {
      setGamePhase(2);
      setCountdown(5);
    } else if (gamePhase === 2 && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (gamePhase === 2 && countdown === 0) {
      setGamePhase(3);
      setCountdown(10);
     
    } else if (gamePhase === 3 && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (gamePhase === 3 && countdown === 0) {
      toggleGame();
    }

    return () => clearTimeout(timer);
  }, [gamePhase, countdown, toggleGame]);

  return (
    <div className="scuttlebutt-game-container">
      <button className="close-game-button" onClick={toggleGame}>
        X
      </button>
      {gamePhase === 0 && (
        <button className="start-game-button" onClick={startGame}>
          Click to Play
        </button>
      )}
      {gamePhase === 1 && (
        <div className="scuttlebutt-nested-game">
          <div className="scuttlebutt-nested-game-body">
            {countdown !== null && <p>{countdown}</p>}
          </div>
        </div>
      )}
      {gamePhase === 2 && (
        <div className="scuttlebutt-nested-game2">
          <div className="scuttlebutt-nested-game2-body">
            {countdown !== null && (
              <p>This is the scuttlebutt, but is it is the truth?</p>
            )}
          </div>
        </div>
      )}
      {gamePhase === 3 && (
        <div className="scuttlebutt-game-submission">
          <textarea
            type="text"
            placeholder="Enter the Scuttlebutt Here"
            value={inputValue} // Here we use the inputValue state to control the textarea's content.
            readOnly // This makes textarea uneditable and won't trigger the mobile device's default keyboard.
          />
          <Keyboard
            inputName="input"
            value={inputValue}
            onChange={(newValue) => setInputValue(newValue.input)} // Update inputValue state when keyboard inputs change.
          />
        </div>
      )}
    </div>

  );
}

export default ScuttlebuttGame;
