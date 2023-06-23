import React, { useRef, useEffect } from "react";
import Keyboard from "./Keyboard";
import "./LoginPagePhone.css";

function LoginPagePhone({ phone, handlePhoneChange, handleSubmitPhone }) {
  const keyboardRef = useRef(phone);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);
  return (
    <>
      <div className="login-phone-container">
          <h1 className="login-phone-title">Enter Your Phone Number</h1>
        <form className="login-phone-form" onSubmit={handleSubmitPhone}>
        <div className="phone-input-container">
        <div className="phone-prefix">+1</div>
          <input 
            className="phone-input"
            type="text" 
            value={phone} 
            onChange={(e) => handlePhoneChange({ "Phone Number": e.target.value })}
          />
          
          </div>
          <button id="sign-in-button" type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* <Keyboard
  inputName="Phone Number"
  value={phone}
  onChange={handlePhoneChange}
/> */}

    </>
  );
}

export default LoginPagePhone;
