import React, { useRef, useEffect } from "react";
import KeyboardComponent from "./KeyboardComponent";
import "./LoginPagePhone.css";

function LoginPagePhone({ phone, handlePhoneChange, handleSubmitPhone }) {
  const keyboardRef = useRef(phone);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);
  return (
    <>
      <div className="login-phone-container">
        <form className="login-phone-form" onSubmit={handleSubmitPhone}>
          <h1 className="login-phone-title">Enter Your Phone Number</h1>

          <button id="sign-in-button" type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <KeyboardComponent style={{color: "red", display: "flex", flexDirection: "column", width: "368px"}}
        keyboardRef={keyboardRef}
        inputNames={["Phone Number"]}
        value={phone}
        onChange={handlePhoneChange}
      />
    </>
  );
}

export default LoginPagePhone;
