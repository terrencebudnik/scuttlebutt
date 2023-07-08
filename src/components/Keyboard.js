import React, { useState, useEffect } from "react";
import "./Keyboard.css";

const Keyboard = ({ inputName, value, onChange }) => {
  const [isShifted, setIsShifted] = useState(false);

  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleInput = (key) => {
    let newValue;
    if (key === 'space') {
      newValue = input + ' ';
    } else if (key === 'enter') {
      newValue = input + '\n';
    } else {
      newValue = input + (isShifted ? key.toUpperCase() : key);
    }
    
    setInput(newValue);
    onChange({ [inputName]: newValue });
  
    if (isShifted) {
      setIsShifted(false);
    }
  };
  

  const handleBackspace = () => {
    const newValue = input.slice(0, -1);
    setInput(newValue);
    onChange({ [inputName]: newValue });
  };

  const topButtons = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondButtons = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdButtons = ["z", "x", "c", "v", "b", "n", "m"];
  return (
    <div className="keyboard">
      <div className="top-row">
        {topButtons.map((button, idx) => (
          <button key={idx} onClick={() => handleInput(button)}>
            {isShifted ? button.toUpperCase() : button}
          </button>
        ))}
      </div>
      <div className="second-row">
        {secondButtons.map((button, idx) => (
          <button key={idx} onClick={() => handleInput(button)}>
            {isShifted ? button.toUpperCase() : button}
          </button>
        ))}
      </div>
      <div className="third-row">
        <button onClick={() => setIsShifted((prev) => !prev)}>↑</button>
        {thirdButtons.map((button, idx) => (
          <button key={idx} onClick={() => handleInput(button)}>
            {isShifted ? button.toUpperCase() : button}
          </button>
        ))}
        <button onClick={handleBackspace}>←</button>
      </div>
      <div className="fourth-row">
        <button>123</button>
        <button className="space-button">space</button>
        <button>.</button>
        <button>enter</button>
      </div>
    </div>
  );
};

export default Keyboard;
