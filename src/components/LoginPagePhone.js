import React from "react";
import "./LoginPagePhone.css";

function LoginPagePhone({ phone, handlePhoneChange, handleSubmitPhone }) {
  return (
    <div className="login-phone-container">
      <form className="login-phone-form" onSubmit={handleSubmitPhone}>
        <h1 className="login-phone-title">Enter Your Phone Number</h1>
        <input
          className="phone-input"
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={handlePhoneChange}
        />
        <button id="sign-in-button" type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPagePhone;
