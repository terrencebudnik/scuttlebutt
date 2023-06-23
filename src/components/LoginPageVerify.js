import React, { useRef, useEffect } from "react";
import './LoginPageVerify.css';

function LoginPageVerify({ code, handleCodeChange, handleSubmitCode }) {
  const keyboardRef = useRef(code);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);

  return (
      <>
    <div className="login-verify-container">
    <h1 className="login-verify-title">Enter Code Sent to Phone</h1>
    <form className="login-verify-form" onSubmit={handleSubmitCode}>
      <div className="code-input-container">

      <input className="code-input"
        type="text"
        value={code}
        onChange={(e) => handleCodeChange({ "Verification Code": e.target.value })}
      />
      </div>
      <button type="submit" className="submit-button">
        Verify Code
      </button>
    </form>
    </div>

    

    </>
  );
}

export default LoginPageVerify;
