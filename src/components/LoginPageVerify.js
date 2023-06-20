import React from 'react';
import './LoginPageVerify.css';

function LoginPageVerify({ code, handleCodeChange, handleSubmitCode }) {
  return (
    <div className="login-verify-container">
    <form className="login-verify-form" onSubmit={handleSubmitCode}>
    <h1 className="login-verify-title">Enter Code Sent to Phone</h1>
      <input
        className="code-input"
        type="text"
        placeholder="Verification code"
        value={code}
        onChange={handleCodeChange}
      />
      <button type="submit" className="submit-button">
        Verify Code
      </button>
    </form>
    </div>
  );
}

export default LoginPageVerify;
