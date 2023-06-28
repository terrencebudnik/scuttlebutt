import React, { useState, useEffect } from 'react';
import './Keyboard.css';

const Keyboard = ({ inputName, value, onChange }) => {
  const [isShifted, setIsShifted] = useState(false);

 
  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleInput = (key) => {
    const newValue = input + (isShifted ? key.toUpperCase() : key);
    setInput(newValue);
    onChange({ [inputName]: newValue });
    if (isShifted) {
      setIsShifted(false);
    }
  }

  const handleBackspace = () => {
    const newValue = input.slice(0, -1);
    setInput(newValue);
    onChange({ [inputName]: newValue });
  }

  const buttons = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm',
    '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/'
  ];

  return (
    <div className="keyboard">
      {buttons.map((button, idx) => (
        <button key={idx} onClick={() => handleInput(button)}>{isShifted ? button.toUpperCase() : button}</button>
      ))}
      <button onClick={() => setIsShifted(prev => !prev)}>Shift</button>
      <button onClick={handleBackspace}>Backspace</button>
    </div>
  );
}

export default Keyboard;
