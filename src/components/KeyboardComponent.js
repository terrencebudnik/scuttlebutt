import React, { useState, useEffect, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./KeyboardComponent.css"

const KeyboardComponent = ({inputNames, value, onChange}) => {
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const setInputValue = inputValue => {
    if (keyboard.current) {
      keyboard.current.setInput(inputValue);
    }
  };

  const handleKeyboardChange = (input) => {
    console.log("Input changed", input);
    // Call parent's onChange handler
    onChange({ [inputNames[0]]: input });
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <div>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={handleKeyboardChange}
        onKeyPress={onKeyPress}
        inputName={inputNames[0]}
      />
    </div>
  );
}

export default KeyboardComponent;