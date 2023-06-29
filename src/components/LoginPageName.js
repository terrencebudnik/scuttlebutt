import React, { useState } from "react";
import "./LoginPageName.css";

function LoginPageName({ handleSubmitName }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="login-name-container">
      <h1 className="login-name-title">Enter Your Name</h1>
      <form
        className="login-name-form"
        onSubmit={(event) => handleSubmitName(event, firstName, lastName)}
      >
        <div className="name-input-container">
          <input
            className="name-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="name-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button id="sign-in-button" type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPageName;
