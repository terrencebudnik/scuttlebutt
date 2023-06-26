import React from "react";
import "./LoginPageVerify.css";

function LoginPageVerify({ setCode, handleSubmitCode }) {
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="login-verify-container">
      <h1 className="login-verify-title">Enter Code Sent to Phone</h1>
      <form className="login-verify-form" onSubmit={handleSubmitCode}>
        <div className="code-input-container">
          <input className="code-input" onChange={handleChange} type="text" />
        </div>
        <button type="submit" className="submit-button">
          Verify Code
        </button>
      </form>
    </div>
  );
}

export default LoginPageVerify;
