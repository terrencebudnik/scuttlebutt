import React, { useEffect, useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
} from "firebase/auth";
import { app } from "../firebaseConfig.js";
import "./LoginPagePhone.css";

function LoginPagePhone({ setPhone, handleSubmitPhone }) {
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  useEffect(() => {
    setRecaptchaVerifier(
      new RecaptchaVerifier("sign-in-button", { size: "invisible" }, getAuth(app))
    );
  }, []);

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitPhone(recaptchaVerifier);
  };

  return (
    <div className="login-phone-container">
      <h1 className="login-phone-title">Enter Your Phone Number</h1>
      <form className="login-phone-form" onSubmit={handleSubmit}>
        <div className="phone-input-container">
          <div className="phone-prefix">+1</div>
          <input 
            className="phone-input"
            onChange={handleChange}
            type="text" 
          />
        </div>
        <button id="sign-in-button" type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPagePhone;
