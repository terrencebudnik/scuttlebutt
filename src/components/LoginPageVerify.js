import React, { useRef, useEffect } from "react";
import KeyboardComponent from "./KeyboardComponent";
import './LoginPageVerify.css';

function LoginPageVerify({ code, handleCodeChange, handleSubmitCode }) {
  const keyboardRef = useRef(code);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);

  return (
      <>
    <div className="login-verify-container">
    <form className="login-verify-form" onSubmit={handleSubmitCode}>
    <h1 className="login-verify-title">Enter Code Sent to Phone</h1>
      
      <input
        type="text"
        value={code}
        onChange={(e) => handleCodeChange({ "Verification Code": e.target.value })}
      />

      <button type="submit" className="submit-button">
        Verify Code
      </button>
    </form>
    </div>

    <KeyboardComponent
      inputNames={["Verification Code"]}
      value={code}
      onChange={handleCodeChange}
    />

    </>
  );
}

export default LoginPageVerify;
