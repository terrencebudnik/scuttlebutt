import React from 'react';

function LoginPageVerify({ code, handleCodeChange, handleSubmitCode }) {
  return (
    <form onSubmit={handleSubmitCode}>
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
  );
}

export default LoginPageVerify;
